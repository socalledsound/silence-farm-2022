import ControlsActionTypes from './controls.actions.types'
import { initSetting, initPausedVoices, randomizeRangedSettings } from '../../utils'
import presets from '../presets/presets'
import globalSettings from '../../globalSettings'

const { masterDefaultSettings } = globalSettings

console.log(presets);



const INITIAL_STATE = {
    controlsOpen: false,
    disabled : false,
    masterSettings : masterDefaultSettings,
    voiceSettings : initSetting(presets.decayDrone),
    pausedVoices : initPausedVoices(presets.decayDrone.numVoices),
    currentControlsSetting: presets.decayDrone,
}

export const controlsReducer = (state= INITIAL_STATE, action) => {
    switch(action.type){
        

        case ControlsActionTypes.DISABLE_CONTROL_TOGGLE :
            return {
                ...state,
                disabled : !state.disabled
            }


        case ControlsActionTypes.TOGGLE_CONTROLS_OPEN :

            return {
                ...state,
                controlsOpen : !state.controlsOpen,
            }
            
        case ControlsActionTypes.UPDATE_PAUSED : 
                // const filteredPausedVoices = state.pausedVoices.filter( voice => voice.id === action.payload.id);
                const newPausedVoices = state.pausedVoices;
                newPausedVoices[action.payload.idx] = !newPausedVoices[action.payload.idx];
             
                return {
                ...state,
                pausedVoices : newPausedVoices
            }

            case ControlsActionTypes.UPDATE_MASTER_AUDIO_SETTINGS :
                return {
                    ...state,
                    masterSettings : action.payload.masterSettings
                    }
                
            case ControlsActionTypes.UPDATE_VOICE_AUDIO_SETTINGS :
                console.log(action.payload.id, action.payload.settings);
                    return {
                        ...state,
                        voiceSettings : state.voiceSettings.filter((setting) => setting.id !== action.payload.id).concat(action.payload.settings)

                    }   
            case ControlsActionTypes.ADD_SETTINGS :
                    console.log(state.currentControlsSetting)
                    return {
                        ...state,
                        voiceSettings : state.voiceSettings.concat([{id: action.payload.id, ...randomizeRangedSettings(state.currentControlsSetting)}])
                    }
            case ControlsActionTypes.UPDATE_CURRENT_CONTROL_SETTING : 
                return {
                    ...state,
                    currentControlsSetting : action.payload.setting,
                    voiceSettings : initSetting(action.payload.preset),
                }        

        default :
        return {
            ...state
        }
    }
}