import { getRandom } from '../../utils';
import globalSettings from '../../globalSettings';
const { granularDefaults, sampleRate } = globalSettings;

class Grain {
    constructor(parentId, parentData, num, bufnum, frame, settings){
       this.parentId = parentId;
       this.parentData = parentData;
        this.num = num;
       this.bufnum = bufnum;
    //    this.offset = frame.start/parentData.length;
       this.offset = frame.start/sampleRate;
    //    this.dur = (frame.end-frame.start)/parentData.length;
      //  this.dur = ((frame.end-frame.start)/sampleRate) - 0.1;
      this.amp = settings.volume;
      console.log(this.amp, this.parentId);
      this.rate = settings.rate + getRandom(0.01, 0.05);
      this.dur = settings.duration;
      this.atk = settings.attack;
      this.rel = settings.release;
      //  this.atk = granularDefaults.atk;
      //  this.rel = granularDefaults.rel > 0 ? granularDefaults.rel : 0.1;
      //  this.amp = 0.5;
       this.spread = granularDefaults.spread;
      //  this.rate = getRandom(0.2,2.0);
       this.alive = true;
      //  this.timeBorn = tickTime;
       this.lifespan = 100.0;
       this.randomoffset = (Math.random() * this.spread) - (this.spread / 2); //in seconds
       
    //    offset, atk, rel, spread, rate, timeBorn
    //    currentMouseX, 
    //    currentMouseY, 
    //    this.attack, 
    //    this.release, 
    //    this.spread, 
    //    rate


    //    this.amp = this.positiony / CANVASHEIGHT;
    //    this.amp = map(this.amp,0.0,1.0,1.0,0.0) * 0.7;

        //update the position and calcuate the offset 
        // this.positionx = positionx;
        // this.positiony = positiony;

        // this.offset = this.positionx * (buffers[this.bufnum].duration / CANVASWIDTH); //pixels to seconds
        
        //update and calculate the amplitude

        
        //playback rate
       


        //parameters
        // this.attack = attack * 0.4;
        // this.release = release * 1.5;

        // if(this.release < 0){
        //     this.release = 0.1; // 0 - release causes mute for some reason
        // }
      
    
       
        ///envelope



    }




}

export default Grain
