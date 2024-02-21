const { Router } = require("express");

const { sendOrderHandler } = require("../handlers/sendOrderHandler");

const whatsappRouter = Router();

whatsappRouter.post("/", sendOrderHandler);

module.exports = whatsappRouter;
