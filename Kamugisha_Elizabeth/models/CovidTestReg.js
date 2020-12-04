// Connect to MongoDB
const mongoose = require('mongoose');

// Define Schema Model
const covidTestReg = new mongoose.Schema({
    
 // Registration Schema
surname: {
    type: String,
    unique: true,
},
name: {
    type: String,
    unique: true,
},
dob: String,
residence: {
    type: String,
},
occupation: {
    type: String,
},
nationality: {
    type: String,
},
gender: String,
category:String,
});


// Create Model & Export it
module.exports = mongoose.model('CovidTestReg', covidTestReg);
 