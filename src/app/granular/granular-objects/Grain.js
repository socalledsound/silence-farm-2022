import store from '../../store'
import { getWaveformPoints2 } from '../../../waveform-utils'
import { getRandom } from '../../../utils' 
import { playGrain } from '../../audio-middleware/audio.actions'
import globalSettings from '../../../globalSettings'
const { canvasWidth, canvasHeight, colorScaleGrain, startLineWidth, startLineLength, granularDefaults, sampleRate } = globalSettings;

class Grain {
    constructor(parentId, data, idx, bufnum, frame, atk, rel, dur){
       this.parentId = parentId;
       this.data = data;
       this.idx = idx;
       this.bufnum = bufnum;
       this.frame = frame;
       this.atk = atk;
       this.rel = rel;
       this.dur = dur;
       this.offset = this.frame.start/sampleRate;
       this.spread = granularDefaults.spread;
       this.finished = false;
       this.lifespan = 100.0;
       this.randomoffset = (Math.random() * this.spread) - (this.spread / 2); //in seconds
       this.totalDur = (this.atk + this.dur + this.rel) * 44100;
       this.step =  Math.ceil( this.data.length / canvasWidth );
      //  console.log(this.frame.end, this.totalDur, this.frame.start, this.step);
       this.numSteps = Math.floor((this.frame.end - (this.totalDur + this.frame.start))/this.step);

       this.granules = [];

       this.points = getWaveformPoints2(this.data, canvasWidth, canvasHeight/2.0, 0, this.frame.start, this.frame.end);

       this.count = 0;
      
       this.scaledStart = this.frame.start/this.step;
       this.scaledEnd = this.frame.end/this.step;

    //    getNewFrame(){
    //     this.frame =  getFrame(this.data.length);
    //     
    //     this.scaledStart = this.frame.start/this.step;
    //     this.scaledEnd = this.frame.end/this.step;
    //     // this.numSteps = (Math.floor(this.scaledEnd - this.scaledStart));
        
    //     this.numSteps = Math.floor((this.frame.end - (this.totalDur + this.frame.start))/this.step);
    //     this.circleCount = 0;
    //     this.lineWidth = startLineWidth;
    //     this.lineLength = startLineLength;
    // }

       this.stroke = colorScaleGrain(getRandom(0.1,0.9));
       this.lineWidth = startLineWidth;
       this.lineLength = startLineLength;
       //maybe add an amplitude to this
       this.lineGrow =  getRandom(1,3);
       this.playing = false;
       this.finished = false;
    }


    play(){
      this.playing = true;
      if(!this.finished){
        // store.dispatch(playGrain({ id : this.parentId, bufnum : this.bufnum, atk : this.atk, rel : this.rel, offset : this.offset, dur : this.dur }));
        store.dispatch(playGrain({ id : this.parentId, bufnum : this.bufnum, offset : this.offset }));
      }
     
    }
    
    update(){
                  // store.dispatch(updateVoice(this.id, this))
                  // this.playing = false;
                  // console.log('wait over');
                  
                  // return this


                this.pos = this.points[this.count];
          // console.log(this.pos);
        // if(!this.isPlaying){
           
        //     this.isPlaying = true;
        // }
        // console.log(this.count, this.numSteps);
        if(this.count < this.numSteps && this.numSteps > 0){
            this.count++;
            this.lineWidth-=2;
            const dir = Math.random() > 0.8 ? 1 : -1
            this.lineLength+= this.lineGrow * dir;


        } else {


          this.finished = true;

        }
    }





    render(ctx){
      if(this.pos !== undefined){
        // console.log('rendering');
          ctx.lineWidth = this.lineWidth
          ctx.strokeStyle = this.stroke
         ctx.beginPath()
         ctx.moveTo(this.pos[0], this.pos[1])
         ctx.lineTo(this.pos[0], this.pos[1] + 10)
         ctx.stroke()
         ctx.lineWidth = 2;
         ctx.strokeStyle = this.stroke;
        ctx.beginPath();
        ctx.moveTo(this.pos[0], this.pos[1]);
        ctx.lineTo(this.pos[0], this.pos[1] + this.lineLength);
        ctx.stroke()
      }

  }

}

export default Grain

