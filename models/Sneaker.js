const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Sneaker extends Model {}

Sneaker.init(
  {
    brand: {
        type: DataTypes.STRING,
        allowNull: false
    },
    model: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    retailPrice: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    EstResalePrice: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    rare: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  },
  {
    sequelize,
  }
);

module.exports = Sneaker;
