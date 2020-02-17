const express = require("express");
const app = express();
const port = 3000;

const budget = require("./models/budget.js");






app.listen(3000, () => {
    console.log("listening on port", port);
});