import GranularActionTypes from './granular.actions.types';
import { silenceFarm } from '../audio-middleware/audio.middleware'

const INITIAL_GRANULAR_STATE = {
    soundFileDatas : [],
    voices : [],
    loaded : false,
    timerStarted : false,
    masterSettings : {volume: 1.0, rate: 1.0},
}

export const granularReducer  = (state = INITIAL_GRANULAR_STATE, action) => {
   
    switch(action.type){
       
        case GranularActionTypes.INIT_SOUND_FILE_DATA :
            
            return {
                ...state,
                soundFileDatas : action.payload.soundFileData
            }

        case GranularActionTypes.LOADED : 
            return {
                ...state,
                loaded: true
            }    

        case GranularActionTypes.START_TIMER :
            console.log(silenceFarm);
            silenceFarm.audioContext.resume()
            return {
                ...state,
                timerStarted : true,
            }    

        case GranularActionTypes.ADD_VOICE : 
            return {
                ...state,
                voices : state.voices.concat(action.payload.voice),

            }

   

        case GranularActionTypes.UPDATE_VOICE : 
            const remainingVoices = state.voices.filter( item => item.id !== action.payload.idx);
            //console.log(remainingVoices, action.payload.voice)
            //console.log(action.payload);
            return {
                ...state,
                voices : remainingVoices.concat(action.payload.voice),

            }  
        
         

        case GranularActionTypes.ADD_GRAIN : 
            return {
                ...state,
            }    

        default : 
            return {
                ...state
            }
    }
}

