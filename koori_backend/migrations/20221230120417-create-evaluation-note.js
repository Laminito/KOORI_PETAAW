'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('evaluationNotes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

    /*   KooriId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
            model: 'Kooris',
            key: 'id'
        }
    }, */
      UserId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
            model: 'Users',
            key: 'id'  
        }
      },
      PetaawId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
            model: 'Petaaws',
            key: 'id'  
        }
      },
     
      note: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue:0
      },
      commentaire: {
        allowNull: false,
        type: Sequelize.STRING,
        defaultValue:"je suis un commentaire par defaut"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()

      }
    });
    await queryInterface.bulkInsert('evaluationNotes',[
      {
        UserId:3,
        /* KooriId:1 ,*/
        PetaawId:1,
        note:3,
        commentaire:"c'est un tres bon concept",
        
      },
      {
        UserId:4,
        /* KooriId: 1, */
        PetaawId:1,
        note:4,
        commentaire:"c'est un tres bon concept et en meme temps il regle des problemes",
        
      },
      {
        UserId:5,
        /* KooriId: 1, */
        PetaawId:1,
        note:2,
        commentaire:"c'est un tres bon concept mais c'est mal expliqué",
        
      }
  ])
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('evaluationNotes');
  }
};