'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    User.init({
        nomComplet: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            validate: { isEmail: true },
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        profession: {
            type: DataTypes.STRING,
            allowNull: false
        },
        service: {
            type: DataTypes.STRING,
            allowNull: false
        },
        departement: {
            type: DataTypes.STRING,
            allowNull: false
        },
        direction: {
            type: DataTypes.STRING,
            allowNull: false
        },
        avatar: {
            type: DataTypes.BLOB,
            allowNull: false,
            defaultValue: ["USER"]
        },
        roles: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false
        },
        etat: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        }
    }, {
        sequelize,
        modelName: 'User',
    });
    return User;
};