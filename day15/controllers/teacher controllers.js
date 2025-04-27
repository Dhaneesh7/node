const { dbo } = require('../modules/db'); // Assuming you have a db module
const teacherCollectionName = 'teachers'; // Your teachers collection name

async function registerTeacher(req, res) {
  if (dbobj) {
    try {
      const result = await dbobj.collection(teacherCollectionName).insertOne(req.body);
      res.json({
        message: "Teacher registered successfully",
        success: true
      });
    } catch (err) {
      console.error("Could not register teacher. Error:", err);
      res.json({
        message: "Could not register teacher. Database query failed.",
        success: false
      });
    }
  } else {
    res.json({
      message: "DB connection is not ready. Please try later.",
      success: false
    });
  }
}

async function getAllTeachers(req, res) {
  if (dbobj) {
    try {
      const teachers = await dbobj.collection(teacherCollectionName).find({}).toArray();
      res.json(teachers);
    } catch (err) {
      console.error("Error getting teachers:", err);
      res.status(500).json({
        message: "Failed to get teachers",
        success: false
      });
    }
  } else {
    res.json({
      message: "DB connection is not ready. Please try later.",
      success: false
    });
  }
}

module.exports = { getAllTeachers, registerTeacher };
