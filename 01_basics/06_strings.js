//A deep dive into strings.

let name = "Rehan";
let userId = 100;
console.log(name + userId);
console.log(name + userId + " value"); //Outdated method.

let fullName = "Rehan Shaikh";
let emailId  = "iamrhn@amazon.com";
let currentChapter = "06_strings.js";
console.log(`My name is ${fullName} and my Email ID is ${emailId}. Currently I'm studying ${currentChapter}`); //This is called String Interpolation and it's a Modern method.

//A different way to declare strings. It gives additional details like length, prototype and primitive value.
let nickName = new String('Rehan');
console.log(nickName);

let number = new Number(100);
console.log(number);

let just = new Boolean(true);
console.log(just);

//How to access key value?

let obj1 = new String('Laptop'); //0-L, 1-a. 2-p, 3-t, 4-o, 5-p

//Some string methods

console.log(obj1[5]); //Output: p
console.log(obj1.length); //Check total length.
console.log(obj1.charAt(2)); //Check character position. Output:p
console.log(obj1.indexOf('L')); //Check index position. Output: 0
console.log(obj1.substring(0, 3)); //Output: Lap-Last number value will not be printed.
console.log(obj1.slice(-5, 1));


