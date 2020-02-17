const express = require("express");
const app = express();
const port = 3000;

const budget = require("./models/budget.js");

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.render("index.ejs", {budget: budget});
})




app.listen(3000, () => {
    console.log("listening on port", port);
});