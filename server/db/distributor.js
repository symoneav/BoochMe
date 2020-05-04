const db = require("./db");
const Sequelize = require("sequelize");

const Distributor = db.define("distributor", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { notEmpty: true },
  },
  // addresses: {  //https://medium.com/codespace69/how-to-define-array-of-objects-in-sequelize-js-fb1529c5502e where I found how to make obj in arrays
  //     type: Sequelize.STRING, 
  //     get: function() {
  //         return JSON.parse(this.getDataValue('addresses'));
  //     }, 
  //     set: function(val) {
  //         return this.setDataValue('addresses', JSON.stringify(val));
  //     }
  // }
  //   type: Sequelize.ARRAY(Sequelize.DECIMAL),
  //   allowNull: false,
  //   validate: { notEmpty: true },
  // },
});

module.exports = Distributor;
