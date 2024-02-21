const nodemailer = require("nodemailer");
const { EMAIL_USER, EMAIL_PASSWORD } = process.env;
const {invoice} = require("../utils/invoice");

const mailSender = async (invoiceData) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASSWORD,
      },
    });
    const result = await transporter.sendMail({
      from: `facurimini@gmail.com`,
      to: `facurimini@gmail.com`,
      subject: "Lewe Invoice",
      html: invoice(invoiceData),
    });
    console.log(result);
    return result;
  } catch (error) {
    return error.message;
  }
};
module.exports = {mailSender};
