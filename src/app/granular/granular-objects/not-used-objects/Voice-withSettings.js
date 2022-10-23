import store from '../store'
import { playGrain } from '../audio-middleware/audio.actions'
import { updateVoice } from './granular.actions'
import { getFrame, getRandom, getWaveformPoints, getWaveformPoints2, drawCanvasLinePath } from '../../utils'
import globalSettings from '../../globalSettings'
import Grain from './Grain'
const { colorScaleVoice, colorScaleMain, canvasWidth, canvasHeight, startLineWidth, startLineLength } = globalSettings

// console.log(voiceDefaultSettings);

class Voice {
    constructor(id, bufnum, frame, data, settings){
        // this.touchid = id; //the id of the touch event 
        this.id = id;
        this.grains = [];
        this.granules = [];
        this.bufnum = bufnum;
        this.grainCount = 0;
        this.dens = 0.5;
        this.interval = (this.dens * 500) + 70;
        this.frame = frame;
        this.data = data;
        this.settings = settings;
        this.points = getWaveformPoints2(data, canvasWidth, canvasHeight/1.5, 0, frame.start, frame.end);
        this.circleCount = 0;
        this.step =  Math.ceil( data.length / canvasWidth );
        this.scaledStart = this.frame.start/this.step;
        this.scaledEnd = this.frame.end/this.step;
        this.totalDur = (this.settings.attack + this.settings.duration + this.settings.release) * 44100;
        // this.numSteps = (Math.floor(this.scaledEnd - this.scaledStart));
       // this.numSteps = Math.floor(((this.settings.attack + this.settings.duration + this.settings.release) * 44100)/this.step);
        this.numSteps = Math.floor((this.frame.end - (this.totalDur + this.frame.start))/this.step);
        // this.stroke = colorScale(mapVal(Math.random(), 0, 1, 0.4,0.9));
        // this.stroke = '#FF0000';
        this.stroke = colorScaleVoice(getRandom(0.1,0.9));
        this.waveFormColor = colorScaleMain(getRandom(0.75,0.9));
        // console.log(this.stroke);
        this.isPlaying = false;
        this.lineWidth = startLineWidth;
        this.lineLength = startLineLength;
        this.paused = id === 0 ? false : true;
        this.started = false;
        this.waiting = false;
        this.active = true;
        this.addGrain(this.grainCount);
        
    }




    addGrains(num){
        const newGrains = Array.from({ length: num}, () => {
            return new Grain(this.id, this.data, this.grainCount, this.bufnum, this.frame, this.settings)
        })
        this.grains.concat(newGrains)
    }


    addGrain(index){
        // console.log(this.data.length);
        // console.log(this.data.length/44100);
        //console.log(this.settings);
        this.grains[index] = new Grain(this.id, this.data, this.grainCount, this.bufnum, this.frame, this.settings);    

    }

    getRandomFrame(){
        this.frame =  getFrame(this.data.length);
        this.points = getWaveformPoints2(this.data, canvasWidth, canvasHeight/2.0, 0, this.frame.start, this.frame.end);
        this.scaledStart = this.frame.start/this.step;
        this.scaledEnd = this.frame.end/this.step;
        // this.numSteps = (Math.floor(this.scaledEnd - this.scaledStart));
        
        this.numSteps = Math.floor((this.frame.end - (this.totalDur + this.frame.start))/this.step);
        this.circleCount = 0;
        this.lineWidth = startLineWidth;
        this.lineLength = startLineLength;
    }

    // initGranules = (ctx) => {
    //     //const points = getWaveformPoints2(data, canvasWidth, canvasHeight/1.5, 0, voice.frame.start, voice.frame.end)
    // }
    
    // playGrain(grain){
    //     grain.play();
    // }
    nextGrain = () => {
        // console.log('next');
        this.getRandomFrame();
        this.grainCount++;
        this.addGrain(this.grainCount);
        this.isPlaying = false;
    }


    trigNew(wait){
        // console.log(wait, 'waiting')
        setTimeout( () => {
            this.getRandomFrame();
            this.grainCount++;
            this.addGrain(this.grainCount);
            this.waiting = false;
            store.dispatch(updateVoice(this.id, this))
            this.isPlaying = false;
            // console.log('wait over');
            
            // return this
        }, wait);
       
    }

    update(){
        this.circlePos = this.points[this.circleCount];
        // console.log(this.circlePos);
        // console.log(this.grains);
        // console.log(this.grainCount)
        
        if(!this.isPlaying){


            store.dispatch(playGrain(this.grains[this.grainCount]));
            
            this.isPlaying = true;
        }

        // console.log(this.points.length, this.numSteps);
        // console.log(this.numStepsConverted);
        // const offset = this.grains[this.grainCount].offset;
        // console.log(offset * 44100/this.step);
        // console.log(this.frame.start/this.step);

        // console.log(this.scaledEnd - this.scaledStart);
        if(this.circleCount < this.numSteps && this.numSteps > 0){
            this.circleCount++;
            this.lineWidth-=2;
            this.lineLength-=4;
            // console.log(this);
            // return this

        } else {
            // const wait = getRandom(5000, 6000);
            //  setTimeout(() => {
            // //store.dispatch(playGrain(this.grains[this.grainCount]));
            //  console.log('next');
            
            // this.getRandomFrame();
            // this.grainCount++;
            // this.addGrain(this.grainCount);
            // this.isPlaying = false;
            //  }, 5000);
           if(!this.waiting){
                this.waiting = true;
                
                this.trigNew(getRandom(1500, 3000));
                // return this
           }
          

        }
       
    }

    updatePaused(){

        if(Math.random() > 0.99){
            this.paused = !this.paused
            console.log('update paused', this.id)
            store.dispatch(updateVoice(this.id, this))
        }
        
        
    }



    drawLines(ctx){
        if(this.circlePos !== undefined){
            ctx.lineWidth = this.lineWidth
            ctx.strokeStyle = this.stroke
           ctx.beginPath()
           ctx.moveTo(this.circlePos[0], this.circlePos[1])
           ctx.lineTo(this.circlePos[0], this.circlePos[1] + 10)
           ctx.stroke()
           ctx.lineWidth = 2;
           ctx.strokeStyle = this.stroke;
          ctx.beginPath();
          ctx.moveTo(this.circlePos[0], this.circlePos[1]);
          ctx.lineTo(this.circlePos[0], this.circlePos[1] + this.lineLength);
          ctx.stroke()
        }

    }

    drawWaveform(ctx){
        if(this.data !== undefined){
                const points = getWaveformPoints(this.data, ctx.canvas.width, ctx.canvas.height/2.0, 0);
                drawCanvasLinePath(this.waveFormColor, points, ctx);
          

        }
    }


    render(ctx){
        this.drawWaveform(ctx);
        this.drawLines(ctx);

    }




    // const points = voices.map((voice, i) => {
    //     // <WaveformSlice key={voice.id} data={soundFileData[voice.bufnum]} voice={voice}/>
    //     // const points = getWaveformPoints2(data, canvasWidth, canvasHeight/1.5, 0, voice.frame.start, voice.frame.end);
    //     return getWaveformPoints2(voice.data, ctx.canvas.width, ctx.canvas.height/1.5, 0,voice.frame.start, voice.frame.end);
    
    //     })
    //     this.setState({ numPoints : points.length});
    //     this.drawStaggeredVoices(voices[count].stroke, points, ctx);


}

export default Voice

