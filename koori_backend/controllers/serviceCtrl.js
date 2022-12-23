const models = require('../models');

module.exports = {

	createService: (req, res) => {
		models.Service.create({
			...req.body
		}).then(service => {
			if (service.avatar) {
				let buff = new Buffer(service.avatar);
                service.avatar = buff.toString('base64');
			}
			return res.status(201).json(service);
		}).catch(error => {
			return res.status(500).json({ error });
		})
	},
	
	getAllServices: (req, res) => {
		models.Service.findAll({
			attributes: ['id', 'libelle', 'description', 'nom_des_clients', 'type_de_service', 'description_elements_service', 'benefices_client',
            'indicateur_mesure_qualite', 'engagement_niveaux_service', 'plage_horaire', 'livrables', 'suivi_gestion_relation_client',
            'avatar', 'liste_des_applications_metiers_supporte', 'tarifs_et_Facturation', 'archive'],
			order: [
				['id', 'ASC'],
			]
		}).then(services => {
			services.forEach(service => {
				if (service.avatar) {
					let buff = new Buffer(service.avatar);
                    service.avatar = buff.toString('base64');
				}
			});
			return res.status(200).json({services});
		}).catch(error => {
			return res.status(500).json({ error });
		})
	},

	getServiceById: (req, res) => {
		let idService = parseInt(req.params.id);

		models.Service.findOne({
			attributes: ['id', 'libelle', 'description', 'nom_des_clients', 'type_de_service', 'description_elements_service', 'benefices_client',
            'indicateur_mesure_qualite', 'engagement_niveaux_service', 'plage_horaire', 'livrables', 'suivi_gestion_relation_client',
            'avatar', 'liste_des_applications_metiers_supporte', 'tarifs_et_Facturation', 'archive'],
			where: {id: idService}
		}).then(service => {
			return res.status(200).json(service);
		}).catch(error => {
			return res.status(500).json({ error });
		})

	},

	updateService: (req, res) => {
		let idService = parseInt(req.params.id)

		models.Service.findOne({
			where: {id: idService}
		}).then(serviceFound => {
			serviceFound.update({ ...req.body })
			.then(updatedService => {
				return res.status(200).json(updatedService);
			})
			.catch(error => {
				return res.status(500).json({ error });
			})
		})
	},

	
}