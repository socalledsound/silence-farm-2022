
// import { updateVoice } from '../granular.actions'
import { getWaveformPoints, drawCanvasLinePath } from '../../../waveform-utils'
import { getRandom } from '../../../utils'
import Frame from './Frame'
import Grain from './Grain'
import globalSettings from '../../../globalSettings'
const { colorScaleWaveform, baseDensityValue } = globalSettings
// const { colorScaleWaveform } = globalSettings

// console.log(voiceDefaultSettings);

class Voice {
    constructor(id, bufnum, data, paused){
        this.id = id;
        this.bufnum = bufnum;
        this.data = data;
        this.grains = [];
        this.waveFormColor = colorScaleWaveform(getRandom(0.65,0.8));
        this.paused = paused;
        this.started = false;
        this.waiting = false;
        this.active = true; 
        this.waveFormLifeSpan = 1.0;
        this.alpha = 0;
        this.fadedIn = false
        // console.log(this.waveFormColor)
        // const newColor = this.waveFormColor.alpha(0.1)
        // console.log(newColor)
    }



    // trigNew(wait){
    //     // console.log(wait, 'waiting')
    //     setTimeout( () => {
    //         this.getNewFrame();
    //         this.grainCount++;
    //         this.addGrain(this.grainCount);
    //         this.waiting = false;

    //     }, wait);
       
    // }

    updateAlpha(){
        // console.log('alpha updata', this.alpha)
        if(!this.fadedIn){
            this.alpha += 0.005
        }else{
            if(this.alpha > 0.02){
                this.alpha -= 0.005
            } else {
                this.alpha = 0
            }
        }

        if(this.alpha > 0.9){
            this.fadedIn = true
        }


    }

    update(settings){
        console.log(settings);
        const {attack, release, duration, density } = settings;
        // const {attack, release, duration } = settings;
        // console.log(density);
        const calculatedDensityCutoff = 1 - (baseDensityValue * (1/density));
        // console.log(calculatedDensityCutoff)

        if(Math.random() > 0.9 && settings.id === 0){
            // console.log(calculatedDensityCutoff);
        }
        
        //probably want a range between approx 0.85 or 0.9 and 0.999
        // const densityCutoff = 0.95;
         if(Math.random() > calculatedDensityCutoff){
             if(this.grains.length < 20){
                const newFrame = new Frame(this.data)
                // console.log(newFrame)
                 this.grains.push(new Grain(this.id, this.data, this.grains.length, this.bufnum, newFrame.frame, attack, release, duration))
                //  console.log(this.grains)
             }
            
         }

        // console.log(this.grains);
        this.grains.forEach((grain, i) => {
            // console.log(grain.playing, grain.finished);
        



            if(!grain.playing && !grain.finished){
                // console.log('playing')
                this.fadedIn = true
                this.alpha = 1.0
                grain.play()
            }
            
            grain.update();
            if(grain.finished){
                const newGrains = this.grains.filter(grain => grain.num === i);
                // console.log(newGrains);
               this.grains = newGrains;
            //    console.log(this.grains);
            }


           

           
        })

        //make a thing to trigger new grains
        //include voice settings
    //     if(!this.waiting){
    //         this.waiting = true;
    //         this.trigNew(getRandom(1500, 3000));
    //         // return this
    //    }
       
    }

    updatePaused(pausedVoices){

        // if(Math.random() > 0.995){
        //     this.paused = !this.paused
        // }
        
        this.paused = pausedVoices[this.id]
        // console.log(this.paused)
        
    }


    drawWaveform(ctx, fade){
        if(this.data !== undefined){
                const points = getWaveformPoints(this.data, ctx.canvas.width, ctx.canvas.height/2.0, -ctx.canvas.height/2.0);
                drawCanvasLinePath(this.waveFormColor, points, ctx, 1.0) 
                // fade ? 
                // drawCanvasLinePath(this.waveFormColor, points, ctx, this.alpha) 
                // :
                // drawCanvasLinePath(this.waveFormColor, points, ctx, 1.0) 
        }
    }


    render(ctx){
        this.drawWaveform(ctx, false);
        
        // if(this.grains.length > 0){
        //     // console.log(this.grains);
        // }
        
        this.grains.forEach((grain) => {  
            if(!grain.finished){
                // console.log('rendering')
                grain.frame.render(ctx)
                grain.render(ctx)
            } 
        })

    }

    renderTree(ctx){
        this.grains.forEach((grain) => {
            // console.log('rendering')
            if(!grain.finished){
                // console.log('rendering')
                
                grain.render(ctx)
            } 
        })
    }




}

export default Voice








    // addGrains(num){
    //     const newGrains = Array.from({ length: num}, () => {
    //         return new Grain(this.id, this.data, this.grainCount, this.bufnum, this.frame)
    //     })
    //     this.grains.concat(newGrains)
    // }


    // addGrain(index, dur){

    //     this.grains[index] = new Grain(this.id, this.data, this.grainCount, this.bufnum, this.frame);    

    // }


    // nextGrain = () => {
    //     // console.log('next');
    //     this.getNewFrame();
    //     this.grainCount++;
    //     this.addGrain(this.grainCount);
    //     this.isPlaying = false;
    // }



    // const points = voices.map((voice, i) => {
    //     // <WaveformSlice key={voice.id} data={soundFileData[voice.bufnum]} voice={voice}/>
    //     // const points = getWaveformPoints2(data, canvasWidth, canvasHeight/1.5, 0, voice.frame.start, voice.frame.end);
    //     return getWaveformPoints2(voice.data, ctx.canvas.width, ctx.canvas.height/1.5, 0,voice.frame.start, voice.frame.end);
    
    //     })
    //     this.setState({ numPoints : points.length});
    //     this.drawStaggeredVoices(voices[count].stroke, points, ctx);
