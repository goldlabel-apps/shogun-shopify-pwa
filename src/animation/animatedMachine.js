
import { gsap } from "gsap"

const duration = 1

const offScreenLeft = (div) => {
    gsap.set(div, {
        x: -560,
        y: 0,
        scale: 0.4,
        rotation: 15,
    })
}

const fadedOut = (div) => {
    gsap.set(div, {
        opacity: 0,
        rotation: -5,
    })
}

const revealTitle = (div, callback) => {
    gsap.to(div, {
        duration: 0.9 * duration,
        opacity: 1,
        scale: 0.8,
        rotation: 0,
        // x: 100,
        // y: 0,
        onComplete: callback,
    })
}



const home = (div, callback) => {
    gsap.to(div, {
        duration: 1.75 * duration,
        opacity: 1,
        scale: 0.5,
        rotation: -20,
        x: 50,
        y: 50,
        onComplete: callback,
    })
}

export const animatedMachine = (animation, div, callback) => {
    
    switch (animation) {    

        case `revealTitle`:
            return revealTitle(div, callback)
        
        case `fadedOut`:
            return fadedOut(div)
        
        case `offScreenLeft`:
            return offScreenLeft(div)

        case `home`:
            return home(div, callback)

        default: {
            return null
        }
    }
}
