/*
console.log("\n----- example 1: console messaging ----- ")
console.warn("This is a warning message!")
console.error("ERROR!")

console.log("\n----- example 2: global object of JS ----- ")
setTimeout(()=>{
    console.log('Welcome to nodejs')
}, 3000)

let count = 0

const timer = setInterval(()=>{
    count +=2 
    console.log(`counting = ${count} times`)
    if (count == 10){
        clearInterval(timer)
    }
}, 2000)
*/
console.log("\n----- example 3: modules ----- ")
const name = require("./mod")
console.log(name.helper("peter"))
console.log(name.id(12345))
console.log(name.email("peter@neverland.edu"))

console.log("\n----- example 4: creating a server  ----- ")
//import the http module
const http = require("http")
const fs = require("fs") // file stream module

//create server
const server = http.createServer((request, response)=>{
    //send the request
    response.writeHead(200,{'content-type':'text/html'})
    const readstream = fs.createReadStream(__dirname + '/index.html')

    //piping
    readstream.pipe(response)
})

// server listening to port 3000
server.listen((3000), function(){
    console.log("Server is running!")
})