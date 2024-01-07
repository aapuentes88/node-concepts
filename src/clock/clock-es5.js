import {EventEmitter } from 'events'
import {inherits } from 'util'

export var ClockES5 = (function(){    
     var Clock = function(){
        var self = this
    
        setInterval(function(){
            // console.log('hola')
            self.emit('tictac')
        }, 1000)
    }
    
    inherits(Clock, EventEmitter)
    
    Clock.prototype.theTime = function(){
        var date = new Date(),
        hrs = date.getHours(),
        min = date.getMinutes(),
        sec = date.getSeconds(),
        msg = hrs + ':' + min + ':' + sec 
        console.log(msg)
    }
    return Clock
})()
