const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Joi = require("joi");

const UsersSchema = new Schema({
  titulo_producto: String,
  texto_producto: String,
  precio_producto: String,
  tipo_procuto: String,
  status: {
    type: Boolean,
    default: true,
  },
});

const Product = mongoose.model("product", UsersSchema);

const ValidateUser = (user) => {
  const schema = Joi.object({
    titulo_producto: Joi.string().min(5).max(100).required(),
    tipo_procuto: Joi.string().min(5).max(100).required(),
  }).options({ abortEarly: false });

  return schema.validate(user);
};

module.exports = {
  Product,
  ValidateUser,
};
