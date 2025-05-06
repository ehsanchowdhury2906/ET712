const events =require(`events`)
const util = require('util')

const teams = function(name){
    this.name = name
}

util.inherits(teams, events.EventEmitter)

const Barcelona = new teams('Barcelona')
const Milan = new teams('Milan')

const teamsArray = [Barcelona, Milan]



teamsArray.forEach((t)=>{
    t.on('nation', function(n){
        console.log(`${t.name} is ${n} football club!`)
    })
})

Milan.emit('nation', 'Italian')


const eventEmitter = new events.EventEmitter

eventEmitter.on('test', function(a){
    console.log(a)
})





eventEmitter.on('test', 'EVENTS IN NODEJS')