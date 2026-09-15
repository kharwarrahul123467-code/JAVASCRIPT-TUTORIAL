
const  myArr=[0,1,2,3,4,5,true,"rahul"]
const myHeros= ["SHAKTIMAN","SOYAMATTO"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr[8]) 


myArr.push("Shambhavi")
myArr.push(6)
myArr.push(9)

console.log(myArr)

// .push:- it is udes to add one or more element
//  to the end of the array
myArr.pop()
console.log(myArr)
// .pop:- it is used to remove last element 
// of the array
myArr.unshift(9)
console.log(myArr)
//unshift() adds one or more elements 
// to the beginning of an array.
myArr.shift()
console.log(myArr)
// shift() removes the first element 
// from an array.

const newArr = myArr.join()
console.log(myArr);
console.log(newArr)
// .join() converts an array into a string.

console.log("A",myArr)
const myn1=myArr.slice(1,3)
console.log(myn1)
// slice() is used to take a portion of an array
//  or string without changing the original
console.log("B",myArr)
const myn2 = myArr.splice(1,3)
console.log(myn2)
// splice() is used to add, remove, or 
// replace elements in an array.