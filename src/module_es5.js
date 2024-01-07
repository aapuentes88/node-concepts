import { ClockES5 } from './clock/clock-es5.js'

const mClock = new ClockES5();
mClock.on('tictac', function () {
    mClock.theTime()
})