const { db, Distributor, Company, Kombucha } = require("./server/db");

const someCompanies = [
  { name: "WholeSome Booch" },
  { name: "Kombucha 365" },
  { name: "Momma's Kombucha" },
];
const someDistributors = [
  {
    name: "Wholefoods",
    addresses: ["200 State Street", "31 Washington Rd", "111 Dearborn"],
  },
  { name: "Jewel Osco", addresses: ["3201 Clark", "115 Lasalle", "45 Wabash"] },
  { name: "Health Foods", addresses: ["1871 Kedzie avenue"] },
];

const someKombuchas = [
  { flavor: "ginger" },
  { flavor: "honey sage" },
  { flavor: "mint and lemongrass" },
];

const seed = async () => {
  try {
    await db.sync({ force: false });
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
