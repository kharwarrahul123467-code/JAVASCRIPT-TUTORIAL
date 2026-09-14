const username ={
    username:"Shambhavi",
    price:999,
    welcomeMessage: function (){
console.log(`${this.username},welcome to website`)
console.log(this)
    }
     
}
//  username.welcomeMessage()  
//  user.username = "sam"
// user.welcomeMessage()  
console.log(this)  




//  function chai(){
       
//         console.log(this)
//      }
//       chai()     
     //   this talk about concurrent context 
    
    //   if we print this inside the function indise the nodw=e environment all the output will be print




    const chai = ()=>{
        let username1="shambahvi"
        console.log(this.username)
     } 
     chai()




    //  ()=> basic arrow function
    const addtwo =(num1,num2)=>{
        return num1+num2
    }
    console.log(addtwo(3,4))
    // Implicit return means an arrow function automatically returns a value without using the return keyword.


    const addtwo3 = (num1,num2) => num1+num2
    console.log(addtwo3(3,5))
    // if we have written function in curly braces we must have to use return keyword
    //  if we have written in parenthesis we do not need to use return keyword



 