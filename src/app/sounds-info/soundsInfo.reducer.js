import  SoundsInfoActionTypes  from './soundsInfo.action.types'

const INITIAL_STATE = {
    audioContext: null,
    soundsInfoArray : null,
    playingSoundsList: null,
    voicesList : ['a voice'],
    activeItems : null,
}

export const soundsInfoReducer = (state = INITIAL_STATE, action) => {
    
    switch(action.type){
    
        case SoundsInfoActionTypes.ADD_AUDIO_CONTEXT :
            return{
                ...state,
                audioContext : action.payload.audioContext,
            }

        case SoundsInfoActionTypes.ADD_NEW_ITEM_TO_SOUNDS_INFO_ARRAY :
            return {
                ...state,
                soundsInfoArray : state.soundsInfoArray.concat([action.payload.item])
            }

        case SoundsInfoActionTypes.ADD_ITEMS_TO_SOUNDS_INFO_ARRAY :
            console.log(action.payload.items);
            const newSoundInfoArray = state.soundsInfoArray != null ? state.soundInfoArray.slice() : [];
            if(newSoundInfoArray.length > 0){
                action.payload.items.map(newInfo => {
                    const itemExists = state.soundInfoArray.some(item => item.id === newInfo.id);
                    if(!itemExists){
                        newSoundInfoArray.push(newInfo)
                    }
                    return null
                })
                
            } else {
                action.payload.items.map( newInfo => {
                    newSoundInfoArray.push(newInfo)
                    return null
                })
            }

            return {
                ...state,
                soundsInfoArray : newSoundInfoArray
            }

            case SoundsInfoActionTypes.ADD_ITEM_TO_PLAYING_SOUNDS_LIST :
                // console.log('add info')
                const newPlayingSoundsList = state.playingSoundsList != null ? [...state.playingSoundsList] : [];
                newPlayingSoundsList.unshift(action.payload.item);
                if(newPlayingSoundsList.length > 15){
                    newPlayingSoundsList.pop()
                }

                return {
                    ...state,
                    playingSoundsList : newPlayingSoundsList
                }

            case SoundsInfoActionTypes.ADD_VOICE_TO_VOICES_LIST  : 

            const newVoicesList = state.voicesList != null ? state.voicesList.slice() : [];
            

            return {
                ...state,
                voicesList : newVoicesList,
            }
            
            default :
            return {
                ...state
            }


    
    }
}