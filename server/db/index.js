const db = require("./db");
const Distributor = require("./distributor");
const Company = require("./company");
const Kombucha = require("./kombucha");
const Location = require('./location')
const LocationKombucha= require('./LocationKombuchas')
const CompanyDistributor = require('./companyDistributors')

Distributor.belongsToMany(Company, { through: CompanyDistributor});
Company.belongsToMany(Distributor, { through: CompanyDistributor });

Company.hasMany(Kombucha);
Kombucha.belongsTo(Company);

Location.belongsToMany(Kombucha, { through: LocationKombucha});
Kombucha.belongsToMany(Location, { through: LocationKombucha });

Distributor.hasMany(Location)
Location.belongsTo(Distributor)



module.exports = {
  db,
  Distributor,
  Company,
  Kombucha,
  Location,
  LocationKombucha,
  CompanyDistributor
};
