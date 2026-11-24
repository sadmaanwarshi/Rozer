import { createContact } from "../models/contact.model.js";
import { sendContactEmails } from "../services/contact-email.js";

const MAX_LENGTHS = {
  fullName: 150,
  email: 255,
  phoneNumber: 30,
  companyAddress: 250,
  serviceRequired: 150,
  projectDetails: 5000,
};

export async function createContactController(req, res) {
  const body = req.body ?? {};
  const fields = {};

  for (const [field, maxLength] of Object.entries(MAX_LENGTHS)) {
    const optional = field === "companyAddress";
    const value = body[field] ?? "";

    if (typeof value !== "string") {
      return res.status(400).json({
        success: false,
        field,
        message: "Enter a valid value.",
      });
    }

    const cleaned = value.trim();
    if ((!optional && !cleaned) || cleaned.length > maxLength) {
      return res.status(400).json({
        success: false,
        field,
        message: `Enter ${optional ? "up to" : "1 to"} ${maxLength} characters.`,
      });
    }

    fields[field] = cleaned;
  }

  fields.email = fields.email.toLowerCase();
  fields.phoneNumber = fields.phoneNumber.replace(/[\s().-]/g, "");

  if (!/^[^\s@,<>]+@[^\s@,<>]+\.[^\s@,<>]+$/.test(fields.email)) {
    return res.status(400).json({
      success: false,
      field: "email",
      message: "Enter a valid email address.",
    });
  }

  if (!/^\+[1-9]\d{7,14}$/.test(fields.phoneNumber)) {
    return res.status(400).json({
      success: false,
      field: "phoneNumber",
      message: "Enter a valid phone number with a country code.",
    });
  }

  const contact = await createContact({
    ...fields,
    companyAddress: fields.companyAddress || null,
  });

  try {
    await sendContactEmails(contact);
  } catch (error) {
    console.error("Contact email setup failed", {
      reference: contact.id,
      error: error.message,
    });
  }

  return res.status(201).json({
    success: true,
    message: "Your enquiry was received.",
    reference: contact.reference_number,
  });
}