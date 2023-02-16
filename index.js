"use strict";

require("dotenv").config();
const {start} = require("./src/server.js");
const {sequelizeDataBase} = require("./src/models");
//const {sequelizeDataBase} = require("./src/models/index"); it's same as above


//connect to db then start the server
sequelizeDataBase.sync()
.then(()=>{
    console.log("successful connection");
    start();
})
.catch(e=> console.error(e));
// Q: what does sync do?
