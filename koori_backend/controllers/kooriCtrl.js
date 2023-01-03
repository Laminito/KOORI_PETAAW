
const _ = require('lodash')
const models = require('../models');
const { Op } = require("sequelize");

module.exports={

   getAllKoori :(req,res)=>{
    models.Koori.findAll({
        attributes: [
            'id',
            'description',
            'quand',
            'quoi',
            'comment',
            'version'
        ],
    }).then((kooris) => {
        kooris.forEach(singleKoori => {
            console.log(singleKoori); 
        })
        return res.status(200).json(kooris)
    })
    .catch((err) => {
        return res.status(500).json({ 'error': 'Erreur de récupération' + err })
    })

}
}