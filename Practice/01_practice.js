// //Declaring an object.
// const student = {
//     isActive : true,
//     rollNo : 100,
//     emailId : "iamrhn@google.com",
// }

// console.log(student);

// student["isActive"] = false  //Change value in an object.
// console.log(student);
// student['occupation'] = "Developer" //Add a new ray in object.
// console.log(student);

// // let name = "iamrHn";
// // let value = 7114;
// // console.log(name+value);

// // console.log(typeof  student); //object
// // console.log(typeof (name+value)); //string

// //const fullName = 100;
// //fullName = 200;
// //console.log(fullName) //const can't be redeclared or updated.

// const dictionary = {
//     receive : "to get or accept something that somebody sends or gives to you",
//     referendum : "an occasion when all the people of a country can vote on a particular political question",
//     resilient : "strong enough to deal with illness, a shock, change, etc.",

// }

// console.log(dictionary['receive'])

// a = 10;
// b = 90;
// //console.log("a + b =", a + b);
// console.log(++a)
// console.log(a++)
// console.log(--a)
// console.log(a--)
// console.log(a)
// console.log(a--)

// let value1 = 10;
// let value2 = "10";
// console.log('value1 is equal to value2 =', value1 == value2);//Equal to
// console.log('value1 is not equal to value2 =', value1 != value2);//Not equal to
// console.log('value1 is equal to value2 =', value1 === value2);//Equal to &  check
// console.log('value1 is not equal to value2 =', value1 !== value2);//Not equal to & check

// let x = 10;
// let y = 5;
// console.log(('Logical and'), x = 10 && x > y); //Only if cond1 and cond2 true then output will be true otherwise false.
// console.log(('Logical or'), x == 10 || x < y); //Even if one cond is true then output will be true.
// console.log(('Logical not'), !false) //If true then false and if false then output will be true.

// let age = prompt('Please enter your age below:');
// if (age >= 18){
//     alert('You can vote!')
// } else {
//     alert('You cannot vote!')
// }


const stock = "Socks";
switch(stock) {
    case "T-shirt":
        console.log('T-shirts starting from Rs.499/-')
        break;
    case "Jeans":
        console.log('Jeans starting from Rs.999/-')
        break;
    case "Socks":
        console.log('Socks starting from Rs.199/-')
        break;
}

let x = '10';
console.log(typeof x)
x = Number(x);
console.log(typeof x);









