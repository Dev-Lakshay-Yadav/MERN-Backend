// const express = require('express')
// const app = express()

// // Mongo CRUD using Mongoose

// const userModel = require("./userModel")

// app.get("/",function(req,res){
//     res.send("hey")
// })

// // Creating mongo document
// app.get("/create", async function(req,res){
//     let createdUser = await userModel.create({   // userModel.create({}) is a aync code which was declared by mongo so we put await before it.
//         name : "lakshay",
//         username : "lakshay22",
//         email : "lakshay8219@gmail.com"
//     })
//     res.send(createdUser)
// })


// // Updating mongo document
// app.get("/update", async function(req,res){
//     let updatedUser = await userModel.findOneAndUpdate({
//         username : "lakshay22",
//         name : "lakshay yadav",
//         new : true
//         })
//     res.send(updatedUser)
// })

// // Read mongo document
// app.get("/read", async function(req,res){
//     let readUsers = await userModel.find()
//     res.send(readUsers)
// })


// // Delete mongo document
// app.get("/delete", async function(req,res){
//     let deletedUser = await userModel.findOneAndDelete({
//         name : "lakshay yadav"
//     })
//     res.send(deletedUser)
// })
 

// app.listen(3000)

//     // mongo document
//     // {
//     //     "name": "lakshay",
//     //     "username": "lakshay22",
//     //     "email": "lakshay8219@gmail.com",
//     //     "_id": "668246610be61b443c7d568c",   // here _id is of 12 bits and starting 3-4 bits of it represents the timestamp means the creation time of this document is mongo and rest all bits represents the system information
//     //     "__v": 0  //
//     // }


