const express = require("express");
const app = express();
const port = 3000;

const budget = require("./models/budget.js");

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.post("/", (req, res) => {
    let budget = {}
    budget.date = req.body.date
    budget.name = req.body.name
    budget.amount = req.body.amount
    budget.from = req.body.from
    budget.push(budget)
});

app.get("/new", (req, res) => {
    res.render("new.ejs");
});

app.get("/:id", (req, res) => {
    res.render("show.ejs", {budget: budget[req.params.id]});
});

app.get("/", (req, res) => {
    res.render("index.ejs", {budget: budget});
})




app.listen(3000, () => {
    console.log("listening on port", port);
});