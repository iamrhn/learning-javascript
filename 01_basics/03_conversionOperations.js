"use strict"; //Treat all JS codes as newer version of modern JavaScript.

//Conversion Operations

let score = 100;
console.log(typeof (score)); //
console.log (typeof score);

//Change Datatype
let hisAge = "20"; //String datatype
let valueInNumber = Number(hisAge); //We've changed datatype from string to number.
console.log(typeof valueInNumber);
console.log(valueInNumber);

let herAge = 26; //Number datatype
let value_In_Number = String(herAge); //We've changed datatype from Number to String.
console.log(typeof value_In_Number);
console.log(value_In_Number);

let they = "123abc"; //String datatype
console.log(typeof they);
let them = Number(they); 
console.log(typeof them);
console.log(them); /*This will not print the value inside "they" because "they" variable has number and as well as alphabets.
It will change the datatype to number but the value inside will be shown as "NaN". 
NaN - Not a Number(A Special type)*/

let iAm = null;
let you_are = Number(iAm);
console.log(typeof you_are);
console.log(you_are); //If you convert null into number then it will show "0" value.

let home = undefined;
let end = Number(home);
console.log(typeof home);
console.log(end); //If you convert undefined type into number then it will show NaN.

let isPass = false;
let pageUp = Number(isPass);
console.log(typeof isPass);
console.log(typeof pageUp);
console.log(pageUp); //If you convert boolean type into number-if the value is true then value will be shown as 1 and if false then the value will be shown as 0.

let myName = "Rehan";
let fullName = Number(myName);
console.log(typeof fullName);
console.log(fullName); //String will be changed to number type but the value will be shown as "NaN".

let isLoggedin = 1; //Any number will show true value and empty quotes or 0 will show false value.
let checking = Boolean(isLoggedin);
console.log(typeof checking);
console.log(checking);

let _1 = "John";
let _2 = Number(_1);
console.log(typeof (_2));
console.log(_2);







