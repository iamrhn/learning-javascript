//1. String Concatenation: Write a program that concatenates your first name and last name into a full name and prints it.

let firstName = "Rehan";
let lastName = " Shaikh";
const fullName = firstName + lastName;
console.log(fullName);

//2. Data Types: Write a program that checks the type of a variable holding your age and prints it.

let age = 26;
(console.log)(typeof age);

//3. Comparison Operators: Write a program that checks if two numbers are equal or not, and prints the result as true or false.

let number1 = 100;
let number2 = 90;
console.log(number1 == number2);


//4. Logical Operators: Write a program that checks if a number is both greater than 10 and less than 20 using logical operators.

let isNumber = 12;
console.log(isNumber > 11 && isNumber < 20);

/*5. If-Else Statement: Write a program that checks if a number is even or odd.
Print "Even" if the number is even, and "Odd" if it’s not.*/

let aNumber = 20;
if(aNumber % 2 === 0){
    console.log("Even");
}
else{
    console.log("Odd");
}

/*6. String Length and Comparison:
Write a program that compares the length of two strings and prints which one is longer.
If they’re equal in length, print "Both strings are equal in length".*/

let stringLenght = "JavaScript";
let stringLenght2 = "Python";
if(stringLenght.length > stringLenght2.length){
    console.log(stringLenght + " is longer");
}else if(stringLenght.length < stringLenght2.length){
    console.log(stringLenght2 + " is longer");
} else{
    console.log("Both strings are equal in lenght")
}

/*7. Type Coercion Test
Try this challenge:
Write a program that adds a number and a string, then:
Print the result
Print the type of the result using typeof*/

const test = 3 + " is myName";
console.log(test);
console.log(typeof test);

/*8. Truthy and Falsy Check:
Write a program that checks if a variable is truthy or falsy using an if statement.*/

let isPresent = "0";
if(isPresent){
    console.log("Truthy");
}
else {
    console.log("Falsy");
}

//9. Memory Type Challenge — Reference vs Value
//Try this code:

let obj1 = { name: "Rehan" };
let obj2 = obj1;

obj2.name = "Shaikh";

console.log(obj1);
console.log(obj2);

/*Answer: cz obj1 and obj2 are objects, which means non-primitive datatypes and non-primitive datatpes uses heap memory 
not stack memory and heap meemory changes refrence not copy of value*/

/*10. Loose vs Strict Comparison
Write a program that compares a number and a string using:*/

let mouse = 100;
let keyboard = "100";
console.log(mouse == keyboard);
console.log(mouse === keyboard);

//11. Guess the Output
//What will be the output of this:
let result = "5" - 2;
console.log(result);
console.log(typeof result);

//Answer: i think "5" will be converted into number so 5-2 will be 3 and datatype will be number 

//Challenge 12 – Let’s reverse it:
//let result = "5" + 2;
//console.log(result);
//console.log(typeof result);

//Answer: Output will be 52 cz + will add 2 after 5 and datatype will be string.

/*13. Working with Arrays:
Create an array of numbers: [5, 10, 15, 20]
Use the indexing to modify the array by:
Changing the first value to 30
Removing the last value manually
Print the array at each step.*/

let anArray = [5, 10, 15, 20];
console.log(anArray.charAt5);










