const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
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
  },
updatedAt: Date,
  createdBy: String
});
teacherSchema.pre('save', function (next) {
  this.updatedAt = new Date();
  next();
});
teacherSchema.pre('findOneAndUpdate', function (next) {
  const user =  mongoose.model('User').findOne(); 
  this._update.createdBy = user ? user._id.toString() : 'system';
  next();
});

module.exports = mongoose.model('Teacher', teacherSchema);