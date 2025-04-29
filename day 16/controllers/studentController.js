const Student = require('../models/studentModel');

function insertStudent(req,res){
//const student = await Student.create(req.body);
const Student= new Student({req.body})
}
function getAllStudent(req,res){
const { page = 1, limit = 5 } = req.query;
    const students = await Student.find()
      .limit(limit * 1)
      .skip((page - 1) * limit);
    res.json(students);
}
function getFailedStudent(req,res){
const students =  Student.find({ mark: { $lt: 40 } });
  res.json(students);
}
function getPassedStudent(req,res){
const students =  Student.find({ mark: { $gt: 40 } });
  res.json(students);
}
