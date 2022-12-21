const express = require('express');
const kooriCtrl = require('../controllers/kooriCtrl')

const KooriRouter = express.Router();

KooriRouter.get('/koori/', kooriCtrl.getAllKoori );
KooriRouter.post('/koori/', kooriCtrl.createKoori );

module.exports = KooriRouter