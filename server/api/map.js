const router = require("express").Router();
const { Company, Kombucha } = require("../db");


router.put('/',async (req,res,next)=>{
    try{
        const companyKombuchas = await Company.findByPk(req.body.id,{include:Kombucha})
        //  const kombuchas= await companyKombuchas.getKombuchas
         console.log('fruit',companyKombuchas.kombuchas)
        res.json(companyKombuchas)
    }
    catch(err){
        next(err)
    }
})

// router.put('/',async(req,res,next)=>{
//     try{
//         console.log('we made it to the route')
//         res.json('bloop')
//     }
//     catch(err){
//         next(err)
//     }
   
// })

module.exports =router