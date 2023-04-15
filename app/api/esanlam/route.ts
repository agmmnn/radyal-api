import { NextResponse } from "next/server";
import { connectToDatabase } from "@/app/helpers/connectToDB";

export async function GET(req: Request, res: Response) {
  const { searchParams } = new URL(req.url);
  const word = searchParams.get("word")?.toLowerCase();

  if (word) {
    const db = await connectToDatabase("thesaurus_tr");
    const coll = await db.collection("thesaurus_tr");
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
