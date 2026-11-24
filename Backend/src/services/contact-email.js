import pool from "../config/db.js";

async function sendEmail(message, idempotencyKey) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_EMAIL_FROM;

  if (!apiKey || !from) {
    throw new Error("Resend sending configuration is missing");
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "Idempotency-Key": idempotencyKey,
    },
    body: JSON.stringify({ from, ...message }),
    signal: AbortSignal.timeout(7000),
  });

  if (!response.ok) {
    throw new Error(`Resend returned HTTP ${response.status}`);
  }

  const { id } = await response.json();

  if (!id) {
    throw new Error("Resend did not return a message ID");
  }

  return id;
}

export async function sendContactEmails(contact) {
  const inbox = process.env.CONTACT_EMAIL_TO;

  if (!inbox) {
    throw new Error("CONTACT_EMAIL_TO is required");
  }

  // Older enquiries may still use their original database ID as the reference.
  const reference = contact.reference_number ?? contact.id;

  const jobs = [
    {
      type: "acknowledgement",
      alreadyAccepted: contact.acknowledgement_resend_id,
      message: {
        to: [contact.email],
        reply_to: inbox,
        subject: `We received your enquiry | Reference #${reference}`,
        text: [
          `Hi ${contact.full_name},`,
          "",
          "Thank you for contacting Rozer Technologies. We've received your enquiry and our team will review it.",
          "",
          `Your reference number is #${reference}.`,
          "",
          `For more information, reply to this email or contact us at ${inbox}. Please include your reference number so we can find your enquiry.`,
          "",
          "Regards,",
          "Rozer Technologies",
        ].join("\n"),
      },
    },
    {
      type: "notification",
      alreadyAccepted: contact.notification_resend_id,
      message: {
        to: [inbox],
        reply_to: contact.email,
        subject: `New website enquiry | Reference #${reference}`,
        text: [
          `Reference: #${reference}`,
          `Name: ${contact.full_name}`,
          `Email: ${contact.email}`,
          `Phone: ${contact.phone_number}`,
          `Company: ${contact.company_address || "Not provided"}`,
          `Service: ${contact.service_required}`,
          `Received at: ${new Date(contact.created_at).toISOString()}`,
          "",
          "Project details",
          contact.project_details,
        ].join("\n"),
      },
    },
  ].filter((job) => !job.alreadyAccepted);

  const results = await Promise.allSettled(
    jobs.map(async (job) => {
      const messageId = await sendEmail(
        job.message,
        `rozer-contact/${contact.id}/${job.type}`,
      );

      await pool.query(
        `UPDATE public.contacts
         SET acknowledgement_resend_id = COALESCE($2, acknowledgement_resend_id),
             notification_resend_id = COALESCE($3, notification_resend_id),
             updated_at = NOW()
         WHERE id = $1`,
        [
          contact.id,
          job.type === "acknowledgement" ? messageId : null,
          job.type === "notification" ? messageId : null,
        ],
      );
    }),
  );

  results.forEach((result, index) => {
    if (result.status === "rejected") {
      console.error("Contact email failed", {
        reference,
        type: jobs[index].type,
        error: result.reason.message,
      });
    }
  });
}