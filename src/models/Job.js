import mongoose from "mongoose";

const jobApplicationSchema = mongoose.Schema(
  {
    company: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Applied", "Interview", "Offer", "Rejected"],
      default: "Applied",
    },
    applicationDate: {
      type: Date,
      default: Date.now,
    },
    link: {
      type: String,
    },
  },
  { timestamps: true }
);

const Job = mongoose.model("JobApplication", jobApplicationSchema);

export default Job;
