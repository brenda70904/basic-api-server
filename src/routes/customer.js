"use strict";

const express = require("express");
const { customerModel } = require("../models");

const router = express.Router();

//Get All Records
router.get("/customer", async (req, res, next) => {
    const customers = await customerModel.findAll();
    res.status(200).send(customers);

});

// get specific data by id
// router.get("/customer/:id", async(req, res, next)=>{
//     try{
//         const id = req.params.id;
//     const customer = await customerModel.findByPk(id);
//     console.log(`this is req.body.id ${id}`)
//     res.status(200).send(customer);
//     }catch(e){
//         next(e);
//     }
// })

// create data
router.post("/customer", async (req, res, next) => {
    try {
        const newCustomer = await customerModel.create(req.body);
        console.log(newCustomer);
        res.status(200).send(newCustomer);
    } catch (e) {
        next(e);
    }
});

//update
// router.put("/customer", (req, res, next) => {


// });


//delete
// router.delete("/customer", (req, res, next) => {


// });

module.exports = router;