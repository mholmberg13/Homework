const express    = require('express');
const app        = express();
const pokemon    = require('./models/pokemon.js');
const methodOverride = require("method-override");

const port = 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

// NEW
app.get('/pokemon/new', (req, res) => {
    res.render('new.ejs');
});

// SHOW
app.get('/pokemon/:id', (req, res) => {
    res.render('show.ejs', { 
        data: pokemon[req.params.id], 
        index: req.params.id
        });
    });

// EDIT
app.get('/pokemon/:id/edit', (req, res) => {
    res.render('edit.ejs', {
        data: pokemon[req.params.id],
        index: req.params.id
    });
});

// INDEX
app.get('/pokemon', (req, res) => {
    res.render('index.ejs', { data: pokemon });
    });

// UPDATE
app.put('/pokemon/:id', (req, res) => {
    let editPokemon = {
      name: req.body.name,
      img: req.body.img,
      type: req.body.type.split(','),
      stats: {
            hp: req.body.hp,
            attack: req.body.attack,
            defense: req.body.defense,
            spattack: req.body.spattack,
            spdefense: req.body.spdefense,
            speed: req.body.speed
      }
    }
    pokemon[req.params.id] = editPokemon;
    res.redirect('/pokemon/' + req.params.id);
  });

// CREATE
app.post('/pokemon/', (req, res) => {
    let newPokemon = {
        id: pokemon.length,
        name: req.body.name,
        img: req.body.img,
        type: req.body.type.split(','),
        stats: {
            hp: req.body.hp,
            attack: req.body.attack,
            defense: req.body.defense,
            spattack: req.body.spattack,
            spdefense: req.body.spdefense,
            speed: req.body.speed
        }
      };
    pokemon.push(newPokemon);
    console.log(req.params.id)
    res.redirect('/pokemon/' + newPokemon.id);
});

// DESTROY
app.delete('/pokemon/:id', (req, res) => {
    pokemon.splice(req.params.id, 1);
    res.redirect('/pokemon');
});


app.listen(port, () => {
    console.log("listening on port:", port);
});

