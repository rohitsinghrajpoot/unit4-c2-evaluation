const mongoose = require("mongoose")

const branchSchema = mongoose.Schema({
    name:{type:String,required:true},
   address:{type:String,required:true},
   IFSC:{type:String,required:true},
   Micr:{type:String,required:true},
   masteraccId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"masteracc",
    required:true
},
},
{
    versionKey:false,
    timestamps:true
}
)
const Branch = mongoose.model("branch",branchSchema)
module.exports = Branch