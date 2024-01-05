import { NextResponse } from "next/server";
import { connectDB } from "../../../../db";
import Cohort from "../../../../models/cohort.model";

// establish DB connection
connectDB();

export async function GET(request, { params }) {
  try {
    const slug = params.slug;
    const cohort = await Cohort.findOne({ slug });
    return NextResponse.json(cohort, {
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
