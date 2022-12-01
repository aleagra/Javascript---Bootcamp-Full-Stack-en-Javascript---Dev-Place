const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Joi = require("joi");
const validateRequest = require("../middlewares/validateRequest");
const UsersSchema = new Schema({
  precio: {
    type: String,
  },
  archivos: {
    type: String,
  },
  status: {
    type: Boolean,
    default: true,
  },
});
const User = mongoose.model("users", UsersSchema);

const ValidateUser = (req, res, next) => {
  const schema = Joi.object({
    precio: Joi.string().min(5).max(100).required().messages({
      "string.empty": "Ingresa el producto",
      "string.min": "El nombre debe ser mayor a 5 caracteres",
      "any.required": "Ingresa el producto",
    }),
    archivos: Joi.string().min(5).max(100).required().messages({
      "string.empty": "Ingresa el archivo",
      "string.min": "El Apellido debe ser mayor a 5 caracteres",
      "any.required": "Ingresa el archivo",
    }),
  });
  validateRequest(req, res, next, schema);
};

module.exports = {
  User,
  ValidateUser,
};
