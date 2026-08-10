import pool from "../config/db.js";

/**
 * Create a new contact
 */
export const createContact = async ({
  fullName,
  email,
  phoneNumber,
  companyAddress,
  serviceRequired,
  projectDetails,
}) => {
  const query = `
    INSERT INTO contacts (
      full_name,
      email,
      phone_number,
      company_address,
      service_required,
      project_details
    )
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING
      id,
      full_name,
      email,
      phone_number,
      company_address,
      service_required,
      project_details,
      created_at,
      updated_at;
  `;

  const values = [
    fullName,
    email,
    phoneNumber,
    companyAddress,
    serviceRequired,
    projectDetails,
  ];

  const { rows } = await pool.query(query, values);

  return rows[0];
};

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