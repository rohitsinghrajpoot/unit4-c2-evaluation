
const app = require("./index.js")

const connect = require("./configs/db")

app.listen(4400, async (req,res)=>{
    try{
       await connect()
    }catch(err){
        console.log(err)
    }
    console.log("listening")
})