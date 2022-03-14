const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    firstName:{type:String,required:true},
    middleName:{type:String},
    lastName:{tyrpe:String,required:false},
   age:{type:Number,required:true},
   email:{type:String,required:true},
   address:{type:String,required:true},
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
const User = mongoose.model("user",userSchema)
module.exports = User