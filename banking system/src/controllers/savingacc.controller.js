
const express = require("express")

const Savingacc = require("../models/savingacc.model")

const crudController = require("./crud.controller")


const router = express.Router()

router.get("",async (req,res)=>{
    try{
        const savingaccs = await Savingacc.find().lean().exec()
        return res.status(200).send(savingaccs)
    }catch(err){
        return res.status(500).send({mesg:err.mesg})
    }
})
router.post("", crudController(Savingacc) )

module.exports=router