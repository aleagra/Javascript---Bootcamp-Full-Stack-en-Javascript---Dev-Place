const Product = require("../models/product.model");

const getProduct = async (req, res) => {
  const product = await Product.find();
  res.json(product);
};
const findByProduct = async (req, res) => {
  const { id } = req.params;
  Product.findById(id)
    .then((data) => {
      res.json(data);
    })
    .catch(() => {
      res.json({ message: "Id nos encontrado" });
    });
};
const UpdateByProduct = async (req, res) => {
  const { id } = req.params;
  await Product.updateOne({ _id: id }, req.body);
  res.json({ message: "Producto Modificado" });
};
const deleteByProduct = async (req, res) => {
  const { id } = req.params;
  await Product.remove({ _id: id });
  res.json({ message: "Producto Eliminado" });
};
const createProduct = async (req, res) => {
  const url = req.protocol + "://" + req.get("host");
  const urlImage = url + "/upload/" + req.file.filename;
  const modelData = {
    titulo_producto: req.body.titulo_producto,
    precio_producto: req.body.precio_producto,
    imagen_producto: urlImage,
    texto_producto: req.body.texto_producto,
  };

  const product = new Product(modelData);
  product.save();
  res.json(product);
};
module.exports = {
  getProduct,
  createProduct,
  findByProduct,
  UpdateByProduct,
  deleteByProduct,
};
