const app = require("./core/express");
const mongoose = require('./core/db/mongoose');
app.get('/',(req,res)=>{
    res.send("Working!");
})