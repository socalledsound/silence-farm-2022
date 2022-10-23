import SoundsInfoActionTypes from './soundsInfo.action.types'

export const addAudioContext = (audioContext) => ({
    type: SoundsInfoActionTypes.ADD_AUDIO_CONTEXT,
    payload: {
        audioContext
    }
})

export const addNewItemToSoundsInfoArray = (item) => ({
    type: SoundsInfoActionTypes.ADD_NEW_ITEM_TO_SOUNDS_INFO_ARRAY,
    payload: {
        item
    }
})

export const addItemsToSoundsInfoArray = (items) => ({
    type: SoundsInfoActionTypes.ADD_ITEMS_TO_SOUNDS_INFO_ARRAY,
    payload: {
        items
    }
})

export const addItemToPlayingSoundsList = (item) => ({
    type: SoundsInfoActionTypes.ADD_ITEM_TO_PLAYING_SOUNDS_LIST,
    payload : {
        item
    }
})