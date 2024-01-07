import {EventEmitter } from 'events'

export class ClockES6 extends EventEmitter {
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

// module.exports = ClockES6()