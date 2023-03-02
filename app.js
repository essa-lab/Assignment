const express = require('express');
const http = require('http');
const bcrypt = require('bcrypt');
const path = require("path");
const bodyParser = require('body-parser');

const app = express();
const server = http.createServer(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'./Public')));

app.get('/',(req,res) => {
    console.log("hi");
    res.render('form');
    res.sendFile(path.join(__dirname,'./public/index.html'));
});

app.post('/', (req, res) => {
    let username = req.body.email;
    let password = req.body.psw;
    if (username === 'issa@eng.com' && password === 'admin') {
        res.sendFile('Login successful');
    }
    else {
        res.send('Login failed');
    }
});

server.listen(8080, function(){
    console.log("server is listening on port: 8080");
});