const router = require("express").Router();
const { Company, Kombucha,LocationKombucha } = require("../db");


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
       const kombuchas = await LocationKombucha.findAll({
           where:{
               kombuchaId:req.body.id
           }
       })
       console.log('PEACHESS',kombuchas)
        res.json(kombuchas)
    }
    catch(err){
        next(err)
    }
})

module.exports =router