const { Router } = require("express");

const router = Router();

// route's
const productRouter = require("./productRouter");


// entry points
router.use("/product", productRouter);

module.exports = router;
