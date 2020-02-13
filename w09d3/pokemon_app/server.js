const express = require("express");
const app = express();
const port = 3000;




app.get("/", (req, res) => {
    res.send('Welcome To The Pokemon App!');
});


app.listen(3000, () => {
    console.log("listening on port", port);
});

