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
	},

	updateKoori: (req, res) => {

		let id = req.params.id;

		models.Koori.findOne({
			where : {id:id}
		}).then(koori => {
			if(koori){
				koori.update({...req.body})
				.then((updatedKoori) => {
					return res.status(200).json({
						message: 'Koori updated successfully !',
						updatedKoori
					})
				})
			}else{
				return res.status(500).json({message: 'Koori not found !'})
			}
		}).catch(error => {
			return res.status(400).json({ error });
		})
	},
	
}
