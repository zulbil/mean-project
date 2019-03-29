const express           = require('express');
const bodyParser        = require('body-parser');
const cors              = require('cors');
const jsonwebtoken      = require('jsonwebtoken');
const path              = require('path');
const passport          = require('passport'); 

const app               = express(); 
var routes              = require('./app-server/routes/index');

require('./config/database'); 

const PORT              = process.env.PORT; 

// CORS Middleware
app.use(cors());

//Set static Folder
app.use(express.static(path.join(__dirname, 'public')));

//Body Parser Middleware
app.use(bodyParser.json()); 

app.use('/images', express.static(path.join(__dirname, 'public/uploads/images'))); 

//Routes 
app.use('/', routes);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html')); 
})


app.listen(PORT, () => {
    console.log("Starting on server "+PORT); 
})