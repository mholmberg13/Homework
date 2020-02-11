const express = require("express");

const app = express();



app.get("/greeting/:name", (req, res) => {
    res.send(`hello ${req.params.name}`);
});

app.get("/tip/:total/:tipPercentage", (req, res) => {
    res.send(`${req.params.total * req.params.tipPercentage * 0.01}`);
});

app.listen(3000, () => {
    console.log("serving listening for 3000...")
})