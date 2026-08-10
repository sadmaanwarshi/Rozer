import {
  createContact,
  getAllContacts,
  getContactById,
  deleteContact,
} from "../models/contact.model.js";

/**
 * Create a new contact
 */
export const createContactController = async (req, res, next) => {
  try {
    const {
      fullName,
      email,
      phoneNumber,
      companyAddress,
      serviceRequired,
      projectDetails,
    } = req.body;

    // Full name validation
    if (!fullName?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Full name is required",
      });
    }

    // Email validation
    if (!email?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });
    }

    // Phone number validation
    if (!phoneNumber?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Phone number is required",
      });
    }

    // Service validation
    if (!serviceRequired?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Service required is required",
      });
    }

    // Project details validation
    if (!projectDetails?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Project details are required",
      });
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email.trim())) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address",
      });
    }

    // Phone number format validation
    const phoneRegex = /^\+?[1-9]\d{7,14}$/;

    if (!phoneRegex.test(phoneNumber.trim())) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid phone number",
      });
    }

    const contact = await createContact({
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      phoneNumber: phoneNumber.trim(),
      companyAddress: companyAddress?.trim() || null,
      serviceRequired: serviceRequired.trim(),
      projectDetails: projectDetails.trim(),
    });

    return res.status(201).json({
      success: true,
      message: "Contact request submitted successfully",
      data: contact,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get all contacts
 */
export const getAllContactsController = async (req, res, next) => {
  try {
    const contacts = await getAllContacts();

    return res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get contact by ID
 */
export const getContactByIdController = async (req, res, next) => {
  try {
    const { id } = req.params;

    const contact = await getContactById(id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: contact,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Delete contact
 */
export const deleteContactController = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deletedContact = await deleteContact(id);

    if (!deletedContact) {
      return res.status(404).json({
        success: false,
        message: "Contact not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Contact deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};