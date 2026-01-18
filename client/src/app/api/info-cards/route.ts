import { NextResponse } from "next/server";
import infoCardsData from "@/db/info-cards.json";

export async function GET() {
  return NextResponse.json(infoCardsData);
}
