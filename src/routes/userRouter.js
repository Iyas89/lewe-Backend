const { Router } = require("express");
const { createUserHandler } = require("../handlers/createUserHandler");
const { getAllUsersHandler } = require("../handlers/getAllUsersHandler");
const { deleteUserHandler } = require("../handlers/deleteUserHandler");
const { asignAdminHandler } = require("../handlers/asignAdminHandler");
const userRouter = Router();

userRouter.post("/", createUserHandler);
userRouter.get("/",getAllUsersHandler);
userRouter.delete("/:id", deleteUserHandler);
userRouter.put("/", asignAdminHandler);


module.exports = userRouter;
