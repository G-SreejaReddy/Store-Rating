const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');


const Store = sequelize.define('Store', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Store;
