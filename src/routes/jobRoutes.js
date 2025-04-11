import express from "express";
import {
  addJob,
  deleteJob,
  getJobs,
  updateStatus,
} from "../controllers/jobControllers.js";

const router = express.Router();

router.post("/", addJob);

router.get("/", getJobs);

router.delete("/:jobId", deleteJob);

router.patch("/:jobId", updateStatus);

export default router;
