
const Teacher = require('../models/teacherModel');
function insertTeachers(req,res){

const newteacher= new teacher({req.body})
}
function getTeachers(req,res){

const teachers = Teacher.find();
    res.json(teachers);
}
function getTeacherMarried(req,res){

const teachers =  Teacher.find({ maritalStatus: 'married' });
  res.json({ count: teachers.length, teachers });
}
function getTeacherUnmarried(req,res){

const teachers =  Teacher.find({ maritalStatus: 'unmarried' });
  res.json({ count: teachers.length, teachers });
}
function getTeacherByPlace(req,res){
const { place } = req.params;
  const teachers =  Teacher.find({ place });
  res.json(teachers);

}
function deleteTeacherById(req,res){
Teacher.findByIdAndDelete(req.params.id);
  res.json({ message: "Teacher deleted successfully" });

}
function getTeacherByName(req,res){
const teacher = Teacher.findOne({ name: req.params.name });
  if (!teacher) {
    res.json({ message: "Teacher not found" });
  }
  res.json(teacher);

}
function deleteTeacherByName(req,res){
Teacher.findOneAndDelete({ name: req.params.name });
  res.json({ message: "Teacher deleted successfully" });


}


module.exports = { getTeachers, insertTeachers,getTeacherMarried, getTeacherUnmarried,getTeacherByPlace,deleteTeacherById,getTeacherByName,deleteTeacherByName};

