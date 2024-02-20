const { Router } = require("express");
// route's
const productRouter = require("./productRouter");
const categoryRouter = require("./categoryRouter");


const router = Router();


// entry points
router.use("/product", productRouter);
router.use("/category", categoryRouter);

module.exports = router;
