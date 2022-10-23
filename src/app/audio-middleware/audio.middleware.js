// import CrowdSound from './CrowdSound';
import AudioActionTypes from './audio.actions.types'
import AudioEngine from './AudioEngine'
let silenceFarm
// export const silenceFarm = new AudioEngine();

const audioMiddleWare = store => {
   

    return next => action => {

        switch (action.type){
            
            case AudioActionTypes.INIT_AUDIO :
                console.log('in middleware')
                silenceFarm = new AudioEngine();
                break

            case AudioActionTypes.PLAY_GRAIN :
                // console.log(action);
                silenceFarm.playGrain(action.payload.grain);
                break;

            case AudioActionTypes.TRIG_SOUND : 
                
            silenceFarm.trig(action.payload.idx, action.payload.audioParameters, action.payload.dir);
                break;

            case AudioActionTypes.PLAY_ALL_SOUNDS : 
                
            silenceFarm.trigAll(action.payload.dir);
                break;

            case AudioActionTypes.STOP_PLAYING_SOUND :
                silenceFarm.stop(action.payload.idx);
                break;
            case AudioActionTypes.UPDATE_VOLUME :
                silenceFarm.updateVolume(action.payload.idx, action.payload.val);
                break;  
                
            case AudioActionTypes.UPDATE_PITCH :
                silenceFarm.updatePitch(action.payload.idx, action.payload.val);
                    break;    
                      
            default :
                break;
        }
        next(action);
    }
}
export default audioMiddleWare