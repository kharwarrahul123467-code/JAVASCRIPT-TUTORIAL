const useremail= []

if(useremail){
    console.log("got user email")
}
else{
    console.log("dont have user email")
}
// Truthy means a value that JavaScript
//  treats as true when used in a condition.

//  if we use  empty ""
// if will show false value

// if we use empty array []
//  it will show true value 


//  in truthy value we assume it as
// true or false value



// falsy value
// false
// zero
// -zero
// bigint
// 0n
// null
// undefined
// NaN
// ""


// truthy value
// "0"
// "false"/'false'
// " "
// []
// {}
// function(){}

if(useremail.length===0){
    console.log("array is empty")
}
//this is to detect array is empty or not


const emptyObj={}
if (Object.keys(emptyObj).length===0){
    console.log("object is empty")
}
// this is to detect object is empty or not


// null coaleshing operator(??):null undefined:-The nullish coalescing operator
//  (??) is used to provide a default value when the left side is null or undefinfed

let val1 ;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 21 ?? 10
console.log(val1)
//  jo phle likhenge wahi value phle assing hogi

// terniary operator
// condition?true;false

const iceteaprice = 200
iceteaprice>=80 ? console.log("lesst than 80"):console.log("more than 80")



