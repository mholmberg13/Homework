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

const Products = require("./models/products.js");

// NEW
app.get('/index/new', (req, res) => {
    res.render('new.ejs');
});

// EDIT
app.get('/index/:id/edit', (req, res) => {
    Products.findById(req.params.id, (err, newProduct) => {
        res.render('edit.ejs', {
            product: newProduct
        });
    });
});

// SHOW
app.get('/index/:id', (req, res) => {
    Products.findById(req.params.id, (err, newProduct) => {
        res.render("show.ejs", {
            product: newProduct
        });
    });
});

// INDEX
app.get("/index", (req, res) => {
    Products.find({}, (error, products) => {
        res.render("index.ejs", { products });
    });
    
});

//////////////////////////////////

// CREATE
app.post('/index', (req, res) => {
    Products.create(req.body, (err, data) => {
        res.redirect('/index/')
    });
});

// DESTROY
app.delete('/index/:id', (req, res) => {
    Products.findByIdAndDelete(req.params.id, (err, data) => {
        res.redirect('/index/');
    });
});

// UPDATE
app.put('/index/:id', (req, res) => {
    Products.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, data) => {
        res.redirect('/index');
    });
});

// BUY
app.put("/index/:id/buy", (req, res) => {
    Products.findById(req.params.id, (err, boughtProduct) => {
        boughtProduct.qty -= 1;
        Products.findByIdAndUpdate(req.params.id, boughtProduct, (err, data) => {
          res.redirect(`/index/${req.params.id}`);
        });
    });
});


// Web server:
app.listen(3001, () => {
    console.log("listening");
  });