/*Loops are used to perform repeated actions.

/1. For Loop
/Syntax:
for (initialization; condition; increment) {
  // code to be executed on each iteration
}

Syntax:
for (let i = 0; i < 5; i++) {
  console.log(i);
} */

  for (let i = 0; i < 5; i++){
    console.log(i+1);
  }

  /*Questions:
  Print numbers from 1 to 10*/

for (let number = 0; number < 10; number++){
    console.log(number+1);
}

//Print even numbers from 1 to 20.

for (let evenNumber = 0; evenNumber < 20; evenNumber++){
    if(evenNumber % 2 === 0)
    console.log(evenNumber)
}

//Print odd numbers from 1 to 20.

for (let oddNumber = 1; oddNumber < 20; oddNumber++){
    if(oddNumber % 2 === 1)
        console.log(oddNumber)
}

//Print numbers from 10 to 1 in reverse.

for (let reverseNumber = 10; reverseNumber > 0; reverseNumber--){
    console.log(reverseNumber)
}

//Find the sum of numbers from 1 to 100.

let sum = 0;
for (let num = 1; num <= 100; num++){
    sum += num
}
console.log(sum)

//Find the natural number of n.

let sum1 = 0;
let n = 4;
for (let i = 0; i < n; i++){
    sum1 += i
}
console.log(n + sum1);

/*2. For In Loop
Syntax: for (let key in object) {
    // code to execute
} 
Note:- For In loop can be used to access key, value or key values.    
*/

const obj = {
    Rehan : 100,
    Steven : 80,
    John : 60,
    Mick : 40,
    Nick : 20,
    Lambrard : 0,
}

for (let a in obj){
    console.log("Marks of " + a + " are " + obj[a]); 
}

/*3. For Of Loop
Syntax: for (let value of iterable) {
    // code to execute
} 
Note:- Should be iterable and mostly used for arrays. */

for (let c of "Rehan Shaikh"){
    console.log(c)
}

/*4. While Loop
while (condition) {
  // code block to be executed if the condition is true and the loop will continue to run until condition becomes false
} */


