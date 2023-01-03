//importing modules
const express = require('express')
const petaawController = require('../controllers/petaawCtrl')


const petaawRouter = express.Router()

petaawRouter.get('/petaaw/', petaawController.getAllPetaaw)


module.exports = petaawRouter