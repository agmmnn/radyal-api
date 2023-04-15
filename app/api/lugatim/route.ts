import { connectToDatabase } from "@/app/helpers/connectToDB";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
  const { searchParams } = new URL(req.url);
  const word = searchParams.get("word");

  if (!word) {
    return NextResponse.json({ error: "no word given" });
  }

  const regexPattern =
    "\\b" +
    word // remove diacritics or special characters from user input
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[aâ]/g, "[aâ]")
      .replace(/[iî]/g, "[iî]")
      .replace(/[oô]/g, "[oô]")
      .replace(/[uû]/g, "[uû]")
      .replace(/[eê]/g, "[eê]") +
    "\\b" +
    "|" +
    "\\b" +
    word // add user input with diacritics or special characters
      .normalize("NFC")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[aâ]/g, "[aâ]")
      .replace(/[iî]/g, "[iî]")
      .replace(/[oô]/g, "[oô]")
      .replace(/[uû]/g, "[uû]")
      .replace(/[eê]/g, "[eê]") +
    "\\b";

  const regex = new RegExp(regexPattern, "i");

  try {
    const db = await connectToDatabase("lugatim");
    const collection = await db.collection("lugatim");
    const result = await collection.findOne({
      word: { $regex: word, $options: "i" },
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
