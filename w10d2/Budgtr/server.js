const express = require("express");
const app = express();
const port = 3000;

const budget = require("./models/budget.js");

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.post("/", (req, res) => {
    let newBudget = {}
    newBudget.date = req.body.date
    newBudget.name = req.body.name
    newBudget.amount = req.body.amount
    newBudget.from = req.body.from
    budget.push(newBudget)
    res.redirect("/");
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