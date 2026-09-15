// singleton:-A Singleton is a design pattern where a
//  class/object is designed so that only one
//  instance of it exists.


// object literals:-object literal in JavaScript is 
// the simplest and most common way to create an object.  
const mySym = Symbol("key1")
const jsUser={name:"HITESH",
    "full name":"HITESH CHAUDHARY",
    [mySym]:"myKey1",//notation to access key
    age:18,
    location:"AMERICA",
    email:"kharwarrahul123467@gmail.com",
    isLoggedIn:false, 
    lastlogindays:["Monday","Saturday"]
}
   console.log(jsUser.email)
   console.log(jsUser["email"])   
   console.log(jsUser["full name"])
   console.log(jsUser[mySym])

        jsUser.emial="kharwarrahul.com "  
        // Object.freeze(jsUser)
        // Object.freeze(), it is used to make an 
        //  object unchangeable after it has been frozen
        jsUser.email="rahul.com"
        console.log(jsUser)     

        jsUser.greeting=function(){
             console.log("hello js user")
        }
        console.log(jsUser.greeting()) 

        jsUser.greetingtwo=function(){
             console.log(`hello js user,${this.name}`)
             }  
             console.log(jsUser.greetingtwo())