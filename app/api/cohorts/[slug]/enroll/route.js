import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      message: "Cohort enroll",
    },
    {
      status: 200,
    }
  );
}
