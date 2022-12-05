const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Joi = require("joi");

const UsersSchema = new Schema({
  titulo_producto: {
    type: String,
  },
  precio_producto: {
    type: String,
    unique: true,
  },
  imagen_producto: { type: String },
  texto_producto: { type: String },
  tipo_producto: { type: String },
  status: {
    type: Boolean,
    default: true,
  },
});

const Product = mongoose.model("products", UsersSchema);
module.exports = {
  Product,
};
