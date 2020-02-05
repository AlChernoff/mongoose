
const express = require("express");
const router = express.Router();

const userModel = require('../core/db/models/User');

router.get("/", (req,res)=>{

/*     const user = new userModel({
        firstName: "Bob",
        lastName: "Abramobitch",
        phone: "057800237",
        isLogged: true
    }).save(); */

    /*userModel.find((err, res)=>{
        console.log(res);
    })*/

    userModel.findOneAndUpdate({firstName: "Shalom"}, {firstName: "Yoram"}, (err,res)=>{
        console.log(res);
    });
    res.send("Products page");
});


module.exports = router;