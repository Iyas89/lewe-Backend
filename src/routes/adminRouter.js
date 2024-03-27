const { Router } = require("express");
const { analyticsHandler } = require("../handlers/analyticsHandler");
const adminRouter = Router();

adminRouter.get("/analytics", analyticsHandler)

module.exports = adminRouter;