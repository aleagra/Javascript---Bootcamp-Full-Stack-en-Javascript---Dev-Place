const express = require("express");
const routerproduct = express.Router();
const {
  getProduct,
  createProduct,
  findByProduct,
  UpdateByProduct,
  deleteByProduct,
} = require("../controllers/productController");
const uploadMulter = require("../configs/multer");

routerproduct.get("/product", getProduct);

routerproduct.post(
  "/product",
  uploadMulter.single("img"),
  createProduct
);

routerproduct.get("/product/:id", findByProduct);
routerproduct.put("/product/:id", UpdateByProduct);
routerproduct.delete("/product/:id", deleteByProduct);

module.exports = routerproduct;
