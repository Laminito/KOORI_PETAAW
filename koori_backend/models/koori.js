'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Koori extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.evaluationNote)
    }
  }
  Koori.init({
    description: DataTypes.TEXT,
    quand: DataTypes.TEXT,
    quoi: DataTypes.TEXT,
    comment: DataTypes.TEXT,
    version: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Koori',
  });
  return Koori;
};