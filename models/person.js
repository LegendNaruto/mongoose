//Creation of a Person Prototype

const mongoose = require("mongoose");
const connection = require('../util/database');

const person = new mongoose.Schema({
    name:{
        type:string , 
        required: true
    },
    age: Number,
    favoriteFoods:[String]
});

const Person = connection.model('Person', person);
module.exports = person;