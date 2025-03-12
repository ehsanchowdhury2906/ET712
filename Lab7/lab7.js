console.log("Ehsan chowdhury")
let desc = document.querySelector(".description")
console.log(desc)
let titlenode = document.querySelector("#title")
console.log(titlenode)
let par = document.querySelectorAll("p")
console.log(par)
let methods = document.querySelectorAll(".methods")
console.log(methods)
console.log("\n---- Example 2 loop through each elements in a node list")
for(let n = 0; n<methods.length; n++){
    console.log(methods[n])
}

console.log("\n---- Example 3: CLICK EVENT ----")
let btn = document.querySelector(".btnclick")
btn.addEventListener("click", function(){
    alert("BTN WAS CLICKED")
})

console.log("\n---- Example 4: CLICK EVENT to change text content ----")
let btnmsg = document.querySelector(".btnmsg")
let msg = document.querySelector(".msg")
btnmsg.addEventListener("click", function(){
    msg.innerHTML = "Good afternoon <b> ehsan </b>"
})

console.log("\n ----- Example 5: Changing shapes mini-app")
let shape = document.querySelector(".shape")
let btncircle = document.querySelector(".btncircle")
let btnsquare = document.querySelector(".btnsquare")
let btnrectangle = document.querySelector(".btnrectangle")

btncircle.addEventListener("click", function(){
    shape.className = "circle"
})
btnsquare.addEventListener("click", function(){
    shape.className = "square"
})
btnrectangle.addEventListener("click", function(){
    shape.className = "rectangle"
})

let event6 = document.querySelector(".event6")
event6.onmouseout = function(){
    alert("MOUSE OUT - Example 6")
}
function openalert(){
    alert("CLICK EVEN - EXAMPLE 7")
}
//emample 8
let divexample8 = document.querySelector(".divexample8")
divexample8.onmouseout = function(){
    let randcolor = Math.floor(Math.random()*255)
    divexample8.computedStyleMap.backgroundColor = `rgb(${randcolor},${randcolor},${randcolor})`
}

let inputex9 = document.querySelector(".inputex9")
let ex9paragraph = document.querySelector(".ex9paragraph")
inputex9.onkeydown = function(){
    ex9paragraph.innerHTML= `a key was pressed`
}

// Exercise

document.querySelector(".ps1").onmouseleave = () => {
    document.querySelector(".ps1").textContent = "EHSAN CHOWDHURY";
};

document.querySelector(".ps2").onclick = function() {
    this.classList.toggle("ps3");
};

document.querySelector(".divs2").onclick = function() {
    this.classList.toggle("divs4");
};

document.querySelector(".divs3").onkeydown = function() {
    this.classList.toggle("divs5");
};
