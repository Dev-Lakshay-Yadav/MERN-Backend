const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/testingthedatabase")

const userSchema = mongoose.Schema({
    username:String,
    email:String,
    age:Number,
    posts:[
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "post"
            // upar wali 2 lines ye bta rhi hai ki posts ek array hai jisme values post naam ke model se aaegi or hum direct value pass na karke reference id pass karege isliye humne first line me humne ye bataya hai ki posts me ek moongose ka schema aaega objectId type ka or 2 line me uss objectId ka reference pass kia hai ki ye id kis model se aaegi
        }
    ]
});

module.exports = mongoose.model("user",userSchema)