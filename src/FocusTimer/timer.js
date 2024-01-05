import state from './state.js'
import * as el from './elements.js'
import { reset } from './actions.js'
import * as sound from './sounds.js'

export function countdown() {
    clearTimeout(state.countdownId)
    
    
   if(!state.isRunning) {
    return
   }
   
   let minutes = Number(el.minutes.textContent)
   let seconds = Number(el.seconds.textContent)

   seconds--

   if(seconds < 0) {
    seconds = 59
    minutes--
   }

   if(minutes < 0) {
    sound.alarm.play()
    reset()
    return
   }
   updateDisplay(minutes, seconds)

   state.countdownId = setTimeout(() => countdown(), 1000)
}

export function updateDisplay(minutes, seconds) {
    minutes = minutes ?? state.minutes
    seconds = seconds ?? state.seconds

    el.minutes.textContent = String(minutes).padStart(2, '0')
    el.seconds.textContent = String(seconds).padStart(2, '0')

}
export function addTime(minutesToAdd) {
    if (!state.isRunning) {
        state.minutes += minutesToAdd;
        updateDisplay();
    }
}

export function subtractTime(minutesToSubtract) {
    if (!state.isRunning) {
        if (state.minutes >= minutesToSubtract) {
            state.minutes -= minutesToSubtract;
        } else {
            state.minutes = 0;
        }
        updateDisplay();
    }
}