console.log("\n----- Task 1: Using custom modules ----- ")

const utils = require("./utils")
console.log(utils.formatName("alice"))
console.log(utils.generateID(67890))
console.log(utils.validateEmail("alice@wonderland.org"))

 

console.log("\n----- Task 2: Setting up an HTTP server ----- ")

const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'text/html' })

    const stream = fs.createReadStream(__dirname + '/home.html')

    stream.pipe(res)

})

 

server.listen(4000, () => {

    console.log("HTTP Server is running on port 4000")

})

 