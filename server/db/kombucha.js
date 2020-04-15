const db = require("./db");
const Sequelize = require("sequelize");

const Kombucha = db.define("kombucha", {
  flavor: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { notEmpty: true },
  },
});

module.exports = Kombucha;
