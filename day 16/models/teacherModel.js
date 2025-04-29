const mongoose = require('mongoose');

const teacher = new mongoose.Schema({
  name: {
    type: String,
    required: true,
   // match: /^[A-Z\s]+$/ // Capital letters only
  },
  age: {
    type: Number,
    required: true,
    min: 21,
    max: 65
  },
  salary: {
    type: Number,
    required: true,
    min: 10000,
    max: 100000
  },
  gender: {
    type: String,
    required: true,
    enum: ['male', 'female']
  },
  place: {
    type: String,
    required: true
  },
  maritalStatus: {
    type: String,
    enum: ['married', 'unmarried'],
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    //match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  },
  phone: {
    type: String,
    required: true,
  //  match: /^[0-9]{10}$/
  }
});

module.exports = mongoose.model('Teacher', teacher);
