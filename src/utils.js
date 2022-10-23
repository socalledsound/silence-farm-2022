import chroma from 'chroma-js'
import globalSettings from './globalSettings';


export const importAll = require =>
require.keys().reduce((acc, next, i) => {
  acc[i] = require(next);
   //console.log(acc)
  return acc;
}, []);


export const validateSubmission = (description, location) => {

    let errors = {};

    //description
    if(!description){
        errors.description = 'description required'
    } else if(description.length < 6){
        errors.description = 'please enter a longer description';
    }
    //location
    if(!location){
        errors.location = 'location required'
    } else if(location.length < 3){
        errors.location = 'please enter a more complete location';
    }

    return errors

}

export const validateLogin = (values) => {

    let errors = {};

    //email
    if(!values.email){
        errors.email = 'email required'
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email = 'invalid email address'
    }
    //password
    if(!values.password){
        errors.password = 'password required'
    } else if(values.password.length < 6){
        errors.password = 'password must be at least six characters';
    }

    return errors

}

export const resizeCanvasToDisplaySize = (canvas) => {
    
    const { width, height } = canvas.getBoundingClientRect()

    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width
      canvas.height = height
      return true // here you can return some usefull information like delta width and delta height instead of just true
      // this information can be used in the next redraw...
    }

    return false
  }

export const getGreyScale = (val) => {
    return chroma.scale(val);
  }


export const getRandom = (min, max) => {
    return min + Math.random() * (max - min)
}

export const getRandomInt = (min, max) => {
    return Math.floor(min + Math.random() * (max - min))
}

export const mapVal = (value, x1, y1, x2, y2) => (value - x1) * (y2 - x2) / (y1 - x1) + x2;


export const getFrame = (dataSize) => {
    const { minFrameSize, maxFrameSize } = globalSettings;
    // console.log(minFrameSize, maxFrameSize);
    const frameSize = getRandomInt(minFrameSize, maxFrameSize);
    // console.log(frameSize);
    const startVal = getRandomInt(100000, dataSize - frameSize);
    // console.log(startVal);
    const endVal = startVal + frameSize;
    
    return ({
        start : startVal, 
        end : endVal,
    })
}



export const createLinePath = (arr) => {
    return `M${arr.map((item, i) => [item[0], item[1]]).join('L')}`;
    
}

export const randomizeSettings = (settings) => {
    const newSettings = {
        volume: settings.volume * getRandom(0.5,0.6),
        rate: settings.rate * getRandom(0.9,1.1),
        attack: settings.attack + getRandom(0.01,0.3),
        release: settings.release + getRandom(0.1, 0.3),
        duration: settings.duration + getRandom(0.1, 1.0),
        density : settings.density,
    }
    return newSettings
}

export const randomizeRangedSettings = (setting) => {
    const newSettings = {
        volume: getRandom(setting.minVol,setting.maxVol),
        rate: getRandom(setting.minRate, setting.maxRate),
        attack:  getRandom(setting.minAtk, setting.maxAtk),
        release:  getRandom(setting.minRel, setting.maxRel),
        duration:  getRandom(setting.minDur, setting.maxDur),
        density : setting.density,
    }
    return newSettings
}

export const initSetting = (setting) => Array.from({ length: setting.numVoices}, (el, i) => ({
    id: i,
    ...randomizeRangedSettings(setting),
    
}));

export const initPausedVoices = (numVoices) => Array.from({ length : numVoices}, (e, i) => false );

/*!
* Get the contrasting color for any hex color
* (c) 2019 Chris Ferdinandi, MIT License, https://gomakethings.com
* Derived from work by Brian Suda, https://24ways.org/2010/calculating-color-contrast/
* @param  {String} A hexcolor value
* @return {String} The contrasting color (black or white)
*/
export const getContrastingColor = (hexcolor) => {

   // If a leading # is provided, remove it
   if (hexcolor.slice(0, 1) === '#') {
       hexcolor = hexcolor.slice(1);
   }

   // If a three-character hexcode, make six-character
   if (hexcolor.length === 3) {
       hexcolor = hexcolor.split('').map(function (hex) {
           return hex + hex;
       }).join('');
   }

   // Convert to RGB value
   var r = parseInt(hexcolor.substr(0,2),16);
   var g = parseInt(hexcolor.substr(2,2),16);
   var b = parseInt(hexcolor.substr(4,2),16);

   // Get YIQ ratio
   var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;

   // Check contrast
   return (yiq >= 128) ? 'black' : 'white';

};






// export const  getWaveformPoints2 = (soundFileData, width, height, offset, dataStart, dataEnd) => {
//     const step = Math.ceil( soundFileData.length / width );

//     let points= [];
//     const waveStart = dataStart / step;
//     const waveEnd = dataEnd / step;
//     // const waveWidth = endPoint
//     // console.log(dataStart, step, waveStart);

//     for(let i=waveStart; i < waveEnd; i++ ){
//         let min = 1.0;
//         let max = -1.0;
     
//         for( let j=0; j < step; j++) {
            
//             var datum = soundFileData[(i * step) + j]; 

