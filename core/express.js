const express = require('express');
const path = require("path");
const logger = require('../middleware/logger');

const app = express();

app.use(logger);
app.use("/public",express.static(path.join(__dirname,'../public')));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/products',require("../routes/product"));

app.listen(3000, () =>{
    console.log('Server runs on a port 3000')
});

module.exports = app;