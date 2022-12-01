const express = require("express");
const routerproduct = express.Router();
const {
  getProduct,
  createProduct,
  findByProduct,
  UpdateByProduct,
  deleteByProduct,
} = require("../controllers/productController");
// const { ValidateUser } = require("../models/user.model");
const uploadMulter = require("../configs/multer");

routerproduct.get("/product/get", getProduct);

routerproduct.post(
  "/product/post",
  uploadMulter.single("imagen_producto"),
  createProduct
);

routerproduct.get("/product/find/:id", findByProduct);
routerproduct.put("/product/:id", UpdateByProduct);
routerproduct.delete("/product/delete/:id", deleteByProduct);

module.exports = routerproduct;
