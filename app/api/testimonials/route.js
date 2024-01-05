import { NextResponse } from "next/server";
import Testimonial from "../../../models/testimonial.model";
import { connectDB } from "../../../db";

// establish DB connection
connectDB();

export async function GET() {
  const testimonials = await Testimonial.find();
  return NextResponse.json(testimonials, {
    status: 200,
  });
}

export async function POST(request) {
  const formData = await request.json();
  const { name, feedback, organization, highlight } = formData;

  // create a new testimonial object
  const newTestimonial = new Testimonial({
    name,
    feedback,
    organization,
    highlight,
  });

  const savedTestimonial = await newTestimonial.save();

  return NextResponse.json(
    {
      message: "Testimonails added successfully",
      success: true,
      savedTestimonial,
    },
    {
      status: 201,
    }
  );
}
