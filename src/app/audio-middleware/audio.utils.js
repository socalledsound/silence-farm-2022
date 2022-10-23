import { findWaveformRange } from '../../waveform-utils'
// import globalSettings from '../../globalSettings'
// const { colorScaleWaveform } = globalSettings

export const initBuffer = async (context, url) => {
    const response = await fetch(url);
    const ab = await response.arrayBuffer();
    const buffer = await context.decodeAudioData(ab);
    return buffer
}

export const initBufferFromFile = async (context, data) => {
    const buffer = await context.decodeAudioData(data);
    return buffer
}

export const reverseBuffers = (buffers) => {

    const buffersCopy = [...buffers];

    buffersCopy.forEach( buffer => {
        // console.log(buffer);
        Array.prototype.reverse.call( buffer.getChannelData(0) );
        // Array.prototype.reverse.call( buffer.getChannelData(1) );
    })

    return buffersCopy
}

export const getSoundFileData = ( buffers ) => {
    return buffers.map( buffer => buffer.getChannelData(0));

}

export const checkSilence = (data) => {
    if(data){
        const recordMax = findWaveformRange(data).recordMax;
        console.log(recordMax)
        if(recordMax > 0.5){
            return false
        }

        
    }

     return true
}



