const {contactMail} = require("../utils/nodemailer");

const contact = async (contactBody) => {
 await contactMail(contactBody);
}

module.exports = {contact};