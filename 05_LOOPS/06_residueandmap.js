const coding=["java","ruby","python","cpp"]

const values=coding.forEach((item)=>{
     console.log(item)
    return item
})
console.log(values)
// foreach loop do not
// return any value

const mynums =[1,2,3,4,5,6,7,8,9,10]
const newnums = mynums.filter((num)=>{
   return num>4
}) 
// filter() is an array method used to select
//  elements that satisfy a condition. It returns a new array. 
console.log(newnums)
//  if we are using scope to print the
// function we must use return keyword

const newnums1=[]
mynums.forEach((num)=>{
    if(num>4){
        newnums1.push(num)

    }
})
console.log(newnums1)