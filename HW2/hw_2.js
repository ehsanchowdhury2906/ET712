// ehsan chowdhury homework 2 

console.log("-----------------Exercise 1 -----------------------");

const names = ["Ann", "Peter", "Patricia", "Sam", "Katerina"];

const name_counting = (names) => {
    let counts = names.filter(name => name.length < 5);
    counts.forEach(name => console.log(name));
    return counts.length;
};

console.log(name_counting(names));



console.log("-----------------excersize 2 -----------------------")


console.log("-----------------Exercise 2 -----------------------");

const checkNum = () => {
    while (true) {
        let num = prompt("Please enter a number: ").trim();

        if (!num || isNaN(num)) {
            console.log("Please enter a valid number.");
            continue;
        }

        num = Number(num);

        const isEven = num % 2 === 0;
        console.log(`${num} is ${isEven ? "even" : "odd"} number`);
        return isEven;
    }
};

console.log(checkNum());
