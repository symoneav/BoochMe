const { db } = require("./server/db");
const app = require("./server");
// const PORT = 3001;

const port = process.env.PORT || 3001; // this can be very useful if you deploy to Heroku!
app.listen(port, function () {
  console.log("Knock, knock");
  console.log("Who's there?");
  console.log(`Your server, listening on port ${port}`);
});

// db.sync() // if you update your db schemas, make sure you drop the tables first and then recreate them
//   .then(() => {
//     console.log("db synced");
//     app.listen(PORT, () =>
//       console.log(`studiously serving silly sounds on port ${PORT}`)
//     );
//   });
