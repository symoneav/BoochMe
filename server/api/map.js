const router = require("express").Router();
const { Company, Kombucha } = require("../db");

router.put('/',async(req,res,next)=>{
    console.log('we made it to the route')
    res.json('bloop')

})