const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  titulo_producto: String,
  texto_producto: String,
  precio_producto: String,
  tipo_procuto: String,
});

module.exports = mongoose.model("product", UsersSchema);
