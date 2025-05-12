//If, Else statements

let user = 'Shaikh';
if(user == 'Rehan') {
    console.log('Welcome, Rehan Shaikh!');
} else{
    console.log("Welcome, user! Please enter your name below to continue.");
}

//If, Else If, Else statements

let age = 18;
if(age > 18){
    console.log('Congratulations! You are eligible to vote! You can continue to the next page to cast your vote! Thank you!');
} else if (age == 18){
    console.log('You will become eiligible to vote next year! Thank you!');
} else{
    console.log('You are not eligible to vote because you are under 18! Thank you!');
}

//Switch statements

const stock = "Trousers";
switch(stock) {
    case "Jeans":
        console.log('Jeans starting from Rs.999/-');
        break;
        case "Socks":
            console.log("Socks starting from Rs.199/-");
            break;
            case "Trousers":
                console.log("Trousers starting from Rs.1199/-")
                break;
}