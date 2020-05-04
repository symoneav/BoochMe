const { db, Distributor, Company, Kombucha,Location,LocationKombucha,CompanyDistributor } = require("./server/db");

const someCompanies = [
  { name: "WholeSome Booch" },
  { name: "Kombucha 365" },
  { name: "Momma's Kombucha" },
];
const someDistributors = [
  {name: "Wholefoods"},
  { name: "Jewel Osco"},
  { name: "Trader Joes", addresses: [{lng:' -87.792879',lat:'41.598624'}] },
];
const someLocations=[{
  distributorId:2,
  address:'17117 S Harlem Ave, Tinley Park, IL 60477',
  coordinates:[ -87.792879,41.598624]
},{distributorId:2,
  address:'17705 S Halsted St, Homewood, IL 60430',
  coordinates:[ -87.634441,41.567844]
},{distributorId:2,
  address:' 3153 W, 183rd St',
  coordinates:[-87.693331,41.556243]
},{
  distributorId:1,
  address:'15260 South La Grange Road',
  coordinates:[ -87.897610,41.570240]
},{distributorId:1,
  address:'17705 S Halste199 US-41, Schererville, IN 46375d St, Homewood, IL 60430',
  coordinates:[ -87.485218,41.520387]
},{distributorId:1,
  address:' 9600 S Western Ave',
  coordinates:[ -87.685445,41.724636]
},{distributorId:3,
  address:'14924 South La Grange Road, Orland Park, IL 60462',
  coordinates:[  -87.852092,41.614018]
}

]
const someKombuchas = [
  { flavor: "ginger", companyId:1},
  { flavor: "honey sage" ,companyId:1},
  { flavor: "mint and lemongrass",companyId:1 },
  { flavor: "strawberry", companyId:2},
  { flavor: "honeysuckle" ,companyId:2},
  { flavor: "pineapple passionfruit",companyId:2 },
  { flavor: "Very Berry", companyId:3},
  { flavor: "Mellow Melon" ,companyId:3},
  { flavor: "Amazing Aloe",companyId:3 }

];

const someCompanyDistributors =[
  {companyId:1,distributorId:1},
  {companyId:1,distributorId:2},
  {companyId:1,distributorId:3},
  {companyId:2,distributorId:1},
  {companyId:2,distributorId:2},
  {companyId:2,distributorId:3},
  {companyId:3,distributorId:1},
  {companyId:3,distributorId:2},
  {companyId:3,distributorId:3},
]

const someLocationKombuchas =[
  {locationId:1,kombuchaId:1},
  {locationId:1,kombuchaId:2},
  {locationId:1,kombuchaId:4},
  {locationId:1,kombuchaId:7},
  {locationId:2,kombuchaId:1},
  {locationId:2,kombuchaId:3}, 
  {locationId:2,kombuchaId:5},
  {locationId:2,kombuchaId:2},
  {locationId:3,kombuchaId:1},
  {locationId:3,kombuchaId:8},
  {locationId:3,kombuchaId:9},
  {locationId:3,kombuchaId:6},
  {locationId:4,kombuchaId:3},
  {locationId:4,kombuchaId:6},
  {locationId:4,kombuchaId:9},
  {locationId:5,kombuchaId:1},
  {locationId:5,kombuchaId:4},
  {locationId:5,kombuchaId:7},
  {locationId:6,kombuchaId:2},
  {locationId:6,kombuchaId:5},
  {locationId:6,kombuchaId:8},
  {locationId:7,kombuchaId:3},
  {locationId:7,kombuchaId:6},
  {locationId:7,kombuchaId:9}
]

const seed = async () => {
  try {
    await db.sync({ force: true });
    await Promise.all(
      someCompanies.map((company) => {
        return Company.create(company);
      })
    );

    await Promise.all(
      someDistributors.map((distributor) => {
        return Distributor.create(distributor);
      })
    );

    await Promise.all(
      someKombuchas.map((kombucha) => {
        return Kombucha.create(kombucha);
      })
    );
    await Promise.all(
      someCompanyDistributors.map((companyDistributor) => {
        return CompanyDistributor.create(companyDistributor);
      })
    );
    await Promise.all(
      someLocations.map((location) => {
        return Location.create(location);
      })
    );
    await Promise.all(
      someLocationKombuchas.map((locationKombucha) => {
        return LocationKombucha.create(locationKombucha);
      })
    );
  } catch (err) {
    console.error(err);
  }
};

module.exports = seed;

if (require.main === module) {
  seed()
    .then(() => {
      console.log("Seeding success!");
      db.close();
    })
    .catch((err) => {
      console.error("Oh noes! Something went wrong!");
      console.error(err);
      db.close();
    });
}
