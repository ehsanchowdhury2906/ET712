/*Homework 1: Control Flow and Loops
Student: ehsan chowdhury*/
console.log(`ehsan chowdhury Homework 1`);

console.log(`---------- Program 1: Conditional Statements ----------`);
// Program 1: Conditional Statements
let data = parseInt(prompt(`Enter a number: `));
if(data>0){
    console.log(`Think positively!`)
    
}
else if(data<0){
        console.log(`Never have negative balance!`)
    }
else if(data==0){
        console.log(`Yin and Yang!`)
    }
else if(isNaN(data)){
        console.log(`Null and void!`)
    }
console.log(`---------- Program 2: For Loops and Nested Conditional Statements ----------`);
// Program 2: For Loops and Nested Conditional Statements
let mul3 = 0;
let mul5 = 0;
let mul7 = 0;
let array =[];
for(let index = 0; index<10; index++){
    array.push(parseInt(prompt(`Enter a number: `)));
    if(array[index]%3==0){
        mul3++;
    }
    if(array[index]%5==0){
        mul5++;
    }
    if(array[index]%7==0){
        mul7++;
    }
}
console.log(`${mul3} numbers are multiples of 3`)
console.log(`${mul5} numbers are multiples of 5`)
console.log(`${mul7} numbers are multiples of 7`)
