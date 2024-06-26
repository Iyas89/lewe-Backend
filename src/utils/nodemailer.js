const nodemailer = require("nodemailer");
const { EMAIL_USER, EMAIL_PASSWORD } = process.env;
const {invoice} = require("../utils/invoice");

const mailSender = async (invoiceData) => {
  const customerEmail = invoiceData[0].order.customerMail;
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
      from: EMAIL_USER,
      to: customerEmail,
      subject: "Lewe Invoice",
      html: invoice(invoiceData),
    });
    return result;
  } catch (error) {
    return error.message;
  }
};

const contactMail = async (body) => {
  const { name, email, message } = body;
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
      from: EMAIL_USER,
      to: `lewesportlife@gmail.com`,
      subject: `Contacto Web: ${name}`,
      html: `
      <p><strong>Nombre: ${name}</strong></p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mensaje:</strong> ${message}</p>`
    });
    return result;
  } catch (error) {
    return error.message;
  }
};

module.exports = {mailSender, contactMail};
