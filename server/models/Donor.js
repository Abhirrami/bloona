// server/models/Donor.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // import your database instance

const Donor = sequelize.define('Donor', {
  donorId: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  bloodGroup: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  healthReport: {
    type: DataTypes.STRING, // stores file path or filename
    allowNull: true,
  },
  contact: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  tableName: 'donors',
  timestamps: true, // includes createdAt and updatedAt
});

module.exports = Donor;
