const express = require('express');
const mysql = require('mysql');
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get('/buy', (req, res) => {
    const game = req.query.game;
    res.status(200).send(game + ' is queried successfully!');
});

app.listen(3001, () => {
    console.log("Yey, your server is running on port 3001");
  });