//             if (datum < min){
//                 min = datum;
//             }else if(datum > max){
//                 max = datum;
//             }
                   
//         }
//         points.push([ i, ((1 + min ) * height) + offset]);  
 
//     }
//     return points
// }



// export const  getWaveformPoints = (soundFileData, width, height, offset) => {
//     // console.log(height, offset)
//     const step = Math.ceil( soundFileData.length / width );
//     // const trackOffset = TRACKHEIGHT * trackNumber;
//     // const amp = (TRACKHEIGHT / 2); // 200
//     // const amp = 200;
//     let points= [];

//     for(let i=0; i < width; i++ ){
//         let min = 1.0;
//         let max = -1.0;
     
//         for( let j=0; j < step; j++) {
            
//             var datum = soundFileData[(i * step) + j]; 

//             if (datum < min){
//                 min = datum;
//             }else if(datum > max){
//                 max = datum;
//             }
                   
//         }
//         points.push([i, ((1 + min ) * (height * 2) ) + offset]);  
       

//         //stroke(255);

//         // i = 0 ...1000;
//         //amp = 200
//         //1 + min 
//         // ellipse(i, (1+min)*amp, 1, Math.max(1,(max-min)*amp))
//         //rect(i, ((1 + min ) * amp) + trackOffset, 1, (Math.max(1, (max-min) * amp )));
        

//     }
//     return points
// }



// export const findRange = (data) => {
//     const width = 500
//     const step = Math.ceil( data.length / width );
//     let recordMin = 1.0;
//     let recordMax = -1.0;

//     for(let i=20; i < width - 40; i++ ){
//         let min = 1.0;
//         let max = -1.0;
     
//         for( let j=0; j < step; j++) {
            
//             var datum = data[(i * step) + j]; 

//             if (datum < min){
//                 min = datum;
//             }else if(datum > max){
//                 max = datum;
//             }
                   
//         }
//         if(min < recordMin){
//             recordMin = min
//         }  
//         if(max > recordMax){
//             recordMax = max
//         }
       
//     }
//     return { recordMin, recordMax }
// }



// export const getWaveformPoints3 = (soundFileData, width, height) => {
//     // console.log(soundFileData.length);
//     const step = Math.ceil( soundFileData.length / width );
//     let points= [];

//     for(let i=0; i < width; i++ ){
//         let min = 2.0;
//         let max = -2.0;
     
//         for( let j=0; j < step; j++) {
            
//             var datum = soundFileData[(i * step) + j]; 

//             if (datum < min){
//                 min = datum;
//             }else if(datum > max){
//                 max = datum;
//             }
                   
//         }
//         points.push([i, ((1 + min ) * (height * 2) - ((height)))]);  
       

//         //stroke(255);

//         // i = 0 ...1000;
//         //amp = 200
//         //1 + min 
//         // ellipse(i, (1+min)*amp, 1, Math.max(1,(max-min)*amp))
//         //rect(i, ((1 + min ) * amp) + trackOffset, 1, (Math.max(1, (max-min) * amp )));
        

//     }
//     return points
// }

// // export const waveformPathDef = (points) => {

// // }





// export const getWaveformPointsForUpload = (soundFileData, width, height, mic) => {
//     const viewOffset = mic ? height/2 * -1 : height/2;
//     // console.log(mic, viewOffset);
//     const step = Math.ceil( soundFileData.length / width );
//     let points= [];

//     for(let i=20; i < width - 40; i++ ){
//         let min = 1.0;
//         let max = -1.0;
     
//         for( let j=0; j < step; j++) {
            
//             var datum = soundFileData[(i * step) + j]; 

//             if (datum < min){
//                 min = datum;
//             }else if(datum > max){
//                 max = datum;
//             }
                   
//         }   
//         const scaler = 8;
//         points.push([i, (( scaler * (1/scaler + min) ) * (height ) + (viewOffset) )]);  
       
//     }
//     return points
// }




// export const drawWaveform = (ctx, data, col, mic) => {
   
//     if(data !== undefined){
            
//             const points = getWaveformPointsForUpload(data, ctx.canvas.width, ctx.canvas.height, mic);
//             drawCanvasLinePath(col, points, ctx);
      
//     }
// }



// ctx.lineWidth = 26;
// ctx.strokeStyle = 'orange';
// ctx.beginPath();
// // ctx.moveTo(500,500)
// points.forEach(point => {
    
//     ctx.lineTo(point[0], point[1])
// })

// ctx.stroke()

    //  drawStaggeredVoices = (col, points, ctx) => {
    //     const { count, numPoints } = this.state;
    //     const { voices } = this.props;  
    //     if( count < numPoints-1){
    //         // col, points, ctx
    //         drawCanvasLinePath(col, points[count], ctx);
    //         this.setState({ count: count + 1}, () => {
    //             setTimeout(() => this.drawStaggeredVoices(voices[count + 1].stroke, points, ctx), 1000);
    //         });
    //         console.log(count + 1, voices[count+ 1].stroke)
            
            
    //     } else {
    //         this.setState({count : 0})
    //     }
    // }