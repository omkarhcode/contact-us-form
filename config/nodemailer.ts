import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NODEMAILER_EMAIL, // generated ethereal user
    pass: process.env.NODEMAILER_EMAIL_PASSWORD, // generated ethereal password
  },
});

export const mailOptions = {
  from: process.env.NODEMAILER_EMAIL, // sender address
  to: process.env.NODEMAILER_EMAIL, // list of receivers
};
