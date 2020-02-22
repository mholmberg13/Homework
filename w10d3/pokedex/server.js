const express    = require('express');
const app        = express();
const pokemon    = require('./models/pokemon.js');

const port = 3000;

// DESTROY
app.delete('pokemon/:id', (req, res) => {
    pokemon.splice(req.params.id, 1);
    res.redirect('/pokemon');
});

// UPDATE
app.put('/pokemon/:id', (req, res) => {
    pokemon[req.params.id] = req.body;
    res.redirect('/pokemon');
});

// CREATE
app.post('/pokemon/', (req, res) => {
    let index = pokemon.push(req.body) -1;
    res.redirect(`/pokemon/${index}`);
});

// NEW
app.get('pokemon/new', (req, res) => {
    res.render('new.ejs');
});

// EDIT
app.get('pokemon/:id/edit', (req, res) => {
    res.render('edit.ejs', {
        data: pokemon[req.params.id],
        index: req.params.id
    });
});

// SHOW
app.get('/pokemon/:id', (req, res) => {
res.render('show.ejs', { data: pokemon[req.params.id] });
});

// INDEX
app.get('/pokemon', (req, res) => {
    res.render('index.ejs', { data: pokemon });
    });

app.listen(port, () => {
    console.log("listening on port:", port);
});