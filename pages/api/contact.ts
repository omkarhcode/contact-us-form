// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from "next";

import { mailOptions, transporter } from "@/config/nodemailer";

type Data = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const generateEmailContent = (data: Data) => {
  const stringData = Object.entries(data).reduce(
    (str, [key, value]) =>
      (str += `${key.charAt(0).toUpperCase() + key.slice(1)} \n${value} \n\n`),
    ""
  );

  const htmlData = Object.entries(data).reduce(
    (str, [key, value]) =>
      (str += `<h3>${
        key.charAt(0).toUpperCase() + key.slice(1)
      }:</h3>  <p>${value}</p> \n\n`),
    ""
  );

  return {
    text: stringData,
    html: `<!doctypehtml><title></title><meta charset=utf-8><meta content="width=device-width,initial-scale=1"name=viewport><meta content="IE=edge"http-equiv=X-UA-Compatible><style>a,body,table,td{-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}table{border-collapse:collapse!important}body{height:100%!important;margin:0!important;padding:0!important;width:100%!important}@media screen and (max-width:525px){.wrapper{width:100%!important;max-width:100%!important}.responsive-table{width:100%!important}.padding{padding:10px 5% 15px 5%!important}.section-padding{padding:0 15px 50px 15px!important}}.form-container{margin-bottom:24px;padding:20px;border:1px dashed #ccc}.form-heading{color:#2a2a2a;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-weight:400;text-align:left;line-height:20px;font-size:18px;margin:0 0 8px;padding:0}.form-answer{color:#2a2a2a;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-weight:300;text-align:left;line-height:20px;font-size:16px;margin:0 0 24px;padding:0}div[style*="margin: 16px 0;"]{margin:0!important}</style><body style=margin:0!important;padding:0!important;background:#fff><div style=display:none;font-size:1px;color:#fefefe;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden></div><table border=0 cellpadding=0 cellspacing=0 width=100%><tr><td class=section-padding style="padding:10px 15px 30px 15px"align=center bgcolor=#ffffff><table border=0 cellpadding=0 cellspacing=0 width=100% class=responsive-table style=max-width:500px><tr><td><table border=0 cellpadding=0 cellspacing=0 width=100%><tr><td><table border=0 cellpadding=0 cellspacing=0 width=100%><tr><td class="message-content padding"style=padding:0;font-size:16px;line-height:25px;color:#232323><h2>New Contact Message</h2><div class=form-container>${htmlData}</div></table></table></table></table>`,
  };
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
        ...generateEmailContent(data),
        subject: "Contact From",
        // text: "This is test string",
        // html: `<p>Name: ${data.name}</p><p>Email: ${data.email}</p><p>Phone: ${data.phone}</p><p>Message: ${data.message}</p>`,
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
