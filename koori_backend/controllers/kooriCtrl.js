const models = require('../models');

module.exports = {

	getAllKoori: (req, res) => {
		models.Koori.findAll({
			attributes: [
				'id', 'description', 'quoi', 'quand', 'comment', 'version'
			]
		}).then((kooris) => {
			return res.status(200).json(kooris)
		}).catch((err) => {
			return res.status(500).json({error: err});
		})
	},

	createKoori: (req, res) => {
		models.Koori.create({
			...req.body
		}).then((koori) => {
			console.log(koori);
			return res.status(201).json(koori);
		})
	}

	
}