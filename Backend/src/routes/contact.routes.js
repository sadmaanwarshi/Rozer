import express from "express";

import {
  createContactController,
  getAllContactsController,
  getContactByIdController,
  deleteContactController,
} from "../controller/contact.controller.js";

const router = express.Router();

/**
 * POST /api/v1/contacts
 */
router.post("/", createContactController);

/**
 * GET /api/v1/contacts
 */
router.get("/", getAllContactsController);

/**
 * GET /api/v1/contacts/:id
 */
router.get("/:id", getContactByIdController);

/**
 * DELETE /api/v1/contacts/:id
 */
router.delete("/:id", deleteContactController);

export default router;