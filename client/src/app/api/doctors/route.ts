import { NextResponse } from "next/server";
import doctorsData from "@/db/doctors.json";

export async function GET() {
  return NextResponse.json(doctorsData);
}
