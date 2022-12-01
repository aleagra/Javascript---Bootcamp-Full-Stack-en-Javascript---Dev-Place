const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Joi = require("joi");

const UsersSchema = new Schema({
  titulo_producto: {
    type: String,
    sparse: false,
  },
  imagen_producto: String,
  precio_producto: String,
  tipo_producto: {
    type: String,
  },
  texto_producto: {
    type: String,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("product", UsersSchema);
