import { connectToDatabase } from "@/app/helpers/connectToDB";

import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
  const { searchParams } = new URL(req.url);
  const word = searchParams.get("word")?.toLowerCase();

  if (word) {
    const db = await connectToDatabase("lugat");
    const coll = await db.collection("lugat");
    try {
      const result = await coll.findOne({
        $or: [{ word: word }, { other_forms: word }, { ar_script: word }],
      });
      delete result._id;
      return NextResponse.json(result);
    } catch {
      return NextResponse.json({ error: "error" });
    }
  } else {
    return NextResponse.json({ error: "no word given" });
  }
}
