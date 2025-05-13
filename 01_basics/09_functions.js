/*A function in JavaScript is a block of code that performs a specific task and 
can be reused whenever needed. You define it once and run it (call it) whenever you want.*/

function onePlusAvg(x, y){
    console.log('Printed succesffully!')
    return Math.round(1 + (x + y)/2)
    
}

let a = 1;
let b = 2;
let c = 3;

console.log('Average of a and b is', onePlusAvg(a, b)); 
console.log('Average of a and c is', onePlusAvg(a, c)); 
console.log('Average of b and c is', onePlusAvg(b, c)); 


function hello (){
    console.log('Hello Coders!')
}

hello();