const express = require("express");
const routerDetail = express.Router();
const {
  getDetail,
  createDetail,
  findByDetail,
  UpdateByDetail,
} = require("../controllers/detallesController");

routerDetail.get("/detail", getDetail);
routerDetail.post("/detail/", createDetail);

routerDetail.get("/detail/:id", findByDetail);
routerDetail.put("/detail/:id", UpdateByDetail);
module.exports = routerDetail;
