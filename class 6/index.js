const express = require("express");
const path = require ('path')
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.set('view engine','ejs');    //view me ejs files hai
app.use(express.static(path.join(__dirname,'public')))   //This line means all static files are placed in public folder
// upper line also denotes that __dirname give the path of current file and 'public' will added in this path and provide exact path information.

app.get("/",function(req,res){
    res.render("index")
});
// app.get("/profile/:lakshay",function(req,res){  //by using : route becomes dynamic so we can write anything in place of lakshay in url and it will always return "chal rha hai" as output
//     res.send("chal rha hai")
// });

// single dynamic route
app.get("/profile/:username",function(req,res){
    const name = req.params.username
    // res.send("Welcome "+name)
    res.send(`welcome, ${name}`)
});

// Multiple dynamic route
app.get("/profile/:username/:age",function(req,res){
    const name = req.params.username
    const age = req.params.age
    // res.send("Welcome "+name)
    res.send(`welcome, ${name} of age ${age}`)
});


app.listen(3000,function(){
    console.log("its running")
})



