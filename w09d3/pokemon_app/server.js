const express = require("express");
const app = express();
const port = 3000;

const pokemon = require("./models/pokemon.js");


app.get("/pokemon/:id", (req, res) => {
    res.render("show.ejs", {pokemon: pokemon[req.params.id]});
});

app.get("/pokemon", (req, res) => {
    res.render("index.ejs", {pokemon: pokemon});
});

app.get("/", (req, res) => {
    res.send('Welcome To The Pokemon App!');
});


app.listen(3000, () => {
    console.log("listening on port", port);
});

