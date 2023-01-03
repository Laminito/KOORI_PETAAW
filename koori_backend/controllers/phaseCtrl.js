
const _ = require('lodash')
const models = require('../models');
const { Op } = require("sequelize");

module.exports={

   getAllPhases :(req,res)=>{
    models.Phase.findAll({
        attributes: [
            'id',
            'description',
            'titre',
            'avatar'
        ],
        include:[
            {
                model :models.Petaaw,
                attributes:['id','description','version']
            }
        ]
    }).then((phases) => {
        phases.forEach(SinglePhase=> {
            /* console.log(SinglePhase);  */
        })
        return res.status(200).json(phases)
    })
    .catch((err) => {
        return res.status(500).json({ 'error': 'Erreur de récupération' + err })
    })

}
}