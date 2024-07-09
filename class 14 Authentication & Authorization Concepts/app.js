
//  Step-1->   cookie ko set karna and read karna

// const cookieParser = require("cookie-parser")
// const express = require("express")
// const app = express()

// app.use(cookieParser())

// app.get("/", function(req,res){
//     // Cookie
//     // cookie set karne k liye res use hoga and read krne k liye req use hoga
//     // agar hum ne ek baar cookie lga di site pr to vo cookie us site ke har ek route pr jaegi
//     // jaise humne yha / route pr cookie lgai but ye cookie /read route pr bhi show hogi
//     res.cookie("name","lakshay")     //lakshay naam ki cookie set ho gyi browser pr
//     res.send("done")
// })

// app.get("/read",(req,res)=>{
//     console.log(req.cookies)     //shows undefined because we doesn't install cookie-parser package and also we have to require it and use it
//     res.send("read route") 
// })

// app.listen(3000)




// Step-2-> bcrypt kaise use karte hai for password encryption and decryption

// const express = require("express")
// const bcrypt = require("bcrypt")
// const app = express()
// // Encryption Password
// app.get("/", function(req,res){
//     bcrypt.genSalt(10, function(err, salt) {
//         // console.log(salt)   //salt is a randon string     $2b$10$ZQIKPtJXIiedwOybYdvY/u
//         bcrypt.hash("polololoo", salt, function(err, hash) {          //pololooo is our password
//             // console.log(hash)   //final encrypted password     $2b$10$X7P19jNQvqBZR6HqCnVnx.Z.ik6ltrwzKhFGQkRgaSAGu.J4BZC72
//         });
//     });
// })
// // Decryption Password
// app.get("/", function(req,res){
//     // res.send("working")
//     bcrypt.compare("polololoo", "$2b$10$X7P19jNQvqBZR6HqCnVnx.Z.ik6ltrwzKhFGQkRgaSAGu.J4BZC72"/*hash hai ye*/, function(err, result) {
//         console.log(result)        // result is true because password matches
//     });
// })


// Step-3-> JWT kya hai and jwt mein data kaise store kare and bahr kasie nikale
const express = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const cookieParser = require("cookie-parser")

const app = express()

app.use(cookieParser())

app.get("/",(req,res)=>{
    let token = jwt.sign({email:"lakshay8219@gmail.com"},"secret")     //this token is passed in next line as value of token
    res.cookie("token",token)       // ("token",token)- in this function first token is name of token and 2 one is the value of token
    // console.log(token)
    res.send("done")
})

// app.get("/read",(req,res)=>{
//     console.log(req.cookies.token)
// })

app.get("/read",(req,res)=>{
    let data = jwt.verify(req.cookies.token,"secret")
    console.log(data)
})




app.listen(3000)