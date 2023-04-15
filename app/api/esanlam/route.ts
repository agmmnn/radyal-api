import { NextResponse } from "next/server";
import { connectToDatabase } from "@/app/helpers/connectToDB";

export async function GET(req: Request, res: Response) {
  const { searchParams } = new URL(req.url);
  const word = searchParams.get("word")?.toLowerCase();

  if (!word) {
    return NextResponse.json({ error: "no word given" });
  }

  try {
    const db = await connectToDatabase("thesaurus_tr");
    const collection = await db.collection("thesaurus_tr");
    const result = await collection.findOne({ word: word });

    if (result) {
      delete result._id;
      return NextResponse.json(result);
    } else {
      return NextResponse.json({ error: "not found" });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: String(error) });
  }
}
