'use strict';
/** @type {import('sequelize-cli').Migration} */
const bcrypt = require("bcrypt")
const defaultpass = "pass"

// Hachage de mot de pass
async function hash(password) {
    const passwprdHash = await bcrypt.hash(password, 10);
    return passwprdHash;
}


module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            nomComplet: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            profession: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            service: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            departement: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            direction: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            avatar: {
                type: Sequelize.BLOB,
                allowNull: false,
                get() {
                    return this.getDataValue('avatar').toString('utf8'); // or whatever encoding is right
                },
            },
            etat: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: true
            },
            roles: {
                type: Sequelize.ARRAY(Sequelize.ARRAY(Sequelize.STRING)),
                allowNull: false,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
        await queryInterface.bulkInsert('Users', [{
                nomComplet: 'PSM',
                email: 'psm@gmail.com',
                password: await hash(defaultpass),
                profession: 'CTO',
                service: 'Systeme information',
                departement: 'Innovation Lab',
                direction: 'Direction Systeme information',
                roles: ["ADMIN"],
                avatar: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ffr.freepik.com%2Fvecteurs-premium%2Fportrait-femme-afro-americaine-profil-avatar-jeune-fille-noire_6291373.htm&psig=AOvVaw2IjzYSx3dPch48NxWm7Emv&ust=1666375424572000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCJCU9auy7_oCFQAAAAAdAAAAABAN',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                nomComplet: 'Mohamed Ba',
                email: 'mba25116@gmail.com',
                password: await hash(defaultpass),
                profession: 'Developpeur web',
                service: 'Systeme information',
                departement: 'Innovation Lab',
                direction: 'Direction Systeme information',
                roles: ["ADMIN"],
                avatar: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ffr.freepik.com%2Fvecteurs-premium%2Fportrait-femme-afro-americaine-profil-avatar-jeune-fille-noire_6291373.htm&psig=AOvVaw2IjzYSx3dPch48NxWm7Emv&ust=1666375424572000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCJCU9auy7_oCFQAAAAAdAAAAABAN',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                nomComplet: 'Fama Sarr',
                email: 'sfama@ept.sn',
                password: await hash(defaultpass),
                profession: 'Developpeuse web',
                service: 'Systeme information',
                departement: 'Innovation Lab',
                direction: 'Direction Systeme information',
                roles: ["USER"],
                avatar: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ffr.freepik.com%2Fvecteurs-premium%2Fportrait-femme-afro-americaine-profil-avatar-jeune-fille-noire_6291373.htm&psig=AOvVaw2IjzYSx3dPch48NxWm7Emv&ust=1666375424572000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCJCU9auy7_oCFQAAAAAdAAAAABAN',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                nomComplet: 'Cheikhou Bodian',
                email: 'cheikhoubodian@gmail.com',
                password: await hash(defaultpass),
                profession: 'Commercial',
                service: 'Systeme information',
                departement: 'DSC',
                direction: 'Direction Systeme Commercial',
                roles: ["USER"],
                avatar: 'https://img.freepik.com/photos-gratuite/beau-jeune-homme-africain-pensif-s-appuyant-main-tout-pensant_1262-12382.jpg?w=2000',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                nomComplet: 'Abdoulaye Mangane',
                email: 'abmangane12@gmail.com',
                password: await hash(defaultpass),
                profession: 'Developpeur web',
                service: 'Systeme information',
                departement: 'Innovation Lab',
                direction: 'Direction Systeme information',
                roles: ["USER"],
                avatar: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ffr.freepik.com%2Fvecteurs-premium%2Fportrait-femme-afro-americaine-profil-avatar-jeune-fille-noire_6291373.htm&psig=AOvVaw2IjzYSx3dPch48NxWm7Emv&ust=1666375424572000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCJCU9auy7_oCFQAAAAAdAAAAABAN',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                nomComplet: 'Maguette Seck',
                email: 'seckmaguette036@gmail.com',
                password: await hash(defaultpass),
                profession: 'Developpeur web',
                service: 'Systeme information',
                departement: 'Innovation Lab',
                direction: 'Direction Systeme information',
                roles: ["USER"],
                avatar: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ffr.freepik.com%2Fvecteurs-premium%2Fportrait-femme-afro-americaine-profil-avatar-jeune-fille-noire_6291373.htm&psig=AOvVaw2IjzYSx3dPch48NxWm7Emv&ust=1666375424572000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCJCU9auy7_oCFQAAAAAdAAAAABAN',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                nomComplet: 'Koori Petaaw',
                email: 'koori@gmail.com',
                password: await hash(defaultpass),
                profession: 'Developpeur web',
                service: 'Systeme information',
                departement: 'Innovation Lab',
                direction: 'Direction Systeme information',
                roles: ["USER"],
                avatar: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ffr.freepik.com%2Fvecteurs-premium%2Fportrait-femme-afro-americaine-profil-avatar-jeune-fille-noire_6291373.htm&psig=AOvVaw2IjzYSx3dPch48NxWm7Emv&ust=1666375424572000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCJCU9auy7_oCFQAAAAAdAAAAABAN',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                nomComplet: 'Mor Diouf',
                email: 'mordiouf@gmail.com',
                password: await hash(defaultpass),
                profession: 'Developpeur web',
                service: 'Systeme information',
                departement: 'Innovation Lab',
                direction: 'Direction Systeme information',
                roles: ["USER"],
                avatar: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ffr.freepik.com%2Fvecteurs-premium%2Fportrait-femme-afro-americaine-profil-avatar-jeune-fille-noire_6291373.htm&psig=AOvVaw2IjzYSx3dPch48NxWm7Emv&ust=1666375424572000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCJCU9auy7_oCFQAAAAAdAAAAABAN',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                nomComplet: 'Souleymane Diallo',
                email: 'diallo@gmail.com',
                password: await hash(defaultpass),
                profession: 'Developpeur web',
                service: 'Systeme information',
                departement: 'Innovation Lab',
                direction: 'Direction Systeme information',
                roles: ["USER"],
                avatar: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ffr.freepik.com%2Fvecteurs-premium%2Fportrait-femme-afro-americaine-profil-avatar-jeune-fille-noire_6291373.htm&psig=AOvVaw2IjzYSx3dPch48NxWm7Emv&ust=1666375424572000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCJCU9auy7_oCFQAAAAAdAAAAABAN',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                nomComplet: 'Awa Waga Diop',
                email: 'awawagadiop@gmail.com',
                password: await hash(defaultpass),
                profession: 'Developpeuse web',
                service: 'Systeme information',
                departement: 'Innovation Lab',
                direction: 'Direction Systeme information',
                roles: ["USER"],
                avatar: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ffr.freepik.com%2Fvecteurs-premium%2Fportrait-femme-afro-americaine-profil-avatar-jeune-fille-noire_6291373.htm&psig=AOvVaw2IjzYSx3dPch48NxWm7Emv&ust=1666375424572000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCJCU9auy7_oCFQAAAAAdAAAAABAN',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ])
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Users');
    }
};