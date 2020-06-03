const router = require("express").Router();
const { Company, Kombucha, LocationKombucha,Location } = require("../db");


router.put('/',async (req,res,next)=>{
    try{
        const companyKombuchas = await Company.findByPk(req.body.id,{include:Kombucha})
        res.json(companyKombuchas)
    }
    catch(err){
        next(err)
    }
})

router.post('/',async(req,res,next)=>{
    try{
       const kombuchaInStock = await Kombucha.findOrCreate({
        where: {
          id: req.body.id,
        },
        include: [
          {
            model:Location,
            through: LocationKombucha
          }
        ]
      })
      console.log('HELLLO',kombuchaInStock[0].locations)
      res.json(kombuchaInStock[0].locations)
    }
    catch(err){
        next(err)
    }
})

module.exports =router