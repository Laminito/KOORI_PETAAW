
const _ = require('lodash')
const models = require('../models');
const { Op } = require("sequelize");

module.exports={

    getAllDemande :(req,res)=>{
    models.Demande.findAll({
        attributes: [
            'id',
            'titre',
            'description',
            'date_debut_souhaitee',
            'disponibilite',
            'statut'
        ],
        include: [{
            model: models.User,
            attributes: ['id','roles','nomComplet']
        }],
    }).then((demandes) => {
        demandes.forEach(singledemande=> {
            /* console.log(singledemande); */
        })
        return res.status(200).json(demandes)
    })
    .catch((err) => {
        return res.status(500).json({ 'error': 'Erreur de récupération' + err })
    })

}
}