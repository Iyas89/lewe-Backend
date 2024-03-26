const { Router } = require("express");
const { createProductHandler } = require("../handlers/createProductHandler");
const { updateProductHandler } = require("../handlers/updateProductHandler");
const { getProductByNameHandler } = require("../handlers/getProductByNameHandler");
const { getProductByIdHandler } = require("../handlers/getProductByIdHandler");
const {deleteProductHandler} = require("../handlers/deleteProductHandler");

const productRouter = Router();

productRouter.post("/", createProductHandler);
productRouter.put("/", updateProductHandler);
productRouter.get("/",getProductByNameHandler);
productRouter.get("/:id", getProductByIdHandler);
productRouter.delete("/:id", deleteProductHandler);

module.exports = productRouter;
