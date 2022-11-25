const express = require("express");
const routerproduct = express.Router();
const {
  getProduct,
  createProduct,
  findByProduct,
  UpdateByProduct,
  deleteByProduct,
} = require("../controllers/productController");

routerproduct.get("/product/get", getProduct);
routerproduct.post("/product/post", createProduct);
routerproduct.get("/product/find/:id", findByProduct);
routerproduct.put("/product/:id", UpdateByProduct);
routerproduct.delete("/product/delete/:id", deleteByProduct);

module.exports = routerproduct;
