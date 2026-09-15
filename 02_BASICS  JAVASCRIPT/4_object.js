//  const tinderUser = new Object()
//  this is  a singleton object
 const tinderUser = {}
 tinderUser.id="123abc"
 tinderUser.name="Shambhavi"
 tinderUser.isLoggedIn = false
//  this is a non singleton object
//  console.log(tinderUser)
const regularuser={
    email:"sam@gmail.com", 
    fullname:{
        userfullname:{
            firstname:"Shambhavi",
            lastname:"Singh"
        }
    }
}  
console.log(regularuser.fullname.userfullname) 
// way to merge object
const obj1 = {1:"a",2:"b "}
const obj2 = {3:"a",4:"b "}
const obj4 = {4:"a",5:"b"}
// const obj3 = Object.assign({},obj1,obj2,obj4)
// console.log(obj3) this method will be used less in future
// Defination:- object assign:-Object.assign{}, it is used to copy 
// properties from one or more objects into another object.
// {}this is the target object
    
const obj3={...obj1,...obj2,...obj4}
console.log(obj3)
// ... this is called spread operator


console.log(tinderUser)
console.log(Object.keys(tinderUser)) 
// Object.keys() is used to get all the property names (keys)
//  of an object and returns them as an array
console.log(Object.values(tinderUser))
// Object.values() is used to get all the values 
// of an object and return them as an array.
console.log(Object.entries(tinderUser))
// Object.entries() is used to get both the 
// keys and values of an object.
console.log(tinderUser.hasOwnProperty('isLoggedIn')) 
// hasOwnProperty() is used to check whether an object directly 
// contains a particular property.

// destructure of object
const course={
    coursename:"js in hindi",
    courseprice:"999",
    courseInstructor:"Shambahvi"
}
const{courseInstructor}=course
console.log(courseInstructor)

// APIS
// {
//     name:"Shambhavi",
//     coursename: "js in hindi",
//     price:"free"
// }
// [
// {},
// {},
// {}

// ]