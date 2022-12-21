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
    }
  }
  Koori.init({
    description: {
      type: DataTypes.TEXT
    },
    quoi: {
      type: DataTypes.TEXT
    },
    quand: {
      type: DataTypes.TEXT
    },
    comment: {
      type: DataTypes.TEXT
    },
    version: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    }
  }, {
    sequelize,
    modelName: 'Koori',
  });
  return Koori;
};