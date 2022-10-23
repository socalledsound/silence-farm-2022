import { importAll } from '../../utils'

export const sounds = importAll(
    require.context('../../assets/room-tones/', false, /\.(mp3)$/)
);

// console.log(soundsModules)

// export const sounds = soundsModules.map( module => module.default);

// console.log(sounds)
