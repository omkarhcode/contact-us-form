// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

// const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
const handler = (req: any, res: any) => {
  if (req.method === "POST") {
    const data = req.body;
    if (!data.name || !data.email || !data.phone) {
      return res.status(400).json({ error: "Missing fields" });
    }
  }

  return res.status(400).json({ error: "Bad request" });
};

export default handler;
