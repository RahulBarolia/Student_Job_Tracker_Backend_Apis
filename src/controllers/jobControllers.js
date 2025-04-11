import mongoose from "mongoose";
import Job from "../models/Job.js";

export const addJob = async (req, res) => {
  const { company, role, status, applicationDate, link } = req.body;

  try {
    if (!company || !role || !status || !applicationDate) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const job = new Job({ company, role, status, applicationDate, link });

    await job.save();

    return res.status(201).json({ message: "Job added successfully", job });
  } catch (error) {
    console.log("Error", error.message);
    return res
      .status(500)
      .json({ message: error.message || "Internal server error" });
  }
};

export const getJobs = async (req, res) => {
  try {
    const { status, sortByDate } = req.query;

    let filter = {};
    if (status) {
      filter.status = status;
    }

    let query = Job.find(filter);

    if (sortByDate === "true") {
      query = query.sort({ createdAt: -1 });
    }

    const jobs = await query.exec();
    return res.status(200).json({ jobs });
  } catch (error) {
    console.log("Error", error.message);
    return res
      .status(500)
      .json({ message: error.message || "Internal server error" });
  }
};

export const updateStatus = async (req, res) => {
  const { jobId } = req.params;
  const { status } = req.body;
  try {
    if (!jobId || !mongoose.Types.ObjectId.isValid(jobId)) {
      return res.status(400).json({ message: "Invalid id or not found" });
    }

    const updatedJob = await Job.findByIdAndUpdate(
      jobId,
      { status: status },
      { new: true }
    );

    if (!updatedJob) {
      return res.status(404).json({ message: "Job Application not found" });
    }

    return res.status(200).json({ updatedJob });
  } catch (error) {
    console.log("Error", error.message);
    return res
      .status(500)
      .json({ message: error.message || "Internal server error" });
  }
};

export const deleteJob = async (req, res) => {
  const { jobId } = req.params;
  try {
    if (!jobId || !mongoose.Types.ObjectId.isValid(jobId)) {
      return res.status(400).json({ message: "Invalid id or not found" });
    }

    const existingJob = await Job.findById(jobId);

    if (!existingJob) {
      return res.status(404).json({ message: "Job Application not found" });
    }

    await existingJob.deleteOne();

    return res.status(200).json({ message: "Deleted successfully" });
  } catch (error) {
    console.log("Error", error.message);
    return res
      .status(500)
      .json({ message: error.message || "Internal server error" });
  }
};
