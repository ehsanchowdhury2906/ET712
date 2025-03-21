console.log("ehsan chowdhury")
const myform = document.querySelector("#myform")
const greeting = document.querySelector(".greeting")
const greetuser = document.querySelector(".greetuser")
const btnsubmit = document.querySelector(".btnsubmit")
const errormsg = document.querySelector(".errormsg")

window.addEventListener("load",function(){
    btnsubmit.disabled = true
})

myform.addEventListener("submit", function(event){
    event.preventDefault()
    
    let username = document.querySelector("#username")
    let usernamevalue = username.value
    
    usernamevalue = usernamevalue.trim()
    
    if(usernamevalue===""){
        alert("Please enter  username")
        return;
    }
    
    greetuser.innerHTML = usernamevalue
    greeting.style.display = "block"
    username.value = ""
})

myform.addEventListener("input", function(){
    let password = document.querySelector("#password")
    let passwordvalue = password.value
    passwordvalue = passwordvalue.trim()
    if(passwordvalue.length <8){
        errormsg.style.display = "block"
    }else{
        errormsg.style.display = "none"
        btnsubmit.disabled = false
    }
})
