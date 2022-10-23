import AudioActionTypes from './audio.actions.types';

export const initAudio = () => ({
    type: AudioActionTypes.INIT_AUDIO,
})

export const playGrain = (grain) => ({
    type : AudioActionTypes.PLAY_GRAIN,
    payload : {
        grain
    }
})

export const trigSound = (idx, audioParameters, dir) => ({
    type : AudioActionTypes.TRIG_SOUND,
    payload : {
        idx,
        audioParameters,
        dir
    }
})

export const stopPlayingSound = idx => ({
    type : AudioActionTypes.STOP_PLAYING_SOUND,
    payload : {
        idx
    }
})

export const playAllSounds = dir => ({
    type : AudioActionTypes.PLAY_ALL_SOUNDS,
    payload : {
        dir
    }
})

export const updateVolume = (idx, val) => ({
    type: AudioActionTypes.UPDATE_VOLUME,
    payload: {
        idx, val,
    }
})

export const updatePitch = (idx, val) => ({
    type: AudioActionTypes.UPDATE_PITCH,
    payload: {
        idx, val,
    }
})

// export const playCrowdSound = idx => {
// // console.log(idx);
//     return ({
//         type: PLAY_CROWD_SOUND,
//         idx
//     })

// }

// export const stopCrowdSound = idx => {
//     // console.log(idx);
//         return ({
//             type: STOP_CROWD_SOUND,
//             idx
//         })
    
// }

