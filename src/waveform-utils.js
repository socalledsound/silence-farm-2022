
export const findWaveformRange = (data) => {
    const width = 500
    const step = Math.ceil( data.length / width );
    let recordMin = 1.0;
    let recordMax = -1.0;

    for(let i=20; i < width - 40; i++ ){
        let min = 1.0;
        let max = -1.0;
     
        for( let j=0; j < step; j++) {
            
            var datum = data[(i * step) + j]; 

            if (datum < min){
                min = datum;
            }else if(datum > max){
                max = datum;
            }
                   
        }
        if(min < recordMin){
            recordMin = min
        }  
        if(max > recordMax){
            recordMax = max
        }
       
    }
    return { recordMin, recordMax }
}

export const drawCanvasLinePath = (col, points, ctx, alpha) => {
    // console.log(col.alpha)
    const colWithAlpha = col.alpha(alpha)
    // console.log(colWithAlpha)
    ctx.lineWidth = 1;
    ctx.strokeStyle = colWithAlpha;
    ctx.beginPath();
    points.forEach(point => {
        // console.log(point[0], point[1])
        ctx.lineTo(point[0], point[1])
    })

    ctx.stroke()
}


export const getWaveformPoints3 = (soundFileData, width, height) => {
    // console.log(soundFileData.length);
    const step = Math.ceil( soundFileData.length / width );
    let points= [];

    for(let i=0; i < width; i++ ){
        let min = 2.0;
        let max = -2.0;
     
        for( let j=0; j < step; j++) {
            
            var datum = soundFileData[(i * step) + j]; 

            if (datum < min){
                min = datum;
            }else if(datum > max){
                max = datum;
            }
                   
        }
        points.push([i, ((1 + min ) * (height * 2) - ((height)))]);  
       

        //stroke(255);

        // i = 0 ...1000;
        //amp = 200
        //1 + min 
        // ellipse(i, (1+min)*amp, 1, Math.max(1,(max-min)*amp))
        //rect(i, ((1 + min ) * amp) + trackOffset, 1, (Math.max(1, (max-min) * amp )));
        

    }
    return points
}






export const  getWaveformPoints2 = (soundFileData, width, height, offset, dataStart, dataEnd) => {
    const step = Math.ceil( soundFileData.length / width );

    let points= [];
    const waveStart = dataStart / step;
    const waveEnd = dataEnd / step;
    // const waveWidth = endPoint
    // console.log(dataStart, step, waveStart);

    for(let i=waveStart; i < waveEnd; i++ ){
        let min = 1.0;
        let max = -1.0;
     
        for( let j=0; j < step; j++) {
            
            var datum = soundFileData[(i * step) + j]; 

            if (datum < min){
                min = datum;
            }else if(datum > max){
                max = datum;
            }
                   
        }
        points.push([ i, ((1 + min ) * height) + offset]);  
 
    }
    return points
}

export const  getWaveformPoints = (soundFileData, width, height, offset) => {
    const step = Math.ceil( soundFileData.length / width );
    let points= [];

    for(let i=0; i < width; i++ ){
        let min = 1.0;
        let max = -1.0;
     
        for( let j=0; j < step; j++) {      
            var datum = soundFileData[(i * step) + j]; 
            if (datum < min){
                min = datum;
            }else if(datum > max){
                max = datum;
            }              
        }
        points.push([i, ((1 + min ) * (height * 2) ) + offset]); 
    }
    return points
}

export const  getFramePoints = (soundFileData, width, height, offset) => {
    const step = Math.ceil( soundFileData.length / width );
    let points= [];

    for(let i=0; i < width; i++ ){
        let min = 1.0;
        let max = -1.0;
     
        for( let j=0; j < step; j++) {      
            var datum = soundFileData[(i * step) + j]; 
            if (datum < min){
                min = datum;
            }else if(datum > max){
                max = datum;
            }              
        }
        points.push([i, ((1 + min ) * (height * 2) ) + offset]); 
    }
    return points
}





export const getWaveformPointsForUpload = (soundFileData, width, height, mic) => {
    const viewOffset = mic ? height/2 * -1 : height/2;
    // console.log(mic, viewOffset);
    const step = Math.ceil( soundFileData.length / width );
    let points= [];

    for(let i=20; i < width - 40; i++ ){
        let min = 1.0;
        let max = -1.0;
     
        for( let j=0; j < step; j++) {
            
            var datum = soundFileData[(i * step) + j]; 

            if (datum < min){
                min = datum;
            }else if(datum > max){
                max = datum;
            }
                   
        }   
        const scaler = 8;
        points.push([i, (( scaler * (1/scaler + min) ) * (height ) + (viewOffset) )]);  
       
    }
    return points
}




export const drawWaveform = (ctx, data, col, mic) => {
   
    if(data !== undefined){
            
            const points = getWaveformPointsForUpload(data, ctx.canvas.width, ctx.canvas.height, mic);
            drawCanvasLinePath(col, points, ctx);
      
    }
}

