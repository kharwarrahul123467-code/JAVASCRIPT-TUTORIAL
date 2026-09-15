const marvelHeros=["thor","ironman","spiderman"]
const dcHeros=["superman","batman","flash"]

 const allheros = marvelHeros.concat(dcHeros)
console.log(allheros)  
// concat() : in JavaScript is used to join two 
// or more arrays together.
// It creates a new array and does
//  not change the original arrays.

const allnewheros=[...marvelHeros,...dcHeros]
console.log(allnewheros)
// The spread operator ... in JavaScript is used to 
// spread/unpack  elements from an array
//  or properties from an object
const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array=another_array.flat(Infinity)
console.log(real_another_array)  
// .flat() in JavaScript is used to remove nested 
// arrays and make them flatter.
  console.log(Array.isArray("HITESH"))
  console.log(Array.isArray([1,2,3,[4,5,6],7,[6,7,[4,5]]]))
// isArray:- This checks whether "HITESH" is an array
console.log(Array.from("HITESH"))
// Array.from() in JavaScript is used to create an array 
// from an iterable or array-like value
// Why? Because Array.from() takes each character
//  and puts it into an array.
console.log(Array.from({name:"hitesh"}))
// Array.from() can convert iterable or array-like values 
// into an array. A normal object like this is neither, 
// so there are no elements for it to convert.
let score1= 100
let score2= 200
let score3= 300
console.log(Array.of(score1,score2,score3))
// Array.of() is used to create a new array
//  from the values you give it.