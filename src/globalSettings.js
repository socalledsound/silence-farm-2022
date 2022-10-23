import chroma from 'chroma-js'
// const getRandom = (min, max) => {
//     return min + Math.random() * (max - min)
// }
const colorScaleWaveform = chroma.scale();
const colorScaleGrain = chroma.scale(['00ffff','00ff00']);
const sampleRate = 44100;
const numBuffers = 8;
const numSounds = 24;
const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;
const backgroundColor = '#202020';
const minFrameSize = 50000;
const maxFrameSize = 200000;
// const waveFormColors = Array.from({ length: numSounds}, () => colorScaleWaveform(getRandom(0.1,0.9)));
const startLineWidth = 20;
const startLineLength = 40;
const baseMutationValue = 0.2;
const baseDensityValue = 0.4;


const sitePalette = {
    headerButtonBackground: '#372b2b',
}


const globalSettings = {
    sampleRate,
    numBuffers,
    numSounds,
    canvasWidth,
    canvasHeight,
    backgroundColor,
    colorScaleWaveform,
    colorScaleGrain,
    minFrameSize, 
    maxFrameSize,
    granularDefaults : {
        // atk : 1.25,
        // rel : 1.25,
        // density : 0.1,
        spread : 1.2,
        reverb : 0.5,
        pan : 0.1,
        trans : 1.25,
        grainDensity : 50,
        randomGrains : 50,
    },
    masterDefaultSettings : { 
            volume : 1.0,
            rate: 1.0,
            mutation : 200,
    },
    voiceDefaultSettings : {
        minVol: 0.5,
        maxVol: 0.5,
        minRate: 0.4,
        maxRate: 1.0,
        minAtk: 0.01,
        maxAtk: 0.1,
        minRel: 0.1,
        maxRel: 1.0,
        minDur: 0.8,
        maxDur: 1.5,
        density : 10,
        baseMutationValue: 10,
        numVoices: 2,
        },
    startLineWidth,
    startLineLength,
    baseMutationValue,
    baseDensityValue,
    sitePalette,
}

export default globalSettings