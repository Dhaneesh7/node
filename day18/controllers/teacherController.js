const Teacher = require('../models/teacherModel');
const Response = require('../shared/Response');
function insertTeachers(req, res) {
  try {
    const newTeacher = new Teacher(req.body);
    const savedTeacher =  newTeacher.save();
Response.setSuccess(true);
Response.setMessage("Teacher inserted successfully");
    res.status(201).json(savedTeacher);
res.json("Teacher inserted successfully");
  } catch (err) {
    res.status(400).json("Error inserting teacher", err);
  }
}


function getTeachers(req, res) {

     Teacher.find().then(result=>{
Response.setSuccess(true);
Response.setPayload(result);
Response.setMessage("Teacher retrieve successfully");
res.json(result);


    }).catch(err=>{
res.json(err);
})
}

// Get Married Teachers
 function getTeacherMarried(req, res) {

     Teacher.find({ maritalStatus: 'married' }).then(result=>{
Response.setSuccess(true);
Response.setPayload(result);
Response.setMessage("Teacher retrieve successfully");
res.json(result);


    }).catch(err=>{
res.json(err);
})

}

// Get Unmarried Teachers
async function getTeacherUnmarried(req, res) {

    Teacher.find({ maritalStatus: 'unmarried' }).then(result=>{
Response.setSuccess(true);
Response.setPayload(result);
Response.setMessage("Teacher retrieve successfully");
res.json(result);


    }).catch(err=>{
res.json(err);
})

}

// Get Teachers by Place
async function getTeacherByPlace(req, res) {

    const { place } = req.params;
    cTeacher.find({ place }).then(result=>{
Response.setSuccess(true);
Response.setPayload(result);
Response.setMessage("Teacher retrieve successfully");
res.json(result);


    }).catch(err=>{
res.json(err);
})

}

// Delete by ID
 function deleteTeacherById(req, res) {

    Teacher.findByIdAndDelete(req.params.id).then(result=>{
Response.setSuccess(true);
Response.setPayload(result);
Response.setMessage("Teacher deleted successfully");
res.json(result);


    }).catch(err=>{
res.json(err);
})

}

// Get Teacher by Name
function getTeacherByName(req, res) {
  Teacher.findOne({ name: req.params.name }).then(result=>{
Response.setSuccess(true);
Response.setPayload(result);
Response.setMessage("Teacher retrieve successfully");
res.json(result);


    }).catch(err=>{
res.json(err);
})

}

// Delete by Name
async function deleteTeacherByName(req, res) {

  Teacher.findOneAndDelete({ name: req.params.name }).then(result=>{
Response.setSuccess(true);
Response.setPayload(result);
Response.setMessage("Teacher deleted successfully");
res.json(result);


    }).catch(err=>{
res.json(err);
})

}

module.exports = {
  getTeachers,
  insertTeachers,
  getTeacherMarried,
  getTeacherUnmarried,
  getTeacherByPlace,
  deleteTeacherById,
  getTeacherByName,
  deleteTeacherByName
};