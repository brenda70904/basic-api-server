"use strict";

require("dotenv").config();

//bring in package and module
const {Sequelize, DataTypes} = require("sequelize");
const customer = require("./customer");

    //sqlite 3 is the package we installed "sqlite:memory" for the in memory database for testing
const DATABASE_URL = process.env.NODE_ENV === "test" ? "sqlite::memory" : process.env.DATABASE_URL;

//db singleton
const sequelizeDataBase = new Sequelize(DATABASE_URL);

const customerModel = customer(sequelizeDataBase, DataTypes);  

module.exports = {customerModel, sequelizeDataBase};