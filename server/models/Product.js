const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: Number,
  name: String,
  description: String,
  price: Number,
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
