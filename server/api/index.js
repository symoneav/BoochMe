const router = require("express").Router();
module.exports = router;

// router.use("/companies", require("./companies"));
router.use('/map', require('./map'))

router.use(function (req, res, next) {
  const err = new Error("Not found.");
  err.status = 404;
  next(err);
});


