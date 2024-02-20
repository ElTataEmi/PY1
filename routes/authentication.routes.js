const express = require('express');
const router = express.Router();
const authController = require('../controllers/authentication');


router.get('/inicio', authController.login);
router.get('/registro', authController.register);











module.exports = router;