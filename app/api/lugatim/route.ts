import { connectToDatabase } from "@/app/helpers/connectToDB";

import { NextResponse } from "next/server";

let cachedDb = null;

export async function GET(req: Request, res: Response) {
  const { searchParams } = new URL(req.url);
  const word = searchParams.get("word")?.toUpperCase();

  if (word) {
    const db = await connectToDatabase("lugatim");
    const coll = await db.collection("lugatim");
    try {
      const result = await coll.findOne({ word: word });
      delete result._id;
      return NextResponse.json(result);
    } catch {
      return NextResponse.json({ error: "error" });
    }
  } else {
    return NextResponse.json({ error: "no word given" });
  }
}
