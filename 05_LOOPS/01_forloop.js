// syntax
// for (int i=1;i<=n;i++)
for (let index=0;index<=10;index++){
    const element = index
    if(element==5){
        console.log("5 is best number")
    }
    console.log(element)
}

for(let i=1;i<=10;i++){
    console.log(`outer loop${i}`)
    for(let j=1;j<=10;j++){
        // console.log(`inner loop${j}and inner loop${i}`)
        console.log(i+'*'+j+'='+i*j)
     }
   
}

const myarray=["flash","batman","superman"]
console.log(myarray.length)
for(let index = 0; index < myarray.length; index++){
    const element =myarray[index]
    console.log(element)
}

// keywords
//  break and continue


for(index=0;index<=20;index++){
    if(index==5){
        console.log(`detected 5 `)
        break;
    }
    console.log(`value of i is ${index}`)

}



for(index=0;index<=20;index++){
    if(index==5){
        console.log(`detected 5 `)
        continue;
    }
    console.log(`value of i is ${index}`)

}