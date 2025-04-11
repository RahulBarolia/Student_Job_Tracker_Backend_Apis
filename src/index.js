import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import jobRoutes from "./routes/jobRoutes.js";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

app.use("/api/jobs", jobRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server is running on port 5000");
  connectDB();
});
