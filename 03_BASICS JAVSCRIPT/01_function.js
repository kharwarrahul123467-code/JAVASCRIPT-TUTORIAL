


function sayMyName(){
console.log("S")
console.log("H")
console.log("A")
console.log("M")
console.log("B")
console.log("H")
console.log("A")
console.log("V")
console.log("I")
}
sayMyName()
// to print a function we use definedname()

function addTwoNumbers(number1,number2){
    // when we create a defination of the function the 
    // the input we take is known as parameter
     let result=number1+number2
    console.log(number1+number2)
    console.log("Shambhavi")
    return result
    // after result nothing got print
  
        
}
const result=addTwoNumbers(5,8)
// when we call a function the value 
// we pass is known as argument
console.log("Result:",result)

// it is showing undefined because
//  your function prints 15, but it doesn't return 15.

// after adding this line let result=number1+number2
// your function returns the result.




function loginUserMessaage(username="sam"){
    if(username===undefined){
        console.log("please enter a username")
        return
    }
    // === triple equal is used in the if else of javascript 
    // you can use double equal to too
    // undefined and empty string is considered as false 
    // value in javascript
    return `${username} just logged in`
}
//  console.log(loginUserMessaage("hitesh"))
console.log(loginUserMessaage())
// when we donot pass anyvalue to the function will
// it  return undefined


 
function calculateCartPrice(val1, val2,...num1){
    return num1
}
console.log(calculateCartPrice(200,400,4000))
// rest operator ... is used when you want to collect 
//  multiple remaining values into a single array. 
// when we add val1,val2, the value 200 and 400 goes in
// this variable and rest will go in the array

const user={
username:"shambhavi",
price:199
}
function handleObject(anyobject){
console.log(`username is ${anyobject.username} and the price is ${anyobject.price}`)
}
// handleObject(user)
handleObject({
  username:"sam"  ,
  price:399
})

const myNewArray=[200,400,100,600]
function returnsecondvalue(getArray){
    return getArray[3]
}
console.log(returnsecondvalue([200,400,100,600]))