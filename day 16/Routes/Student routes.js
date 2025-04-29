const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');


router.post('/add', studentController.insertStudent);


router.get('/all', studentController.getAllStudents);


router.get('/failed', studentController.getFailedStudents);


router.get('/passed/names', studentController.getPassedStudentNames);

/* Get average age of students
router.get('/average-age', studentController.getAverageAge);*/


router.put('/update/id', studentController.updateStudentById);

// Update student by name
router.put('/update/name', studentController.updateStudentByName);

// Delete student by ID
router.delete('/delete/id', studentController.deleteStudentById);

// Delete student by name
router.delete('/delete/name', studentController.deleteStudentByName);

module.exports = router;
