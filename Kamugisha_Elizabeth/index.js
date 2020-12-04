// Require dependencies into project
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser') 
const mongoose = require('mongoose')
// require('dotenv/config')
require('dotenv').config();

// instantiating variable & assigning them with imported routes
const pageRoute = require('./routes/indexRoute');

// Create an express application
const app = express()

// Connect to MongoDB datatbase using Mongoose
mongoose.connect(process.env.MOHdatabase, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex: true, 
});

// Test if the mongoose connection is open or not
mongoose.connection
.on("open", () => {
  console.log("Mongoose connection open");
})
.on("error", err => {
console.log(`Connection error: ${err.message}`);
});

// Link path & connect to views directory
app.set('view engine','pug')
app.set('views', path.join(__dirname, 'views'))

// Body Parser Middleware settings
app.use(bodyParser.urlencoded({extended: true}))

// Connect to public folder
app.use(express.static(path.join(__dirname, 'public')))

// Routing
app.use('/', pageRoute);

// Create a server that listens on port 3000 for requests
app.listen(3000, ()=> console.log('listening on port 3000'));