// for off loop

// ["","",""]
// [{},{},{}]
const arr =[1,2,3,4,5]
for (const num of arr) {
    console.log(num)
    
}
//  const "user defined"
// for(const anything of userdefinfed){
// console.log(userdefined)}

const greeting = "hello world!"
for(const greet of greeting){
    console.log(`Each char is ${greet}`)
}


// maps 
// map() is an array method used to create a 
// new array by applying a function to every element
const  map = new Map()
map.set ('UP',"UTTAR PRADESH")
map.set('USA',"UNITED STATE OF AMERICA")
map.set ('FR',"FRANCE")
console.log(map)
// MAP IS KNOWN FOR UNIQUE
// VALUES SUPPOSE IF I WRITE 
// ('UP',"UTTAR PRADESH")
// IT WILL NOT REPRINT IT 
for(const [key,value] of map){
    console.log(key,':-',value)
}


const myobject ={
    game1: 'nfs',
    game2:  'spiderman',
}
// for(const [key,value]of myobject){
//     console.log(key,':-',value)
// }