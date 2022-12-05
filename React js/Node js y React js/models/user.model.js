const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const Joi = require("joi");
const validateRequest = require("../middlewares/validateRequest");
const UsersSchema = new Schema({
  nombre: {
    type: String,
  },
  mail: {
    type: String,
    unique: true,
  },
  password: { type: String },
  status: {
    type: Boolean,
    default: true,
  },
});
const User = mongoose.model("users", UsersSchema);

const ValidateUser = (req, res, next) => {
  const schema = Joi.object({
    nombre: Joi.string().min(5).max(100).required().messages({
      "string.empty": "Ingresa el nombre",
      "string.min": "El nombre debe ser mayor a 5 caracteres",
      "any.required": "Ingresa el nombre",
    }),
    mail: Joi.string().min(5).max(100).required().messages({
      "string.empty": "Ingresa el mail",
      "string.min": "El mail debe ser mayor a 5 caracteres",
      "any.required": "Ingresa el mail",
    }),
    password: Joi.string().min(5).max(100).required().messages({
      "string.empty": "Ingresa la password",
      "string.min": "El password debe ser mayor a 5 caracteres",
      "any.required": "Ingresa el password",
    }),
  });
  validateRequest(req, res, next, schema);
};

module.exports = {
  User,
  ValidateUser,
};
