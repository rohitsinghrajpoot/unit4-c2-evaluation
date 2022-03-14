const mongoose = require("mongoose")

const fixedaccSchema = mongoose.Schema({
    accountNumber:{type:Number,required:true},
    balance:{type:Number},
    interestrate:{type:Number},
    startDate:{type:Number},
    maturityDate:{type:Number}
},
{
    versionKey:false,
    timestamps:true
}
)
const Fixedacc = mongoose.model("fixedacc",fixedaccSchema)
module.exports = Fixedacc