 const express = require("express")    
 
 

const savingaccCrudcontroller = require("./controllers/savingacc.controller")
const fixedaccCrudcontroller= require("./controllers/fixedacc.controller")
const masteraccCrudcontroller= require("./controllers/masteracc.controller")
const app = express()
 app.use(express.json())

app.use("/savingaccs",savingaccCrudcontroller)
app.use("/fixedaccs",fixedaccCrudcontroller)
app.use("/masteraccs",masteraccCrudcontroller) 

module.exports = app