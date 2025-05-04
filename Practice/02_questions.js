// //Practice Questions

// // -Declare a variable name and assign your name to it as a string. Then print it.
// //let name = "Rehan Shaikh";
// //console.log(name);

// // -Create a variable age and assign your age to it as a number.
// const age = 26;
// console.log(age);

// // -What data type is true? Declare a variable isStudent and assign it that value.
// let isStudent = true;
// console.log(typeof isStudent);

// // -Change the value of a variable x from a number to a string. What happens?
// let x = 100;
// x = String(x);
// console.log(x);
// console.log(typeof x);

// // -Declare a constant PI with value 3.14. Try changing it. What error do you get?
// const PI = 3.14;
// //PI = 5;
// //console.log(PI);  //CONST can't be redecalred or updated.

// /* -Create two variables a = 10 and b = 3. Calculate and print:
// a + b
// a - b
// a * b
// a / b
// a % b*
// a ** b*/
// let a = 10;
// let b =3;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**b);

// /* -Write code to convert temperature from Celsius to Fahrenheit.
// Formula: F = C * 9/5 + 32*/
// let puneTempCel =  24;
// let tempratureConverter = puneTempCel * 9/5
// let puneTempFah  = tempratureConverter + 32;
// console.log(puneTempFah);

// //-Write a function greet(name) that prints "Hello, [name]!".
// let greet = "Rehan";
// if(greet == "Rehan") {
//     console.log("Hello, Rehan!");
// } 

// // -Write a function add(x, y) that returns the sum of two numbers.
// let add = [10, 10]
// if (add === 10, 10){
//     console.log(10 + 10);
// } //FAILED- I NEED TO LEARN TO AGAIN.

// //  -Write a function isPositive(n) that returns true if n is greater than 0, otherwise false.
// let n =  1;
// function isPositive(n > 1) {
//     console.log("true")
// } //FAILED- I NEED TO LEARN TO AGAIN.

// -Use logical operators to find wether the age of a person lies between 10 and 20?

// let age = 12;
// console.log(age >= 10 && age <= 20);

// let age = prompt('Whats your age?');
// if(age >= 10 && age <= 20){
//     alert('Your age is between 10 and 20!');
// } else{
//     alert('Your age is not between 10 and 20!');
// }

// -Demonstrate the use case of switch-case statment.

const fruit = "Banana";
switch(fruit){
    case 'Mango':
        console.log("1KG Mango costs around Rs.200/-")
        break;
        case "Grapes":
            console.log('1Kg of Grapes costs around Rs.100/-')
            break;
            default:
            console.log('This item is not available at the moment!')
} 

//  -Write a Javascript program to find wether a number is divisible by 2 and 3.
let num = 12
if(num % 2 == 0 && num % 3 == 0){
    console.log("Your number is divisible by 2");
} else{
    console.log("Your number is not divisble by 2");
}



