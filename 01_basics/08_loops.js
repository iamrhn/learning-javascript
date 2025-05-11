// Loops - We use loops to perform repeated actions.
//For Loops, For In Loops, For of Loops, While Loops, Do While Loops

/*For Loops - Syntax
for (let i = 0; i < 5; i++) {
    console.log(i); // 0 to 4
  }*/

    for (i = 0; i < 10; i++){
        console.log(i+1)
    }

    //Reverse
    for (number = 100; number > 0; number--){
        console.log(number)
    }
    
let factorial = 1;
let n = 4
factorial = (Number(factorial))
for (i = 1; i <= n; i++) {
    factorial *= i;
}
console.log('Factorial of ' + n + " is " + factorial)

//For In Loops
/*Syntax
for (let key in object) {
    // code to be executed
}*/
//For In loops also works with arrays.

const obj = {
    John: 100,
    Alan: 80,
    Mark: 60,
    Anthony: 40,
    Steven: 20,
}
for(let a in obj){
    console.log('Marks of ' + a + ' are ' + obj[a])
}

//For Of Loops
/*Syntax
for (let value of iterable) {
    // code to be executed
} */

 for (let a of "Rehan"){
     console.log(a)
}

