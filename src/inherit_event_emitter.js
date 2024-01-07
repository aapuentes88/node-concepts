import { EventEmitter } from 'events'
// import {inherits } from 'util'

// var Clock = function(){
//     var self = this

//     setInterval(function(){
//         console.log('hola')
//     }, 1000)
// }

// inherits(Clock, EventEmitter)

// Clock.prototype.theTime = function(){
//     var date = new Date()
//     hrs = date.getHours()
//     min = date.getMinutes()
//     sec = date.getSeconds()
//     msg = hrs + ':' + min + ':' + sec 
//     console.log(msg)
// }

class Clock extends EventEmitter {
    constructor() {
        super();
        setInterval(() => {
            // this.theTime();
            this.emit('tictac')
        }, 1000);
    }

    theTime() {
        const date = new Date();
        const hrs = date.getHours();
        const min = date.getMinutes();
        const sec = date.getSeconds();
        const msg = hrs + ':' + min + ':' + sec;
        console.log(msg);
    }
}

const mClock = new Clock();
mClock.on('tictac', function(){
    mClock.theTime()
})