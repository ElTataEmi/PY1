const express = require('express');
const router = express.Router();
const prodController = require('../controllers/product')

router.get('/producto', prodController.product);




module.exports = router;