const dotenv = require('dotenv').config({path:'./.env'})
const port = process.env.PORT || 8080;
const http = require('http');
const bodyParser = require('body-parser');
const app  = express();
const cors = require('cors');
const multer = require('multer');
const express  = require('express');
const app  = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(multer().any());
app.use(cors()); //enable cores

// adding mongo connection
require('./config/dbConnection')(app);

// creating server
var server  = http.createServer(app);

server.listen(port, () => { console.log(`Server is listening on port => ${port}`); })