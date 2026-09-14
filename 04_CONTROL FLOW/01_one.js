//  if 
const score = 200
if(score>100){
    let power = "fly"
    console.log(`user power: ${power}`)
} 
//   console.log(`user power: ${power}`)
// if we use var instead of const let the varibale will be accessable from anywhere 
// but if we used const and let it will show error because of scope of variable

//    Block scope means a variable is accessible
//  only inside the { } block where it is declared.






// shorrthand notation
const balance = 1000
if(balance<500){
//     console.log("test")
//     console.log("test2")
console.log("less than 500")
 }
 else if (balance<750){
    console.log("less than 750")
 }
 else if (balance<900){
   
    console.log("less than 750")
 }
 else{
    console.log("less than 1200")
 }





 const userLoggedin = true
 const debitcard = true 
 const loggedinfromgoogle = false
 const loggedinfromgmail = true
 if(userLoggedin&&debitcard){
    console.log("allow to buy user")
 }
 if(loggedinfromgmail|| loggedinfromgmail){
    console.log("user logged in")
 }
