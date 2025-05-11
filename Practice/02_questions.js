// /*- Primitive Data Types & typeof
// - What are the primitive data types in JavaScript?
// - Write a code snippet that creates a variable for each primitive data type and uses the typeof operator to log its type.*/

// // Answer:

// //There are two types of data types Primitive & Non-Primitive
// //Primitive: String, Number, Boolean, Null, Undefined, Symbol, BigInt
// //Non-Primitive: Object, Arrays, Function

// let isString = "Hello, I'm Rehan Shaikh!";
// let isNumber = 1234567890;
// let isBoolean = true; //true or false
// let isUndefined = undefined;
// let isNull = null;
// let isBigInt = 1234567890n;
// const isObject = {
//     name: 'Rehan Shaikh',
//     emailId: 'rhn7115@google.com',
//     isStudent: true,
// }
// const isArray = [100, 200, 300 , 400, 500];
// const isfunction = function(){};

// console.log(typeof isString);
// console.log(typeof isNumber);
// console.log(typeof isBoolean);
// console.log(typeof isUndefined);
// console.log(typeof isNull);
// console.log(typeof isBigInt);
// console.log(typeof isArray);
// console.log(typeof isfunction);

// /* Null vs. Undefined
// - Explain the differences between null and undefined in JavaScript.
// - What are the outputs of typeof null and typeof undefined? Why might they differ?
// - Write a code snippet that demonstrates both null and undefined in action.*/

// //Answer: 
// // -Undefined is left empty intentionally but there's no value in null.
// // -Typeof undefined will be undefined while typeof null returns an object(which is a quirk in JS).

// let myName = undefined; //Undefined
// let myName1; //Undefined
// myName = "The Ghost of Uchiha";
// let temperature = null;

// console.log(typeof myName);
// console.log(typeof myName1);
// console.log(typeof temperature);

// /*- What is the difference between the == (equality) operator and the === (strict equality) operator in JavaScript?
// - Predict the output of the following code and explain why:
// let a = 5;
// let b = "5";
// console.log(a == b);   // ?
// console.log(a === b);  // ?
// console.log(true == 1);  // ?
// console.log(true === 1); // ? */

// //Answer:
// // '==' only compared the value but '===' checks for data type+value.

// let a = 5; //5-a Number data type.
// let b = "5"; //5-a string data type.
// console.log(a == b); //true
// console.log(a === b); //false
// console.log(true == 1); //true
// console.log(true === 1); //false

// /*Write a code snippet where == and === produce different results for non-number comparisons. Try using values like:
// - null vs undefined
// - Boolean values (true and false)
// - Empty string ("") vs false
// - Any other JavaScript quirk you find interesting
// Here’s an example to get you thinking:
// console.log(null == undefined);  
// console.log(null === undefined); 
// console.log("" == false);  
// console.log("" === false); */

// //Answer:
// let num1 = 10;
// let num2 = "10";
// let num3 = undefined;
// let num4 = null;
// let num5 = true;
// let num6 = false;;

// console.log(num1 == num2); 
// console.log(num1 === num2); 
// console.log(num1 == num5); 
// console.log(num1 === num6); 
// console.log(num4 == num6); 
// console.log(num4 == undefined);

// /*Write a function that checks if a number is positive, negative, or zero using only variables, conditional statements, 
// and operators (no return). Instead of returning a value, use console.log() to print the result.*/

// // //Answer 1
// // const sum = 0;
// // if(sum > 0){
// //     console.log('sum is a positive number')
// // } else if(sum < 0){
// //     console.log('sum is a negative number')
// // }else {
// //     console.log('sum is zero')
// // }

// // //Answer2
// // const sum = prompt('Please enter the number!')
// // if(sum > 0){
// //     alert('sum is a psotive number')
// // }else if (sum < 0){
// //     alert('sum is a negative number')
// // }else {
// //     alert('sum is zero')
// // }


/*Write a JavaScript function getDayName(dayNumber) that takes a number 
from 1 to 7 and returns the name of the day of the week. Use a switch statement to implement the logic.*/

let dayNumber = 10;
switch(dayNumber){
    case 1:
        console.log('Monday');
        break;
        case 2:
            console.log('Tuesday');
            break;
            case 3:
                console.log('Wednesday');
                break;
                case 4:
                    console.log('Thursday');
                    break;
                case 5:
                    console.log('Friday');
                    break;
                    case 6:
                        console.log('Weekend');
                        break;
                        case 7:
                            console.log('Weekend')
                            break;
                           default:
                                console.log('Invalid day')
                }


const getSeason = 12;
switch(getSeason){
    case 1:
    case 2:
    case 3:
    console.log('Winter');
    break;
    case 4:
    case 5:
    case 6:
    console.log('Spring');
    break;
    case 7:
    case 8:
    case 9:
    console.log('Summer');
    break;
    case 10:
    case 11:
    case 12:
    console.log('Fall');
    break;
    default:
    console.log('Invalid season')
}                

/*Write a function getGrade(score) that takes a score 
(a number from 0 to 100) and returns a letter grade based on the following conditions:*/

let getGrade = 49;
getGrade = Number(getGrade);
if(getGrade >= 90 && getGrade <= 100){
    console.log('Grade A')}
    else if(getGrade >= 80 && getGrade <= 89){
    console.log('Grade B')}
else if(getGrade >= 70 && getGrade <= 79){
    console.log('Grade C')}
else if(getGrade >= 60 && getGrade <= 69){
    console.log('Grade D')}
else if(getGrade >= 50 && getGrade <= 59){
    console.log('Grade F')}
    else if(getGrade < 50){
        console.log('Failed')
    }
else {
    console.log('Invalid grade')
}

//Write a for loop
for (let i = 0; i < 500; i++){
    console.log(i+1)
}
