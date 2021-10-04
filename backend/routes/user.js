const express = require('express');
const { signup, signin} = require('../controllers/user');

const router = express.Router()
//Signup route
router.post('/signup',signup)

//Login route
router.post('/signin',signin)


module.exports=router