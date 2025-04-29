const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teacherController');

// Insert a new Teacher
router.post('/add', teacherController.insertTeacher);

// Get all Teachers
router.get('/all', teacherController.getAllTeachers);

// Get Teachers in Alphabetical order
/*router.get('/alphabetical', teacherController.getTeachersAlphabetical);

// Get Teachers sorted by lower salary
router.get('/salary', teacherController.getTeachersLowerSalary);

// Get Average Salary
router.get('/average-salary', teacherController.getAverageSalary);

// Get Average Age
router.get('/average-age', teacherController.getAverageAge);*/

// Get all Married Teachers
router.get('/married', teacherController.getMarriedTeachers);

// Get all Unmarried Teachers
router.get('/unmarried', teacherController.getUnmarriedTeachers);

// Search Teachers by Place
router.get('/place', teacherController.searchByPlace);

// Delete Teacher by ID
router.delete('/delete/id', teacherController.deleteTeacherById);

// Find Teacher by Name
router.get('/find/name', teacherController.findTeacherByName);

// Delete Teacher by Name
router.delete('/delete/name', teacherController.deleteTeacherByName);

module.exports = router;
