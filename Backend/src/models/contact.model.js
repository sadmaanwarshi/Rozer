import pool from "../config/db.js";
import { randomInt } from "node:crypto";
/**
 * Create a new contact
 */
export async function createContact({
  fullName,
  email,
  phoneNumber,
  companyAddress,
  serviceRequired,
  projectDetails,
}) {
  const query = `
    INSERT INTO public.contacts (
      reference_number,
      full_name,
      email,
      phone_number,
      company_address,
      service_required,
      project_details
    )
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    ON CONFLICT (reference_number) DO NOTHING
    RETURNING
      id,
      reference_number,
      full_name,
      email,
      phone_number,
      company_address,
      service_required,
      project_details,
      created_at,
      updated_at,
      acknowledgement_resend_id,
      notification_resend_id;
  `;

  for (let attempt = 0; attempt < 10; attempt += 1) {
    const referenceNumber = randomInt(100000, 1000000);

    const { rows } = await pool.query(query, [
      referenceNumber,
      fullName,
      email,
      phoneNumber,
      companyAddress,
      serviceRequired,
      projectDetails,
    ]);

    if (rows.length > 0) {
      return rows[0];
    }
  }

  throw new Error("Could not generate a unique contact reference.");
}

/**
 * Get all contacts
 */
export const getAllContacts = async () => {
  const query = `
    SELECT
      id,
      full_name,
      email,
      phone_number,
      company_address,
      service_required,
      project_details,
      created_at,
      updated_at
    FROM contacts
    ORDER BY created_at DESC;
  `;

  const { rows } = await pool.query(query);

  return rows;
};

/**
 * Get contact by ID
 */
export const getContactById = async (id) => {
  const query = `
    SELECT
      id,
      full_name,
      email,
      phone_number,
      company_address,
      service_required,
      project_details,
      created_at,
      updated_at
    FROM contacts
    WHERE id = $1;
  `;

  const { rows } = await pool.query(query, [id]);

  return rows[0];
};

/**
 * Delete contact
 */
export const deleteContact = async (id) => {
  const query = `
    DELETE FROM contacts
    WHERE id = $1
    RETURNING id;
  `;

  const { rows } = await pool.query(query, [id]);

  return rows[0];
};