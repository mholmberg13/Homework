const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String ,
  img: String,
  price: { type: Number, minimum: 0 },
  qty: { type: Number, minimum: 0 }

});


const Products = mongoose.model("Product", productSchema);
module.exports = Products;