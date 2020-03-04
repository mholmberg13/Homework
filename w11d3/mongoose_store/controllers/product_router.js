const express = require('express')
const router = express.Router()
const Products = require("../models/products.js");

////////////////////////////////

// NEW
router.get('/new', (req, res) => {
    res.render('products/new.ejs');
});

// EDIT
router.get('/:id/edit', (req, res) => {
    Products.findById(req.params.id, (err, newProduct) => {
        res.render('products/edit.ejs', {
            product: newProduct
        });
    });
});

// SHOW
router.get('/:id', (req, res) => {
    Products.findById(req.params.id, (err, newProduct) => {
        res.render("products/show.ejs", {
            product: newProduct
        });
    });
});

// SEED
router.get("/seed", async (req, res) => {
    const newProducts =
    [
      {
        name: 'Beans',
        description: 'A small pile of beans. Buy more beans for a big pile of beans.',
        img: 'https://cdn3.bigcommerce.com/s-a6pgxdjc7w/products/1075/images/967/416130__50605.1467418920.1280.1280.jpg?c=2',
        price: 5,
        qty: 99
      }, {
        name: 'Bones',
        description: 'It\'s just a bag of bones.',
        img: 'http://bluelips.com/prod_images_large/bones1.jpg',
        price: 25,
        qty: 0
      }, {
        name: 'Bins',
        description: 'A stack of colorful bins for your beans and bones.',
        img: 'http://www.clipartbest.com/cliparts/9cz/rMM/9czrMMBcE.jpeg',
        price: 7000,
        qty: 1
      }
    ]

  try {
    const seedItems = await Products.create(newProducts)
    res.send(seedItems)
  } catch (err) {
    res.send(err.message)
  }
})

// INDEX
router.get("/", (req, res) => {
    Products.find({}, (error, products) => {
        res.render("products/index.ejs", { products });
    });
    
});


//////////////////////////////////

// CREATE
router.post('/', (req, res) => {
    Products.create(req.body, (err, data) => {
        res.redirect('/products/')
    });
});

// DESTROY
router.delete('/:id', (req, res) => {
    Products.findByIdAndDelete(req.params.id, (err, data) => {
        res.redirect('/products/');
    });
});

// UPDATE
router.put('/:id', (req, res) => {
    Products.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, data) => {
        res.redirect('/products/');
    });
});

// BUY
router.put("/:id/buy", (req, res) => {
    Products.findById(req.params.id, (err, boughtProduct) => {
        boughtProduct.qty -= 1;
        Products.findByIdAndUpdate(req.params.id, boughtProduct, (err, data) => {
          res.redirect(`/products/${req.params.id}`);
        });
    });
});



module.exports = router