// "use strict"; //Treat all JS codes as newer version of modern JavaScript.

// //Conversion

// let score = 100;
// console.log(typeof (score)); //
// console.log (typeof score);

// //Change Datatype
// let hisAge = "20"; //String datatype
// let valueInNumber = Number(hisAge); //We've changed datatype from string to number.
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// let herAge = 26; //Number datatype
// let value_In_Number = String(herAge); //We've changed datatype from Number to String.
// console.log(typeof value_In_Number);
// console.log(value_In_Number);

// let they = "123abc"; //String datatype
// console.log(typeof they);
// let them = Number(they); 
// console.log(typeof them);
// console.log(them); /*This will not print the value inside "they" because "they" variable has number and as well as alphabets.
// It will change the datatype to number but the value inside will be shown as "NaN". 
// NaN - Not a Number(A Special type)*/

// let iAm = null;
// let you_are = Number(iAm);
// console.log(typeof you_are);
// console.log(you_are); //If you convert null into number then it will show "0" value.

// let home = undefined;
// let end = Number(home);
// console.log(typeof home);
// console.log(end); //If you convert undefined type into number then it will show NaN.

// let isPass = false;
// let pageUp = Number(isPass);
// console.log(typeof isPass);
// console.log(typeof pageUp);
// console.log(pageUp); //If you convert boolean type into number-if the value is true then value will be shown as 1 and if false then the value will be shown as 0.

// let myName = "Rehan";
// let fullName = Number(myName);
// console.log(typeof fullName);
// console.log(fullName); //String will be changed to number type but the value will be shown as "NaN".

// let isLoggedin = 1; //Any number will show true value and empty quotes or 0 will show false value.
// let checking = Boolean(isLoggedin);
// console.log(typeof checking);
// console.log(checking);

// let _1 = "John";
// let _2 = Number(_1);
// console.log(typeof (_2));
// console.log(_2);

// //Operations

// let value = 10;
// let negValue = -value;
// console.log(negValue);

// //Basic Math Operations
// console.log(10+10);
// console.log(5-3);
// console.log(50/5);
// console.log(4*10);
// console.log(2**10);
// console.log(5%5);

// let str1 = " I'm Rehan";
// let str2 = " Shaikh"
// let str3 = str1 + str2;
// console.log(str3);

// //This is a messy code and one must not write such codes and should focus on earier to read and simple codes.
// let number1 = "1" + 5 + 2; //If the first number is in string then whole code will be treated as string e.g 152
// console.log(number1);
// let number2 = 2 + 10 + "11"; //If the last number is string then first two numbers will be surplus and last one will be added as a string e.g 1211
// console.log(number2);

//Post Increament/Pre Increament - Pre Decreament/Post Decreament

//Post Increament
let number = 10;
console.log(number++); //The value will remain as it but it will increase it by 1 from the next line. Output 10
console.log(number); //Output 11

//Pre Increament
let number1 = 100;
console.log(++number1); //The value will take immidiate effect and will be increase by 1. Output 101

//Post Decreament
let check = 50;
console.log(check--); //The value will remain as it is but it will decrease by 1 from the next line. Output 50
console.log(check); //The value has decreased by 1. Output 49

//Pre Decreament
let check1 = 1000;
console.log(--check1); //The value will be reduced by 1 immidiately. Output 999
console.log(check1);























