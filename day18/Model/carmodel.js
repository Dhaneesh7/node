const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: String,
  price: Number,
  fuelType: String,
  year: Number,
});

module.exports = mongoose.model('Car', carSchema);
