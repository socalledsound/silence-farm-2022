import GranularActionTypes from './granular.actions.types'
import { store } from '../store'
import { addSettings } from '../controls/controls.actions'

export const initSoundFileData = (soundFileData) => ({
    type : GranularActionTypes.INIT_SOUND_FILE_DATA,
    payload : {
        soundFileData
    }
})

export const loaded = () => ({
    type : GranularActionTypes.LOADED
})


export const startTimer = () => {
    return {
        type: GranularActionTypes.START_TIMER,
    }
}


export const addVoice = (voice) => ({
    type : GranularActionTypes.ADD_VOICE,
    payload : {
        voice
    }
})

export const addVoiceAndSettings = (voice) => {
        console.log(voice);
        store.dispatch(addSettings(voice.id))
        return {
            type : GranularActionTypes.ADD_VOICE,
            payload : {
                voice
            }
        }

}

export const updateVoice = (idx, voice) => ({
    type : GranularActionTypes.UPDATE_VOICE,
    payload : {
        idx,
        voice
    }
})


export const addGrain = (idx, grain) => ({
    type : GranularActionTypes.ADD_GRAIN,
    payload : {
        idx, 
        grain
    }
})

