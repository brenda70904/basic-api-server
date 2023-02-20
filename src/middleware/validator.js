"use strict";

const validator = (req, res, next)=>{
    // Sends the request through when valid, 
    if(req.query.name){
        next();
    }else{
        // forces an error when not
        next("NAME REQUIRED")
    }
};

module.exports = validator;