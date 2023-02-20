"use Strict";


module.exports = (sequelizeDataBase, DataTypes) => {
    //takes two prams, database name and a callback fun
    return sequelizeDataBase.define("customers",{
        name:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        age:{
            type:DataTypes.INTEGER,
            allowNull:true,
        },
        pronouns:{
            type:DataTypes.ENUM,
            values:["they/them", "she/her", "he/him"],
            allowNull:true,
        }
    });
};