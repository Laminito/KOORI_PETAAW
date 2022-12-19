//importcd
const models = require("../models");
const { Op } = require("sequelize");


module.exports = {

    getAllUsers: (req, res) => {
        var limit = parseInt(req.query.limit);
        var offset = parseInt(req.query.offset);
        models.User.findAll({

                order: [
                    ['id', 'ASC'],
                ],
                attributes: [
                    'id',
                    'nomComplet',
                    'email',
                    'password',
                    'profession',
                    'service',
                    'departement',
                    'direction',
                    'avatar',
                    'roles',
                    'etat'
                ],
                limit: (!isNaN(limit)) ? limit : null,
                offset: (!isNaN(offset)) ? offset : null,
            }).then((users) => {
                users.forEach(user => {

                    if (user.avatar) {
                        let buff = new Buffer(user.avatar);
                        user.avatar = buff.toString('base64');
                    }
                })
                return res.status(200).json(users)
            })
            .catch((err) => {
                return res.status(500).json({ 'error': 'Erreur de récupération' + err })
            })

    }
}