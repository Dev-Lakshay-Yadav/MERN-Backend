const express = require('express')
const app = express();

// Form Handling
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/",function(req,res){
    res.send("Base Route")
})

app.get("/profile",function(){
    res.send("Profile route")
})

app.listen(3000)