const express = require("express");
const routerUser = express.Router();
const {
  getUsers,
  createUser,
  findByUser,
  UpdateByUser,
  deleteByUser,
} = require("../controllers/userController");
const { ValidateUser } = require("../models/user.model");
const verifyToken = require("../middlewares/authJwt");
const login = require("../controllers/authController");

routerUser.get("/user", getUsers);
routerUser.post("/user/post", ValidateUser, createUser);
routerUser.get("/user/:id", findByUser);
routerUser.put("/user/:id", UpdateByUser);
routerUser.delete("/user/:id", deleteByUser);
routerUser.post("/user/login", login);
module.exports = routerUser;
