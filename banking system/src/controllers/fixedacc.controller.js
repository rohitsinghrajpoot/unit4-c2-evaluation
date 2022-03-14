

const express = require("express")

const Fixedacc = require("../models/fixedacc.model")

const crudController =require("./crud.controller")
const router = express.Router()

router.get("",async (req,res)=>{
    try{
        const fixedaccs = await Fixedacc.find().lean().exec()
        return res.status(200).send(fixedaccs)
    }catch(err){
        return res.status(500).send({mesg:err.mesg})
    }
})
router.post("", crudController(Fixedacc))

module.exports=router
