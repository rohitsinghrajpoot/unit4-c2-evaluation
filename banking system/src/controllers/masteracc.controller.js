

const express = require("express")
const Masteracc = require("../models/masteracc.model")

const router = express.Router()

router.get("",async (req,res)=>{
    try{
        const masteraccs = await Masteracc.find().
        populate(userId).populate(savingaccId).populate(fixedaccId).lean().exec()

        return res.status(200).send(masteraccs)
    }catch(err){
        return res.status(500).send({mesg:err.mesg})
    }
    


})

router.get("/:id",async (req,res)=>{
    try{
        const masteracc = await Masteracc.findById(req.params.id).populate(userId).populate(savingaccId)
        .populate(fixedaccId)
        .lean().exec()

        return res.status(200).send(masteracc)
    }catch(err){
        return res.send(500).send({msg:err.msg})
    }
})

module.exports= router