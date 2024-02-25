const express = require('express');
const router = express.Router();
const prodController = require('../controllers/product')

router.get('/', prodController.product);

// Redirección desde '/product' a '/'
router.get('/product',(req,res) => res.redirect('http://localhost:3030/producto'))






module.exports = router;