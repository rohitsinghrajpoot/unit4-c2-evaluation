const mongoose = require("mongoose")

const savingaccSchema = mongoose.Schema({
    accountNumber:{type:Number,required:true},
    balance:{type:Number},
    interestrate:{type:Number}
    
},
{
    versionKey:false,
    timestamps:true
}
)
const Savingacc = mongoose.model("savingacc",savingaccSchema)
module.exports = Savingacc