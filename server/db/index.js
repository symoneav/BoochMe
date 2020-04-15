const db = require("./db");
const Distributor = require("./distributor");
const Company = require("./company");
const Kombucha = require("./kombucha");

Distributor.belongsToMany(Company, { through: "CompanyDistributors" });
Company.belongsToMany(Distributor, { through: "CompanyDistributors" });

Company.hasMany(Kombucha);
Kombucha.belongsTo(Company);

Distributor.belongsToMany(Kombucha, { through: "DistributorKombuchas" });
Kombucha.belongsToMany(Distributor, { through: "DistributorKombuchas" });

module.exports = {
  db,
  Distributor,
  Company,
  Kombucha,
};
