const express = require('express')
const userCtrl = require('../controllers/userCtrl');

//User routes

const userRouter = new express.Router();
userRouter.get('/user/', userCtrl.getAllUsers);
module.exports = userRouter