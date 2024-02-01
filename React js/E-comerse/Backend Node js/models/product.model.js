const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Joi = require("joi");

const UsersSchema = new Schema({
  title: {
    type: String,
  },
  price: {
    type: String,
  },
  img: { type: String },
  description: { type: String },
  brand: { type: String },
  status: {
    type: Boolean,
    default: true,
  },
});

const Product = mongoose.model("products", UsersSchema);
module.exports = {
  Product,
};
