const { Router } = require("express");
const { sendInvoiceHandler } = require("../handlers/sendInvoiceHandler");

const invoiceRouter = Router();

invoiceRouter.post("/", sendInvoiceHandler);

module.exports = invoiceRouter;
