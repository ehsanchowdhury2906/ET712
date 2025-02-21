console.log("ehsan chowdhury")
console.log("\n -- example 1: function in a variable ")
const sum = function(num1,num2){
    return num1+num2
}
// calling functions 
console.log(sum(5,8))

console.log("\n -- example 2 : unfction in a variable ")
// function to return the sqaure root of a number
let sqaurenumber = function(n){
    return Math.pow(n,2)
}
// call function
console.log(sqaurenumber(5))

console.log("\n -- example 3 : arrow function")
let greet = (username) => {
    console.log(`Welcome to JS ${username}`)

}
// call fucntion 
greet ("Peter Pan")

console.log("\n -- example 4 : function with default parameter")
function cubenumber(n){
    return Math.pow(n,3)
}
// call function 
console.log(`2^3 = ${cubenumber(2)}`)
console.log(`empty^3 = ${cubenumber()}`)

console.log("/n -- example spread syntax -- ")
nums = [-2, 5, 9, 3, -8]
let maxnum = Math.max(...nums)
console.log(maxnum)

console.log ("\n -- example 6 : objects -- ")
// create an object
const car ={
    // properties
    type: "fiat",
    model: 500,
    color:"white",
    price: 23000,

    // methods
    description:function(){
        return `${this.color} ${this.type} cost ${this.price}`  
    }
}
// calling the object property 'model'
console.log(car.model)
// calling the object method 'description'
console.log(car.description())

console.log("\n -- example 7 : objects -- ")
const hen = {
    // properties
    name: "Helen",
    year: 2025,
    eggcount : 0,

    // method
    layanegg: function(){
        this.eggcount++
        return "EGG"
    }
}
//calling the property 'eggcount'
console.log(`${hen.name} has ${hen.eggcount} eggs`)
//calling the method
console.log(hen.layanegg())
console.log(hen.layanegg())
console.log(`${hen.name} has ${hen.eggcount} eggs`)
console.log(hen.layanegg())
console.log(`${hen.name} has ${hen.eggcount} eggs`)

console.log("\n -- example 8 : try-except")
function yell(msg){
    try{
        console.log(msg.toUppercase().repeat(3))
    }
    catch{
        console.log("ERROR!")
    }
    finally{
        console.log("End of function 'yell")
    }
}
// calling the function 
yell("help")
yell(8)
console.log("end of example 8")

console.log("\n -- exercise -- ")

const myCalculator = {
  
    message: "Area and Volume Calculator",
    side: 2,

    
    areaSquare() {
        return `${this.side ** 2}`;
    },
    areaVolume() {
        return `${this.side ** 3}`;
    }
};

console.log(`${myCalculator.message} with side length ${myCalculator.side}`);
console.log(`Area of the square: ${myCalculator.areaSquare()}`);
console.log(`Volume of the cube: ${myCalculator.areaVolume()}`);

console.log("\n -- exercise 2 -- ")


function safeDivide(a, b) {
    try {
        if (typeof a !== "number" || typeof b !== "number") throw "Invalid input";
        console.log(a / b);
    } catch {
        console.log("Error: Cannot divide these values.");
    } finally {
        console.log("Finished division process.");
    }
}

safeDivide(8, 4);
safeDivide("Word", 4);

