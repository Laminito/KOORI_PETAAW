'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Demandes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UserId:{
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
            model: 'Users',
            key: 'id'
        }
      },
      titre: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      date_debut_souhaitee: {
        type: Sequelize.DATE,
        defaultValue:new Date()
      },
      disponibilite: {
        type: Sequelize.BOOLEAN,
        defaultValue:true
      },
      statut: {
        type: Sequelize.STRING,
        defaultValue:"NOUVELLE"
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
    await queryInterface.bulkInsert('Demandes', [
      {
      UserId: "3",
      titre: 'ORANGE MONEY',
      description: 'Monsieur Ali est un homme maigre, solide comme sa barque, lent, lucide ; un des hommes qui semblent' +
          'faits pour être toujours en contact avec leur monde préféré : la mer. Il a un gros nez, un gros front, de ' +
          'gros yeux qui peuvent détecter les profonds secrets de la mer.',
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      UserId: "4",
      titre: 'NEW CHALLENGE',
      description: 'Monsieur Ali est un homme maigre, solide comme sa barque, lent, lucide ; un des hommes qui semblent' +
          'faits pour être toujours en contact avec leur monde préféré : la mer. Il a un gros nez, un gros front, de ' +
          'gros yeux qui peuvent détecter les profonds secrets de la mer.',
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      UserId: "5",
      titre: 'BAISSE DES FRAIS OM',
      description: 'Monsieur Ali est un homme maigre, solide comme sa barque, lent, lucide ; un des hommes qui semblent' +
          'faits pour être toujours en contact avec leur monde préféré : la mer. Il a un gros nez, un gros front, de ' +
          'gros yeux qui peuvent détecter les profonds secrets de la mer.',
      createdAt: new Date(),
      updatedAt: new Date()
     }
])
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Demandes');
  }
};