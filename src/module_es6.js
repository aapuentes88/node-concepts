import {ClockES6 } from './clock/clock-es6.js'

const mClock = new ClockES6();
mClock.on('tictac', function(){
    mClock.theTime()
})