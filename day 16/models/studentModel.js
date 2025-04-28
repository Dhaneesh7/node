const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true, min: 5, max: 100 },
  marks: { type: Number, required: true, min: 0, max: 100 },
  gender: { type: String, enum: ['male', 'female'], required: true },
  email: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('Student', studentSchema);
