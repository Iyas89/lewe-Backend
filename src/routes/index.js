const { Router } = require("express");
// route's
const productRouter = require("./productRouter");
const categoryRouter = require("./categoryRouter");
const whatsappRouter = require("./whatsappRouter");


const router = Router();


// entry points
router.use("/product", productRouter);
router.use("/category", categoryRouter);
router.use("/whatsapp", whatsappRouter);

module.exports = router;
