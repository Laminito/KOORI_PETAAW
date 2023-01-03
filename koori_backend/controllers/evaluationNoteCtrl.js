
const _ = require('lodash')
const models = require('../models');
const { Op } = require("sequelize");

module.exports={

   getAllEvaluationNote :(req,res)=>{
    models.evaluationNote.findAll({
        attributes: [
            'id',
            'note',
            'commentaire'
        ],
        include: [
            {
                model: models.User,
                attributes: ['id','roles','nomComplet']
            },
            {
                model: models.Petaaw,
                attributes: ['id','description','version']
            }
    ],
    }).then((evn) => {
        evn.forEach(singleEVN => {
            /* console.log(singleEVN); */
        })
        return res.status(200).json(evn)
    })
    .catch((err) => {
        return res.status(500).json({ 'error': 'Erreur de récupération' + err })
    })

}
}