const express = require("express");

const app = express();

const arr = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];



app.get("/greeting/:name", (req, res) => {
    res.send(`hello ${req.params.name}`);
});

app.get("/tip/:total/:tipPercentage", (req, res) => {
    res.send(`${req.params.total * req.params.tipPercentage * 0.01}`);
});

app.get("/magic/:question", (req, res) => {
    res.send(`<h1>${arr[Math.floor(Math.random() * arr.length)]}</h1>`)
});

app.listen(3000, () => {
    console.log("serving listening for 3000...")
});