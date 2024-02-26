const express = require('express');
const router = express.Router();
const homeController = require('../controllers/other');
const admin = require ("../controllers/admin");


router.get('/', homeController.home)

// Redirección desde '/home' a '/'
router.get('/home',(req,res) => res.redirect('/'));

// Editar y crear producto

router.get ("/edit-Product",admin.edit);
router.get ("/producto-nuevo",admin.create);







module.exports = router;