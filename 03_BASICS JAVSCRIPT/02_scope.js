
let a = 300
//  this curly braces is known as scope or scope of death 
// program
if(true){
    let a=10
const b=20
console.log("Inner:",a)
}


console.log(a)
// console.log(b)
// console.log(c) 

function one(){
    const username="Shambhavi"
    function two (){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website)
    two()
}
one() 
// if a value is inside a local variable/scope it will not run if you will try to
//  run it outside the local variable/scope

if (true){
    const username="Shambhavi"
    if(username==="Shambhavi"){
        const website =" youtube"
        console.log(username+website)
    }
    // console.log(website)
}
// console.log(username)
// here console.log(website) console.log(username)
// will not run as it is outside the scope 




// +++++++++interesting++++++++++
console.log(addone(6))
function addone(num){
    return num + 1
}
// yaha pe error nhi aa rha hai kyuki humne yaha pe 
//  pe variable ko hold nhi kiya hai  bas declare kiya hai



// console.log(addTwo(5))
const addTwo=function(num){
    return num + 2
}
console.log(addTwo(5)) 
// this show error because humne yaha pe 
// variable ok hold kr diya hai yaha pe hum decelartion se 
// phlr access krne ki khosis kr rhe hain

//  these are the way to represent function