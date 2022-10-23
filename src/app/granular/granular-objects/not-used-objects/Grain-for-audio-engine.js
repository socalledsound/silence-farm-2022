this.now = context.currentTime; //update the time value
        
        //create the source
        this.source = context.createBufferSource();
        this.source.playbackRate.value = this.source.playbackRate.value * rate;
        this.source.buffer = buffers[bufnum];
        
        //create the gain for enveloping
        this.gain = context.createGain();
        this.gain.connect(master);
        this.source.connect(this.gain);



        play(){
            const dur = this.attack + this.release;
            // console.log(dur);
            this.source.start(this.now, this.offset + this.randomoffset, dur); //parameters (when,offset,duration)
            // this.source.start();
            
             this.gain.gain.setValueAtTime(0.0, this.now);
             this.gain.gain.linearRampToValueAtTime(this.amp,this.now + this.attack);
             this.gain.gain.linearRampToValueAtTime(0,this.now + (this.attack +  this.release) );
            
            //garbage collection
             this.source.stop(this.now + this.attack + this.release + 0.1); 
            var tms = (this.attack + this.release) * 1000; //calculate the time in miliseconds
            setTimeout(() => {
                this.gain.disconnect();
                // if(yes === 1){
                //     that.panner.disconnect();
                // }
            },tms + 200);
        }