const mongoose = require('mongoose');
const joi = require('joi');

//Create Schema 
const houseSchema = new mongoose.Schema({
    city: { type: String, lowercase: true, trim: true, required: true },
    price: { type: Number, required: true },
    date: { type: Date, default: Date.now },
    numberOfGuests: { type: Number, min: 2, max: 6, required: true },
    numberOfBedroom: { type: Number, min: 1, max: 4, required: true },
    numberOfBathroom: { type: Number, min: 1, max: 3, required: true }
});

const House = mongoose.model("House", houseSchema);
module.exports = House;