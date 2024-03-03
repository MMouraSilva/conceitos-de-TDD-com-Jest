const express = require('express');
const app = express();

app.get('/', async (req, res) => {
    res.json({ success: true });
});

app.get("/cor/:pessoa", (req, res) => {
    const pessoa = req.params.pessoa;

    if(pessoa == "matheus") {
        res.json({ cor: "verde", color: "green" });
    }
});

module.exports = app;