import { getFramePoints, drawCanvasLinePath } from '../../../waveform-utils'
import { getFrame } from '../../../utils'

class Frame {
    constructor(data){
       this.frame= getFrame(data.length);
       this.data = data;
       this.color = '#FF0000'
    }

    render(ctx){
        console.log(this.frame)
        // console.log('rendering frame')
        if(this.frame.data !== undefined){
          
          const points = getFramePoints(this.data, ctx.canvas.width/2, ctx.canvas.height/2.0, -ctx.canvas.height/2.0);
          drawCanvasLinePath(this.frame.color, points, ctx, 1.0);
        }
      }
}

export default Frame







