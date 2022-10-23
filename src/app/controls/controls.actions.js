import ControlsActionTypes from './controls.actions.types'

export const toggleControlsOpen = () => ({
    type : ControlsActionTypes.TOGGLE_CONTROLS_OPEN,
})

export const updatePaused = (idx) => ({
    type : ControlsActionTypes.UPDATE_PAUSED,
    payload : {
        idx
    }
})

export const updateMasterAudioSettings = (masterSettings) => ({
    type: ControlsActionTypes.UPDATE_MASTER_AUDIO_SETTINGS,
    payload : {
        masterSettings,
    }
})

export const updateVoiceAudioSettings = (id, settings) => ({
    type: ControlsActionTypes.UPDATE_VOICE_AUDIO_SETTINGS,
    payload : {
        id,
        settings,
    }
})

export const addSettings = (id) => ({
    type : ControlsActionTypes.ADD_SETTINGS,
    payload : {
        id
    }
})

export const updateCurrentControlSetting = ( preset ) => ({
    type: ControlsActionTypes.UPDATE_CURRENT_CONTROL_SETTING,
    payload: {
        preset
    }
}) 