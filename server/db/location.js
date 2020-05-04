const db = require("./db");
const Sequelize = require("sequelize");

const Location = db.define("location", {
  address: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { notEmpty: true },
  },
  coordinates:{
      type: Sequelize.ARRAY(Sequelize.DECIMAL)
  }
});

module.exports = Location;