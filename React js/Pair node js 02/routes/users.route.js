const express = require("express");
const routerUser = express.Router();
const {
  getUsers,
  createUser,
  findByUser,
  UpdateByUser,
  deleteByUser,
} = require("../controllers/userController");

routerUser.get("/get", getUsers);
routerUser.post("/post", createUser);
routerUser.get("/get/:id", findByUser);
routerUser.put("/users/:id", UpdateByUser);
routerUser.delete("/delete/:id", deleteByUser);

module.exports = routerUser;
