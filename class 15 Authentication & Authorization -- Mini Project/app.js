const express = require("express")
const userModel = require("./models/user")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const app = express()

const path = require("path")
const cookieParser = require("cookie-parser")


app.set("view engine","ejs")       //ejs ko view engine k roop mein set karna
app.use(express.json())          //json body ko parse karne k liye middleware set kia hai
app.use(express.urlencoded({extended:true}))    //urlencoded body ko parse karne k liye middleware set kia hai
app.use(express.static(path.join(__dirname,"public")))   //static file ko serve karne k liye middleware set kia hai
app.use(cookieParser())


app.get("/",(req,res)=>{
    res.render("index")
})

app.post("/create",(req,res)=>{
    let {username,email,password,age} = req.body;
    // Password ko encrypt krke save karna
    bcrypt.genSalt(10, (err,salt)=>{
        bcrypt.hash(password,salt, async (err,hash)=>{
            let createdUser = await userModel.create({    // Ye line hashed password ke sath user ko database mein create karti hai.
                username,
                email,
                password:hash,
                age
            })     
            let token = jwt.sign({email},"shhhhhhhh")
            res.cookie("token",token)
            res.send(createdUser)
        })
    })
})

app.get("/login",(req,res)=>{
    res.render("login")
})

app.post("/login", async (req,res)=>{
    let user = await userModel.findOne({email : req.body.email})
    // console.log(user)     //if email exists in database then the data of particular email will be return in concole but if we enter a new email that doesn't exists in database so console shows null
    if(!user) return res.send("Something went wrong")

    // console.log(req.body.password) //we store password in encrypted form but here we get password without encryption from server so we decrypt the stored password and then compare both passwords if same then lofin otherwise show ("Something went wrong")

    //here we compare the plain text password with hash password user.password  iss liye kia because upar humne findOne kia to vo database mein find krega entered email ko or hume is email ka respective password check karna hai
    bcrypt.compare(req.body.password,user.password,(err,result)=>{             //Ye line entered password ko stored hashed password ke sath compare karti hai.
        // console.log(result)  //result in true or false whether credentials is right or wrong
        if(result)
        {
            // hum user login hote hi ek token or bhej dege sath me jo jake uske browser me store ho jaega
            let token = jwt.sign({email : user.email},"shhhhhhhh")
            res.cookie("token",token)
            res.send("yes you can login")    //login hote hi hmare browser pr ek cookie bhi aa jaegi
        }
        res.send("Something went wrong")
    })   
})

app.get("/logout",(req,res)=>{
    res.cookie("token"," ")    //here we set value of token blank because we want to perform logout and for logging out we will change the value of token so that server can't match the credentials of user and start a new session
    res.redirect("/")         //after performing this redirect token gets blank and session expired and we redirected to the / route
})



app.listen(3000)