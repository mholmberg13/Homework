const express = require("express");
const app = express();
const methodOverride = require('method-override');

// Load up mongoose npm as mongoose:
const mongoose = require("mongoose");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// Connect mongoose to mongo db:
mongoose.connect("mongodb://localhost:27017/productsdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

const productController = require("./controllers/product_router.js");
// any routes that come in for fruits should be sent
// to the fruitsContoller
app.use("/index", productController);

// Web server:
app.listen(3001, () => {
    console.log("listening");
  });