const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teacherController');

// Teacher CRUD
router.get('/', teacherController.getAllTeachers);
router.post('/', teacherController.createTeacher);
router.put('/:id', teacherController.updateTeacher);
router.delete('/:id', teacherController.deleteTeacher);

module.exports = router;
