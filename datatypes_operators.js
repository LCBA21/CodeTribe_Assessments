// Exercise 1: Declare a number variable and assign an integer to it. 

let myNumber = 42;

// Declare a variable and assign it a floating number.
let myFloat = 3.14;

//Perform addition, subtraction,multiplication,division, modulus and exponentiation with a number variable and another number. 
//addition
let addition = myNumber + myFloat;

// subtraction
let subtraction = myNumber - myFloat;

// multiplication
let multiplication = myNumber * myFloat;

// division
let division = myNumber / myFloat;
// modulus
let modulus = myNumber % 5;

// exponentiation
let exponentiation = myNumber ** 2;

// 3.	Print all your variables. 
console.log("My Number:", myNumber);
console.log("My Float:", myFloat);
console.log("Addition:", addition);
console.log("Subtraction:", subtraction);
console.log("Multiplication:", multiplication);
console.log("Division:", division);
console.log("Modulus:", modulus);
console.log("Exponentiation:", exponentiation);


// 2.2.	Declare two variables x and y with the values 8 and 12 respectively. 
//Use comparison operators to check and print the following
let x = 18;
let y = 12;

// If x is greater than y. 
compare = x > y; // true
console.log("Is x greater than y?", compare);

compare = x < y; // false
console.log("Is x less than y?", compare);

// If x is less than or equal to y
compare = x <= y; // false
console.log("Is x less than or equal to y?", compare);

compare = x == y; // false
console.log("Is x equal to y?", compare);

compare = x != y; // true
console.log("Is x not equal to y?", compare);


//3. Declare the variables a and b with 
// values true and false, determine and print the result of the following logical operations
let a=true;
let b=false;
// a AND b 
console.log("a AND b:", a && b); // false
// a OR b
console.log("a OR b:", a || b); // true
//NOT a 
console.log("NOT a:", !a); // false


//4Declare variable p and assign it a value of 10. 
// Use the following assignment operators to modify the value of p with any number and print the result each time
let p = 10;
console.log("Initial value of p:", p);


let additionAssignment = p += 5; // p = p + 5
console.log("After addition assignment:", additionAssignment);

p -= 3; // p = p - 3
console.log("After subtraction assignment:", p);

p *= 2; // p = p * 2
console.log("After multiplication assignment:", p);

p /= 4; // p = p / 4
console.log("After division assignment:", p);

p %= 3; // p = p % 3
console.log("After modulus assignment:", p);


