const { Router } = require("express");
const loginRouter = Router();
const { handleLoginHandler } = require("../handlers/handleLoginHandler");

loginRouter.post("/", handleLoginHandler)

module.exports = loginRouter;