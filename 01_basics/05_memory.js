/*Memory in JavaScript

In JavaScript, memory is used to store data like variables, objects, and functions. The engine automatically allocates memory when you create data and frees it when it's no longer needed using a process called garbage collection.

There are two main areas:

Stack Memory(For Primitive Datatpes) – for simple values (like numbers, strings) and function calls.

Heap Memory(For Non-Primitive Datatypes) – for complex data (like objects and arrays).

You don’t need to manage memory manually but writing clean code helps avoid memory leaks (unused data staying in memory).*/

//Stack Meomory Example for Primitive Datatypes
//You get a copy of value.

let name = "Rehan";
let fullName = name; //Output: Rehan
console.log(fullName);

fullName = "Shaikh"; //New value assigned
console.log(fullName); //Output: Shaikh
console.log(name); //Output: Rehan(Old value, it will give you copy of old value)

//Heap Memory Example for Non-Primitive Datatypes
//It will change original reference value. 

const userOne = {
    fullName : "Rehan Shaikh",
    userId : 100,
    emailId : "iamrhn@amazon.com"
}

let userTwo = userOne;
console.log(userTwo);

userTwo.userId = 200; //Assigned a new value.
console.log(userTwo.userId); //Output: 200-New value that we've assigned earlier.
console.log(userOne.userId);//Output: 200 cz original referance value was changed in heap memory.
