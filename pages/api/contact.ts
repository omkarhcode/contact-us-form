// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from "next";

import { mailOptions, transporter } from "@/config/nodemailer";

type Data = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

// const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
const handler = async (req: any, res: any) => {
  if (req.method === "POST") {
    const data = req.body;
    if (!data.name || !data.email || !data.phone) {
      return res.status(400).json({ error: "Missing fields" });
    }

    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: "Contact From",
        text: "This is test string",
        html: `<p>Name: ${data.name}</p><p>Email: ${data.email}</p><p>Phone: ${data.phone}</p><p>Message: ${data.message}</p>`,
      });

      return res.status(200).json({ success: true });
    } catch (error: any) {
      console.log(error.message);
      return res.status(400).json({ error: error.message });
    }
  }

  return res.status(400).json({ error: "Bad request" });
};

export default handler;
