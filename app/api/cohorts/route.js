import { NextResponse } from "next/server";
import { connectDB } from "../../../db";
import Cohort from "../../../models/cohort.model";

// establish DB connection
connectDB();

export async function GET() {
  try {
    const cohorts = await Cohort.find();
    return NextResponse.json(cohorts, {
      status: 200,
    });
  } catch (err) {
    return NextResponse.json(
      { err },
      {
        status: 500,
      }
    );
  }
}

export async function POST(request) {
  const formData = await request.json();
  const { name, slug, price, description, thumbnail } = formData;

  // check if cohort already exists
  const cohort = await Cohort.findOne({ slug });

  if (cohort) {
    return NextResponse.json(
      { error: "Cohort already exists" },
      {
        status: 409,
      }
    );
  }

  // create a new cohort object
  const newCohort = new Cohort({
    name,
    slug,
    price,
    description,
    thumbnail,
  });

  const savedCohort = await newCohort.save();

  return NextResponse.json(
    {
      message: "Cohort added successfully",
      success: true,
      savedCohort,
    },
    {
      status: 201,
    }
  );
}
