const { Router } = require("express");
const { createProductHandler } = require("../handlers/createProductHandler");
const { updateProductHandler } = require("../handlers/updateProductHandler");
const { getProductByNameHandler } = require("../handlers/getProductByNameHandler");

const productRouter = Router();

productRouter.post("/", createProductHandler);
productRouter.put("/", updateProductHandler);
productRouter.get("/",getProductByNameHandler);

module.exports = productRouter;
