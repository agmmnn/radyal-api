import { NextResponse } from "next/server";
import { connectToDatabase } from "@/app/helpers/connectToDB";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const word = searchParams.get("word");

  if (!word) {
    return NextResponse.json({ error: "no word given" });
  }

  try {
    const db = await connectToDatabase("dildernegi");
    const collection = db.collection("dildernegi");
    const regex = new RegExp(`^${word}(,\\s\\S+)?$`); //pişme, pişmek

    const result = await collection.findOne({
      word: {
        $regex: regex,
      },
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
