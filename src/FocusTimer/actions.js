import state from './state.js';
import * as sounds from './sounds.js'
import * as buttons from './buttons-song.js'
import * as timer from './timer.js'

export function toggleRunning() {
    state.isRunning = !state.isRunning;
    if (state.isRunning) {
        timer.countdown();
    }
}

export function reset() {
    state.isRunning = false
    timer.updateDisplay()
}

export function plusFive() {
    timer.addTime(5);
    timer.updateDisplay();

}
export function minusFive() {
    timer.subtractTime(5);
    timer.updateDisplay();
}
export function toggleFlorest() {
    state.isMute = buttons.buttonFlorest.classList.toggle('running')
    if(state.isMute) {
        sounds.florest.play()
        return
    }
    sounds.florest.pause()
}
export function toggleRain() {
    state.isMute = buttons.buttonRain.classList.toggle('running')
    if(state.isMute) {
        sounds.rain.play()
        return
    }
    sounds.rain.pause()
}
export function toggleCoffe() {
    state.isMute = buttons.buttonCoffe.classList.toggle('running')
    if(state.isMute) {
        sounds.coffe.play()
        return
    }
    sounds.coffe.pause()
}
export function toggleFire() {
    state.isMute = buttons.buttonFire.classList.toggle('running')
    if(state.isMute) {
        sounds.fireplace.play()
        return
    }
    sounds.fireplace.pause()
}