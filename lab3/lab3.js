/**
 * ehsan chowdhury
 * feb 4, loops
 */
console.log("student's full name")
console.log("\n-------- example 1: for loops")
// use a for loop to print from 0 to 4 --> 0 1 2 3 4
for(let n = 0; n<=4 ; n++){
    console.log(`counting = ${n}`)
}

console.log("\n ---- example 2: for loop with conditional statement ---")
// collect the initial value from the user
// print all even numbers between the initial value and 20 
let initialvalue = parseInt(prompt("Enter a number: "))
for(initialvalue; initialvalue<=20 ; initialvalue++){
    if(initialvalue%2==0){
        console.log(initialvalue) // only print even number
    }      
}
   
 console.log("\n ---- example 3: for loop as decrement number------")
 // for loop to print from 9 to 0 in A STEP OF 3 --> 9 6 3 0
 for(let n = 9; n>=0 ; n-=3){
    console.log(n)
 }

 console.log("\n----- example 4: for loop in an array (list) -----")
 // set up a list of animals 
 let animals = ["fish", "turtle", "dog"]
 for(let index=0; index<animals.length; index++){
    console.log(animals[index])
 }
 // set up a list of numbers 
 // count how many negatives are in the list 
 let numbers =[5, -3, 10, -9, 2]
 let counternegative = 0 
for(let index = 0; index<numbers.length ; index ++){
    if(numbers{index}<0){
        counternegative++
    }
}
console.log(`There is ${counternegative} negative numbers/s in list 'numbers'`)
console.log("\n ---- example 5: for loop in a string ----")
let username = "peter pan"
let counter_e = 0
for(let index = 0; index<username.length; index++){
    // console.log(username[index])
    // find the total numbers of letter E in your username 
    if(username[index]=== `e`){

    }
}
console.log(`there is/are ${counter_e} letter e in username`)
console.log("/n ----- exercise for loop")
console.log("\n-------- EXERCISE FOR LOOP ----------");

let num = [-3, 10, 0, 8, -9, 5, -2, 8, 6, -1];
let sumNeg = 0, sumPos = 0;

num.forEach((value) => {

    sumNeg += (value < 0) ? value : 0;

    sumPos += (value >= 0) ? value : 0;
});

console.log(`Sum of all the negative numbers = ${sumNeg}`);
console.log(`Sum of all the positive numbers = ${sumPos}`);
