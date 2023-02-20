"use strict";

const { app } = require("../src/server");
const supertest = require("supertest");
const { sequelizeDataBase } = require("../src/models");
const request = supertest(app);

//connect to the database
beforeAll(async () => {
    await sequelizeDataBase.sync();
});

//turn off after done testing
afterAll(async () => {
    await sequelizeDataBase.drop();
});

describe("API server", () => {
    //rooth path
    it("check root path", async () => {
        const response = await request.get("/");
        expect(response.status).toBe(200);
    });
    
    //404 on a bad method
    test("handles invalid requests", async () => {
        const response = await request.get("/banana");
        expect(response.status).toEqual(404);
    });

    // 404 on bad route
    it("handle bad routes", async () => {
        const response = await request.get("/banana");
        expect(response.status).toEqual(404);
    });

});

describe("REST API", () => {
    it("creates a customer", async () => {
        let response = await request.post("/customer").send({
            name: "brenda",
            age: "30",
            pronouns: "she/her"
        });
        expect(response.status).toBe(200);
        expect(response.body.name).toEqual("brenda");
        expect(response.body.age).toEqual("30");
        expect(response.body.pronouns).toEqual("she/her");
        expect(response.body.id).toBeTruthy();
    });

    it("get customers", async () => {
        let response = await request.get("/customer");

        expect(response.status).toEqual(200);
        expect(response.body[0].name).toEqual("brenda");
        expect(response.body[0].age).toEqual(30);
        expect(response.body[0].pronouns).toEqual('she/her');
        expect(response.body[0].id).toBeTruthy();
    });

    it("get one customers by id", async ()=>{
        let response = await request.get("/customer/1");

        expect(response.status).toEqual(200);
        expect(response.body.id).toBeTruthy();
    });

    it("update as expected", async()=>{
        let response = await request.put("/customer/2").send({
            name:"welly",
            pronouns:"he/him",
        });
        expect(response.status).toEqual(200);
        // expect(response.body.name).toEqual("welly");
        // expect(response.body.age).toEqual(33);
        // expect(response.body.pronouns).toEqual([2]);
        // expect(response.body.id).toBeTruthy();
        
    });

    it("delete as expected", async()=>{
        let response = await request.delete("/customer/2");
        expect(response.text).toEqual("Deleted");

    });


});