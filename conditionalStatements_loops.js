

//const numbers = [3,7, 2, 5, 10, 6]. Given the array of numbers, find and print the largest number. 
const numbers2 = [3, 7, 2, 5, 10, 6];
let largest = numbers2[0];

for (let i = 1; i < numbers2.length; i++) {
    if (numbers2[i] > largest) {
        largest = numbers2[i];
    }
}
console.log("The largest number is:", largest);


//Exercise 5: : Do While loops 

//Print numbers from 1 to 10. 
let num = 1;

do {
    console.log(num);
    num++;
} while (num <= 10);

//Calculate the sum of all numbers from 1 to 100 and print the result
let sum = 0;
let i = 1;
do {
    sum += i;
    i++;
} while (i <= 100);
console.log("The sum of numbers from 1 to 100 is:", sum);

//Prompt the user to enter a number greater than 10. Keep asking until they enter a valid number
let validNumber = false;
while (!validNumber) {
    let userInput = prompt("Please enter a number greater than 10:");
    let number = parseInt(userInput);
    if (number > 10) {
        validNumber = true;
        console.log("You entered a valid number:", number);
    } else {
        console.log("Invalid input. Please enter a number greater than 10.");
    }
}

//Create a simple guessing game where the user must guess a number between 1 and 10. 
// The game continues until the user guesses the correct number. 
const targetNumber = Math.floor(Math.random() * 10) + 1;
let guessedCorrectly = false;

while (!guessedCorrectly) {
    let userGuess = prompt("Guess a number between 1 and 10:");
    let guess = parseInt(userGuess);
    if (guess === targetNumber) {
        guessedCorrectly = true;
        console.log("Congratulations! You guessed the correct number:", targetNumber);
    } else {
        console.log("Wrong guess. Try again!");
    }
}