
const _ = require('lodash')
const models = require('../models');
const { Op } = require("sequelize");

module.exports={

   getAllPetaaw :(req,res)=>{
    models.Petaaw.findAll({
        attributes: [
            'id',
            'description',
            'quand',
            'quoi',
            'comment',
            'version'
        ],
        
    
    }).then((petaaw) => {
        petaaw.forEach(singlepetaaw => {
            /* console.log(singlepetaaw);  */
        })
        return res.status(200).json(petaaw)
    })
    .catch((err) => {
        return res.status(500).json({ 'error': 'Erreur de récupération' + err })
    })

}
}