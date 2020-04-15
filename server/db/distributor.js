const db = require("./db");
const Sequelize = require("sequelize");

const Distributor = db.define("distributor", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { notEmpty: true },
  },
  addresses: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    allowNull: false,
    validate: { notEmpty: true },
  },
});

module.exports = Distributor;
