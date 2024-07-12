const express = require("express")
const userModel = require("./models/user")
const postModel = require("./models/post")
const app = express()

app.get("/",(req,res)=>{
    res.send("hey")
})

app.get("/create", async (req,res)=>{
    // res.send("create karege")
    let user = await userModel.create({
        username : "harsh",
        email : "harsh@12gmail.com",
        age : 21
    })
    res.send(user)
})

app.get("/post/create", async (req,res)=>{
    // res.send("create karege")
    // hum yha linking k liye 2 way linking krege - jisme hum phle post ko user ki id dege or fir usi user k posts me post ki id dege taki dono ek dusre se link ho jaye 
    let post = await postModel.create({
        postdata : "hello ji",
        user : "66863183f597fd5f3e750c7e"          //yha pr jo post bna hai usko user ki id di gyi hai
    })
    let user = await userModel.findOne({_id : "66863183f597fd5f3e750c7e"})
    user.posts.push(post._id)     // tha pr jo user ha usko post ki id di gyi hai ye vhi user hai jiski id upar post ko di gyi thi
    await user.save();   //agar hum apne aap data set krte hai or backend kr kudh se changes perform karte hai to hume save() karna padta hai
    res.send({post,user})
})

app.listen(3000)