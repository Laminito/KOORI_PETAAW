//importing modules
const express = require('express')
const phaseController = require('../controllers/phaseCtrl')


const phaseRouter = express.Router()

phaseRouter.get('/phase/', phaseController.getAllPhases)


module.exports = phaseRouter