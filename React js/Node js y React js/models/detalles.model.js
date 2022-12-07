const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Joi = require("joi");

const UsersSchema = new Schema({
  nombre: { type: String },
  apellido: { type: String },
  direccion: { type: String },
  email: { type: String },
  tipo_pago: { type: String },
  numero_tarjeta: { type: String },
  nombre_tarjeta: { type: String },
  codigo: { type: String },
  expiracion: { type: String },
  status: {
    type: Boolean,
    default: true,
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
});

const Detail = mongoose.model("detail", UsersSchema);
module.exports = {
  Detail,
};
