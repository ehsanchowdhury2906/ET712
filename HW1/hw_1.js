/*Homework 1: Control Flow and Loops
Student: ehsan chowdhury*/
console.log(`ehsan chowdhury Homework 1`);

/*
Homework 1: control flow and loops

Student’s name: Ehsan Chowdhury

*/

console.log("\n------ Program 1: conditional statement -----");

let input = prompt("Enter something:");

if (input === null) {
    console.log("Null and void!");
} else if (input === "") {
    console.log("Your answer was blank!");
} else {
    let number = Number(input);
    if (!isNaN(number)) {
        if (number > 0) {
            console.log("Think positively!");
        } else if (number < 0) {
            console.log("Never have negative balance!");
        } else {
            console.log("Yin and Yang!");
        }
    } else {
        console.log("Invalid input!");
    }
}

console.log("\n------ Program 2: for loop and nested conditional statement -----");

let numbers = [];
let mul3 = 0, mul5 = 0, mul7 = 0;

for (let i = 0; i < 10; i++) {
    let num = Number(prompt(`Enter number ${i + 1}:`));
    numbers.push(num);
}

for (let num of numbers) {
    if (num % 3 === 0) mul3++;
    if (num % 5 === 0) mul5++;
    if (num % 7 === 0) mul7++;
}

console.log(`${mul3} numbers are multiple of 3`);
console.log(`${mul5} numbers are multiple of 5`);
console.log(`${mul7} numbers are multiple of 7`);
