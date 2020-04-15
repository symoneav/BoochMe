const router = require("express").Router();
const { Company, Kombucha } = require("../db");

router.get("/", async (req, res, next) => {
  try {
    res.json(await Company.findAll());
  } catch (err) {
    next(err);
  }
});
