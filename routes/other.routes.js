const express = require('express');
const router = express.Router();
const homeController = require('../controllers/other');


router.get('/', homeController.home)








module.exports = router;