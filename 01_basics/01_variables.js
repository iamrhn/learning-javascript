//Code readabilty should be high. Your codes should be easily readable, future proof and well optimized.

//Variables are containers to store data. Some words are reserved in JS, which cannot be used as a variable.

var name = "Rehan"; //var can be re-declared & updated(Global scope). Never use var to create variables because it can be re-declared and it causes alot of trouble.
let surname = "Shaikh"; //let cannot be re-declared but can be updated(Block scope). May use camel case to create let variable.
const fullName = "Rehan Shaikh"; //const cannot be re-decalred or updated(Block scope). Preffered capital letters to create a const variable.
//Variables are case sensetive. Rehan and rehan are two different variables.

console.log(name);
console.log(surname);
console.log(fullName);

console.log("name =", name);
console.log("surname =", surname);
console.log("fullName = ", fullName);

console.table([name, surname, fullName]);

//Note:- Only alphabets, numbers, $, and _ can be used in variable names. However, a variable name cannot start with a number.
//Example

let $student = "Mark";
let _student = "John";
let student1 = "Henry";

console.table([$student, _student, student1]);

//let 1student = "Diana"; //Will give an error cz variable name cannot start with a number.

//Updating key value in let.

let accountId = 10;
console.log(accountId);
accountId = 1000;
console.log(accountId);

let hisPower = "Sharingan";
console.log(hisPower);
hisPower = "Mangekyo Sharingon";
console.log(hisPower);

//You can also create a variable without assigning any value and the value can added later.

let noValue;
console.log(noValue);
//It will give undefined value because no value was assigned while creating that variable but you can add the value later.
noValue = "This is the value";
console.log(noValue);



