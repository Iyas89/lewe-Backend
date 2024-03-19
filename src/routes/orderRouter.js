const { Router } = require("express");
const { getOrdersHandler } = require("../handlers/getOrdersHandler");

const orderRouter = Router();

orderRouter.get("/", getOrdersHandler);

module.exports = orderRouter;
