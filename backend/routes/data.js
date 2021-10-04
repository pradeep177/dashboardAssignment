const express = require('express');
const { getData } = require('../controllers/data');
const requireLogin = require('../middleWare/authRoute')

const router = express.Router()
//data route
router.post('/data',requireLogin,getData)


module.exports=router