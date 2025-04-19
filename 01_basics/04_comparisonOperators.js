"use strict";
//Comparison Operators - They are used to compare to values.
//Equal to ==
//Not equal to !=
//Equal to & type === This is a strict check. It will check values+datatype.
//Not equal to & type !==

let number = (2 > 5);
let number1 = (2 >= 10);
let number2 = (10 != 20);

console.log([number, number1, number2]);

let number3 = (10 === 15);
let number4 = (10 === 10);
let number5 = (10 !== 10);
let number6 = (10 !== 16);

console.log([number3, number4, number5, number6]);

//Comparing different datatypes

let num = ("10" > 5); //String(Number)-Number
let num2 = (null > 0);
let num3 = (null > 2);
let num4 = (null < 2);
let num5 = (null < 0);
let num6 = (null == 0);
let num7 = (null != 0);
let num8 = (null == 1);


console.log([num, num2, num3, num4, num5, num6, num7, num8]);

let check = (undefined > 1);
let check1 = (undefined == 1);
let check3 = (undefined != 1);
let check4 = (undefined < 0)
let check5 = (undefined == 0);
let check6 = (undefined < 1);
let check7 = (undefined < 2);

console.log([check, check1, check3, check4, check5, check6, check7]);

//Note:- Always try to compare same datatypes and keep things clean.
//Equality check(==, ===) and comparison operators works differently.








