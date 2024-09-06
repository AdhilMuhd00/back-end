//1.import express
const express = require('express')
require("./connection")
var cors=require("cors")

//2.create an instance of express
const app = new express()

//3.use middleware
app.use(express.json())
app.use(cors())

var EmpModel = require('./models/employee')



//3.api creation
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/trial',(req, res) => {
    res.send('this is a trial msg')
})


//4.port
app.listen(3004, () => {
    console.log(" port is running ")
})


//add api
app.post("/add", async (req, res) => {
    try { 
        await EmpModel(req.body).save();
        res.send({ message:"data added!!"})
    }
    catch (error) {
    console.log(error)    
    }
})
//get api
app.get("/view", async (req, res) => {
    try {
        var data = await EmpModel.find();
        res.send(data)
    }
    catch (error) {
        console.log(error)
    }
    })
//delete api
app.delete("/remove/:id", async (req, res) => {
    try {
        await EmpModel.findByIdAndDelete(req.params.id);
        res.send({ message: "data deleted!!" })
    }
    catch (error) {
        console.log(error)
    }
    })
//update api
app.put("/update/:id", async (req, res) => {
    try {
        await EmpModel.findByIdAndUpdate(req.params.id, req.body);
        res.send({ message: "data updated!!" })
    }
    catch (error) {
        console.log(error)
        }
})
