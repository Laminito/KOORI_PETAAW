//importing modules
const express = require('express')
const evaluationNoteController = require('../controllers/evaluationNoteCtrl')


const evaluationNoteRouter = express.Router()

//signup endpoint
//passing the middleware function to the signup
evaluationNoteRouter.get('/evaluation/', evaluationNoteController.getAllEvaluationNote)


module.exports = evaluationNoteRouter