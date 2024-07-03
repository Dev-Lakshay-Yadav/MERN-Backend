const express = require('express')
const app = express()


// // basic of routes
// app.get("/",function(req,res){
//     res.send("Base or Slash Route")
// })
// app.get("/profile",function(req,res){
//     res.send("Profile Route")
// })


// // Middlewares - ye middlewares routes se phle chalege and ye dono routes k case me chalege
// app.use(function(req,res,next){
//     console.log("middleware 1 run")
//     next()
// })
// app.use(function(req,res,next){
//     console.log("middleware 2 run")
//     next()
// })

// app.get("/",function(req,res){
//     res.send("Base or Slash Route")
// })
// app.get("/profile",function(req,res){
//     res.send("Profile Route")
// })


// ERROR Handling
app.get("/profile",function(req,res,next){
    return next(new Error ("Something went wrong"))
})

app.use((err,req,res,next)=>{
    console.error(err.stack)
    res.status(500).send('Something broke!')
})






app.listen(3000)