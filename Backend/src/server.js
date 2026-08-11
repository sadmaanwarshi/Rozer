import dotenv from "dotenv";
import app from "./app.js";
import pool from "./config/db.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await pool.query("SELECT NOW()");

    console.log("Database connection successful");

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to database:", error);
    process.exit(1);
  }
};

if (process.env.NODE_ENV !== "production") {
  startServer();
}

export default app;