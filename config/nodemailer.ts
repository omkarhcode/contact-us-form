import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NEXT_PUBLIC_NODEMAILER_EMAIL, // generated ethereal user
    pass: process.env.NEXT_PUBLIC_NODEMAILER_EMAIL_PASSWORD, // generated ethereal password
  },
});

export const mailOptions = {
  from: process.env.NEXT_PUBLIC_NODEMAILER_EMAIL, // sender address
  to: process.env.NEXT_PUBLIC_NODEMAILER_EMAIL, // list of receivers
};
