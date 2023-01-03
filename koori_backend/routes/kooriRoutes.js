//importing modules
const express = require('express')
const kooriController = require('../controllers/kooriCtrl')


const kooriRouter = express.Router()

kooriRouter.get('/koori/', kooriController.getAllKoori)


module.exports = kooriRouter