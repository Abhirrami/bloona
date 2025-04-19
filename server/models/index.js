const sequelize = require("../config/database");
const Donor = require("./Donor");
const Hospital = require("./Hospital");

const syncModels = async () => {
  await sequelize.sync({ alter: true });
};

module.exports = { sequelize, Donor, Hospital, syncModels };
