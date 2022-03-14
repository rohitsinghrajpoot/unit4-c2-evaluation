const mongoose = require("mongoose")

const masteraccSchema = mongoose.Schema({
    balance:{type:Number,required:true},
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"userId",
        required:true
    },
    savingaccId:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"savingacc",
      required:true
    },
    fixedaccId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"fixedacc",
        required:true
    },
},
{
    versionKey:false,
    timestamps:true
}
)
const Masteracc = mongoose.model("masteracc",masteraccSchema)
module.exports = Masteracc