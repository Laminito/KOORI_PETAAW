const express = require('express');
const serviceCtrl = require('../controllers/serviceCtrl');

const servicesRouter = express.Router();

servicesRouter.post('/service/', serviceCtrl.createService);
servicesRouter.get('/service/', serviceCtrl.getAllServices);
servicesRouter.get('/service/:id', serviceCtrl.getServiceById);
servicesRouter.put('/service/:id', serviceCtrl.updateService);

module.exports = servicesRouter
