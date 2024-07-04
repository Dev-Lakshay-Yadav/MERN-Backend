const fs = require('fs')   //fs is file system module in node

// // writeFile method create file with data and pass error function(callback type error function)
// fs.writeFile("hey.txt","hey hello kaise ho",function(err){
//     if(err) console.error(err)
//     else console.log("done")
// })

// // appendFile method add new data in selected file
// fs.appendFile("hey.txt"," mai to aacha hu",function(err){
//     if(err) console.error(err)
//     else console.log("done")
// })

// // rename method rename the pre-existing file
// fs.rename("hey.txt","hello.txt",function(err){
//     if(err) console.error(err)
//     else console.log("changed")
// })

// // copyFile method copy the pre-existing file into an existing file or a newly created file
// fs.copyFile("hello.txt","./demo/copy.txt",function (err) {
//     if(err) console.error(err)
//    // if(err) console.error(err.message)  //shows particular message for error
//     else console.log("successfully copied")
// })

// // unlink method used to delete files
// fs.unlink("copy.txt",function(err){
//     if(err) console.error(err.message)
//     else console.log("removed")
// })

// // rmdir() method removes folder(not files) but bydefault it only removes blank folders  
// // Also we can use rm() instead of rmdir()
// fs.rmdir("./hii", function (err) {              // here ./ means search in same folder or location
//     if (err) console.error(err.message)
//     else console.log("removed")
// })
// // in this case rmdir() can also delete un-Blank folders
// fs.rmdir("./hii",{recursive : true},function (err) {    
//     if (err) console.error(err.message)
//     else console.log("removed")
// })

// mkdirSync - used to make folder not file
// fs.mkdirSync("demo",function(err){
//     if(err) console.error(err)
//     else console.log("folder created")
// })

// // readdirSync() method is used to read folders
// const asd = fs.readdirSync("./demo",function(err){
//     if(err) console.error(err)
//     else console.log("reading")
// })
// console.log(asd)

// // readFile() method is used to read files
// const asd = fs.readFile("./copy.txt",function(err,data){
//     if(err){
//         console.error(err)
//     }
//     else {
//         console.log("reading "+data)
//     }
// })

// // http and https
// const http = require('http')
// const server = http.createServer(function(req,res){
//     res.end("Hello world")
// })
// server.listen(3000)