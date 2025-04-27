const express = require('express');
const router = express.Router();

const studentRoutes = require('./studentRoutes');
const teacherRoutes = require('./teacherRoutes');

// Routes Prefix
router.use('/students', studentRoutes);
router.use('/teachers', teacherRoutes);

module.exports = router;
