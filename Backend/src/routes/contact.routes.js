import { Router } from "express";
import { createContactController } from "../controller/contact.controller.js";

const router = Router();

router.post("/", createContactController);

export default router;