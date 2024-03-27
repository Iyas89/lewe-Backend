const { Router } = require("express");
// route's
const productRouter = require("./productRouter");
const categoryRouter = require("./categoryRouter");
const whatsappRouter = require("./whatsappRouter");
const invoiceRouter = require("./invoiceRouter");
const userRouter = require("./userRouter");
const orderRouter = require("./orderRouter");
const loginRouter = require("./loginRouter");
const contactRouter = require("./contactRouter");
const adminRouter = require("./adminRouter");


const router = Router();


// entry points
router.use("/product", productRouter);
router.use("/category", categoryRouter);
router.use("/whatsapp", whatsappRouter);
router.use("/invoice", invoiceRouter);
router.use("/user",userRouter);
router.use("/order",orderRouter);
router.use("/login", loginRouter);
router.use("/contact", contactRouter);
router.use("/admin", adminRouter);

module.exports = router;
