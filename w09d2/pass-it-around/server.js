const express = require("express");
const app = express();
const port = 3000;



app.get("/:bottleNumber", (req, res) => {
    if (req.params.bottleNumber > 0) {
        res.send(`${req.params.bottleNumber} bottles of beer on the wall. <a href="/${req.params.bottleNumber -= 1}">take one down, pass it around</a>`)
    } else {
        res.send("0 bottle of beer on the wall.");
    }
});

app.get("/", (req, res) => {
    res.send(`99 bottles of beer on the wall. <a href="/98">take one down, pass it around</a>`);
});

app.listen(3000, () => {
    console.log("listening on port", port);
});