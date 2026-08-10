import express from "express";
import cors from "cors";

import contactRoutes from "./routes/contact.routes.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";

const app = express();

/**
 * CORS
 */
app.use(
  cors({
    origin: "*",
  })
);

/**
 * Body parsers
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * Health check
 */
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Rozer Technologies API is running",
  });
});

/**
 * API routes
 */
app.use("/api/contacts", contactRoutes);

/**
 * 404 handler
 */
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

/**
 * Global error handler
 */
app.use(errorMiddleware);

export default app;