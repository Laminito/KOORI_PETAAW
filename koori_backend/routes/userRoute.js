const express = require('express')
const userCtrl = require('../controllers/userCtrl');
const multer = require('../multer-config')



//User routes

const userRouter = new express.Router();
userRouter.get('/user/', userCtrl.getAllUsers);
module.exports = userRouter