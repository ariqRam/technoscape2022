const express = require('express');
const mysql = require('mysql');
const sessions = require('express-session');
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "technoscape",
});

let session;

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { loggedIn: false },
    resave: false 
}));

app.get('/', (req, res) => {
    console.log(req.session);
    session=req.session;
    if (session.userid) {
        res.status(200).send(true);
    } else {
        res.status(200).send(false);
    }
})

app.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    db.query(
        "SELECT * FROM users WHERE email=? AND password=?",
        [email, password],
        (err, result) => {
            if (err) {
                console.log(err);
                res.send(false)
            } else {
                session=req.session;
                session.cookie.loggedIn = true;
                session.userid=req.body.email;
                console.log(req.session);
                res.status(200).send(true);
            }
        }
    );
})

app.post('/register', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    db.query(
        "INSERT INTO users (email, password) VALUES (?, ?)",
        [email, password],
        (err, result) => {
            if (err) {
                console.log(err);
                console.log(result);
                res.send(false)
            } else {
                res.send(true);
            }
        }
    );
})

app.get('/buy', (req, res) => {
    const game = req.query.game;
    res.status(200).send(game + ' is queried successfully!');
    res.writeHead(302, {
        'Location': 'http://localhost:3000/buy?game=' + game,
    });
    res.end();
});

app.listen(3001, () => {
    console.log("Yey, your server is running on port 3001");
  });