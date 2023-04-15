import { NextResponse } from "next/server";
import { connectToDatabase } from "@/app/helpers/connectToDB";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const word = searchParams.get("word");

  if (word) {
    const db = await connectToDatabase("dildernegi");
    const coll = await db.collection("dildernegi");
    try {
      const result = await coll.findOne({ word: word });
      if (result) {
        delete result._id;
        return NextResponse.json(result);
      } else {
        return NextResponse.json({ error: "not found" });
      }
    } catch (error) {
      return NextResponse.json({ error: String(error) });
    }
  } else {
    return NextResponse.json({ error: "no word given" });
  }
}
