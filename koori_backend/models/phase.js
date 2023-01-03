'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Phase extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Petaaw,{
        foreignKey: {
          name: "PetaawId",
          allowNull: false,
          onDelete: 'RESTRICT',
          onUpdate: 'RESTRICT'
      }

      }
      )
    }
  }
  Phase.init({
    PetaawId: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    titre: DataTypes.TEXT,
    avatar: {
      type: DataTypes.BLOB,
      defaultValue:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fpattemdigital.com%2Finsight%2Fideation-techniques&psig=AOvVaw21xeCthjMVYFw48dzwm1FD&ust=1672844662128000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJi03JDWq_wCFQAAAAAdAAAAABAN",
      get() {return this.getDataValue('avatar').toString('utf8'); // or whatever encoding is right
    },
  }}, {
    sequelize,
    modelName: 'Phase',
  });
  return Phase;
};