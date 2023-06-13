import { NextApiRequest, NextApiResponse } from "next";

import { google } from "googleapis";

type SheetForm = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    console.log("Bad request");
    return res.status(400).json({ error: "Bad request" });
  }

  const body = req.body as SheetForm;
  console.log("🚀 ~ file: sheets.ts:22 ~ body:", body);

  try {
    // Prepare auth
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL,
        // private_key: process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY?.split(String.raw`\n`).join(
        //   "\n"
        // ),
        private_key: process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY?.replace(
          /\\n/g,
          "\n"
        ),
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    console.log(
      "🚀 ~ file: sheets.ts:37 ~ process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY:",
      process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY
    );

    console.log(
      "🚀 ~ file: sheets.ts:37 ~ process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY replace:",
      process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n")
    );

    const sheets = google.sheets({
      auth,
      version: "v4",
    });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID,
      range: "A1:D1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[body.name, body.email, body.phone, body.message]],
      },
    });

    return res.status(200).json({ data: response.data, error: null });
  } catch (error: any) {
    console.log(error.message);
    return res.status(400).json({ error: error.message });
  }
}
