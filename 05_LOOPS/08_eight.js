// reduce method
const mynums=[1,2,3,4,5]
// const mytotal=mynums.reduce(function(accumulator,currentvalue){
//     console.log(`acc:${accumulator}and currval:${currentvalue}`)
// return accumulator+currentvalue
// },0)

const mytotal = mynums.reduce((acc,curr)=>acc+curr,0)
// reduce() is an array method used to reduce
//  all elements of an array into a single value

console.log(mytotal)



const shoppingcart = [
    
        {itemname:"js course",
         price:299
        },
        {
itemname:"java course",
price:900
        },
        {
            itemname:"ai ml course",
            price:690
        },
        {
            itemname:"video editing course",
            price:790
        }
        ]
        const pricetopay=shoppingcart.reduce((acc,item)=> acc+item.price,0)
        console.log(pricetopay) 