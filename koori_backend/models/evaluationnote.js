'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class evaluationNote extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {
        foreignKey: {
            name: "UserId",
            allowNull: false,
            onDelete: 'RESTRICT',
            onUpdate: 'RESTRICT'
        }
      });
      this.belongsTo(models.Petaaw,{
        foreignKey: {
          name: "PetaawId",
          allowNull: false,
          onDelete: 'RESTRICT',
          onUpdate: 'RESTRICT'
      }

      });
    
  }
}
  evaluationNote.init({
    UserId:DataTypes.INTEGER,
    /* KooriId:DataTypes.INTEGER, */
    PetaawId:DataTypes.INTEGER,
    note: DataTypes.INTEGER,
    commentaire: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'evaluationNote',
  });
  return evaluationNote;
};