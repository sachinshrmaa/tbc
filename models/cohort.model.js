import mongoose from "mongoose";

const cohortSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    slug: {
      type: String,
    },
    description: {
      type: String,
    },
    thumbnail: {
      type: String,
    },
    price: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Cohort = mongoose.models.Cohort || mongoose.model("Cohort", cohortSchema);

export default Cohort;
