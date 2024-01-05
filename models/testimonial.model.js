import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    feedback: {
      type: String,
    },
    highlight: {
      type: String,
    },
    organization: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Testimonial =
  mongoose.models.Testimonial ||
  mongoose.model("Testimonial", testimonialSchema);

export default Testimonial;
