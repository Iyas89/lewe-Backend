const { Router } = require("express");
const { createProductHandler } = require("../handlers/createProductHandler");
const { updateProductHandler } = require("../handlers/updateProductHandler");
const { getProductByNameHandler } = require("../handlers/getProductByNameHandler");
const { getProductByIdHandler } = require("../handlers/getProductByIdHandler");
const {deleteProductHandler} = require("../handlers/deleteProductHandler");
const {disableProductHandler} = require("../handlers/disableProductHandler");
const {getAdminArticlesHandler} = require("../handlers/getAdminArticlesHandler");

const productRouter = Router();

productRouter.post("/", createProductHandler);
productRouter.put("/", updateProductHandler);
productRouter.get("/",getProductByNameHandler);
productRouter.get("/admin",getAdminArticlesHandler);
productRouter.get("/:id", getProductByIdHandler);
productRouter.delete("/:id", deleteProductHandler);
productRouter.put("/:id", disableProductHandler);

module.exports = productRouter;
