// Fundamentals of javascript

// Arrays
// var arr = [1,2,3,"hello",true,function(){return r},{},[]]

// forEach loop
// var arr = [1,2,3,4,5]
// arr.forEach(function(val){
//     val = val + 2
//     console.log(val+" hello")
// })

// Map
// var arr = [1,2,3,4]
// var ans = arr.map(function(val){
//     return val*3;
// })
// console.log(arr)
// console.log(ans)

// Filter
// var arr = [1,2,3,4]
// var ans = arr.filter(function(val){
//     // return val>2      //ye condition true false me deal hogi or agar true hui to value ans naam k naye array me chali jaegi
//     if(val>3) {return true}
//     else return false
// })
// console.log(ans)

// find
// var arr = [1,2,2,3,4,5]
// var ans = arr.find(function(val){
//     return(val===2)
// })
// console.log(ans)

// indexOf
// var arr = [1,2,3,4,5]
// var ans = arr.indexOf(2)
// var ans2 = arr.indexOf(12)
// console.log(ans)
// console.log(ans2)


// Objects
// var obj = {
//     name : "Lakshay",
//     age : 20
// }
// // console.log(obj.name)
// // var a = obj['name']   //another way of accessing object values
// // console.log(a)
// obj.age = 22
// console.log(obj)
// Object.freeze(obj) //obj values becomes unchangable(constant values)
// obj.age = 12
// console.log(obj)

// length of a function --> in js functions have length property because there is no concept of function in js instead of it all functions in js are treated as objects
// function abcd(){}
// console.log(abcd.length)
// function defg(a,b,c){}
// console.log(defg.length)

// async js
// async function getData(){
//     var blob = await fetch("https://randomuser.me/api/")
//     var data = await blob.json();
//     // console.log(data)
//     console.log(data.results[0])
// }
// getData()