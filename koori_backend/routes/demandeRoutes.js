//importing modules
const express = require('express')
const demandeController = require('../controllers/demandeCtrl')


const demandeRouter = express.Router()

demandeRouter.get('/demande/', demandeController.getAllDemande)


module.exports = demandeRouter