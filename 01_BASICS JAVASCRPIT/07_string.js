const repoCount = 50
const name= "rahul"
// console.log(repoCount+name)
console.log(`Hello my name is ${name} and my repoCount is ${repoCount} is`);  
const gameName = new String("HITESH-HHH")
console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase()) 
console.log(gameName.charAt(4))
console.log(gameName.indexOf('T'))
 
const  newstring = gameName.substring(0,4)
console.log(newstring)

const anotherstring = gameName.slice(-8,5)
console.log(anotherstring)

const newStringOne = "  hitesh    "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://hitesh.com/hitesh%20chaudhary"
console.log(url.replace('%20','-')) 
console.log(url.includes('hitesh'))

console.log(gameName.split('-'))