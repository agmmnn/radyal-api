import { connectToDatabase } from "@/app/helpers/connectToDB";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
  const { searchParams } = new URL(req.url);
  const word = searchParams.get("word")?.toLowerCase();

  if (!word) {
    return NextResponse.json({ error: "no word given" });
  }

  try {
    const db = await connectToDatabase("lugat");
    const collection = await db.collection("lugat");
    const result = await collection.findOne({
      $or: [{ word: word }, { other_forms: word }, { ar_script: word }],
    });

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
