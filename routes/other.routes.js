const express = require('express');
const router = express.Router();
const homeController = require('../controllers/other');
const admin = require ("../controllers/admin");


router.get('/', homeController.home)

// Redirección desde '/home' a '/'
router.get('/home',(req,res) => res.redirect('/'))

router.get ("/edit-Product",admin)







module.exports = router;