const express = require('express');
const router = express.Router();
const carController = require('../controllers/carController');

router.get('/details', carController.showCarPage);

module.exports = router;
