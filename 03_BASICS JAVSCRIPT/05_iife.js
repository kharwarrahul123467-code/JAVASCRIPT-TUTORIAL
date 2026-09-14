// Immediately invoked function expression 
// It is a function that is created and executed immediately,
//  without needing to call it separately.
(function chai(){
    // named iife
    console.log(`DB CONNECTED`)
})();
// global scope ke pollution se problem hoti hai  toh us global scope 
// ke  variable ke pollution ko hatane ke 
// liye iife kaa use krte   hai
( (name) => {
    console.log(`DB CONNECTED ${name}`)
})("shambhavi") 
//  we need semicolon to write to iife