"use strict";

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3002;

const logger = require("./middleware/logger");
const validator = require("./middleware/validator");
const handleError = require("./error-handlers/500");
const notFound = require("./error-handlers/404");


app.use(logger);

app.get("/", (req, res, next)=>{
    res.status(200).send("Basic API server");
});


app.use("*",notFound);
app.use(handleError);

const start =()=>{
app.listen(PORT, ()=> console.log(`listening PORT ${PORT}`))
}

module.exports = {app, start};