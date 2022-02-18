// console.log("HELLO FROM OUR FIRST JS FILE!!!")
// if (1 + 1 === 2) { console.log("math still works") }
// console.log("here we are");
// let random = Math.random();
// if (random < 0.5) {
//     console.log("YOUR NUMBER IS LESS THAN 0,5!")
//     console.log(random);
// }
// if (random >= 0.5) {
//     console.log("YOUR NUMBER IS GREATER THAN 0,5!")
//     console.log(random);
// }

// prompt("enter your age")
// let userInput = prompt("enter your age")
// if (userInput < 18) { console.log("NON") }
// if (userInput >= 18) { console.log("YES") }

// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)

// for (let i = 100; i >= 0; i -= 10) {
//     console.log(i);
// }

// let people = [["Scooby", "Velma", "Daphne", "Shaggy", "Fred"],
// ["Sjkhk", "Vfdga", "Dadfe", "Sdsfgy"],
// ["Sazeby", "Vzema", "Dazeze", "Szezezgy", "Fzzza"]];

// for (let i = 0; i < people.length; i++) {
//     let row = people[i];
//     console.log(`ROW #${i + 1}`)

//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j])
//     }
// }

// let people = [["Scooby", "Velma", "Daphne", "Shaggy", "Fred"],
// // ["Sjkhk", "Vfdga", "Dadfe", "Sdsfgy"],
// // ["Sazeby", "Vzema", "Dazeze", "Szezezgy", "Fzzza"]];

// for (let row of people) {
//     for (let student of row) {
//         console.log(student);
//     }
// }


// let count = 0;
// while (count < 10) {
//     count++;
//     console.log(count)

// }

// const secret = "Vitas";
// let guess = prompt("enter the secret code...");
// while (guess !== "Vitas") {
//     guess = prompt("enter the secret code...");
// }

// let input = prompt("Hey, say something")
// while (true) {
//     input = prompt(input);
//     if (input.toLowerCase() === "stop copying me") break;
// }
// console.log("OK YOU WIN")

let maximum = parseInt(prompt("Enter the maximum number!"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}
const targetNum = Math.floor(Math.random() * maximum) + 1; //any random number//

let guess = parseInt(prompt("Enter the first guess!"));
let attemps = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attemps++;
    if (guess > targetNum) {
        guess = prompt("Too high, enter a new guess:")
    } else {
        guess = prompt("Too low, enter a new guess:")
    }
}
if (guess = "q") {
    console.log("Ok, you quit")
} else {
    console.log(`You got it! It took you ${attemps} guesses`)
}