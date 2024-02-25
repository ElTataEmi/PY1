const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cart');

router.get('/', cartController.cart);

// Redirección desde '/cart' a '/'
router.get('/cart',(req,res) => res.redirect('http://localhost:3030/carrito'))













module.exports = router;