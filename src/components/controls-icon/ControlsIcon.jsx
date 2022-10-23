import React, { useState } from 'react'
import { createLinePath } from '../../utils';
const circles = Array.from({ length : 3}, (e, i) => ({
    cx : 30 * (i+ 1),
    cy : 50,
    r: 5
}))


const lines = Array.from({length: 3}, (e, i) => {
    const y1 = 30, y2 = 70;
    const x = 30 * (i+ 1);
    return [[x, y1], [x, y2]]
})


const ControlsIcon = () => {
    const [hover, setHover] = useState(false);
    return ( 
        <svg 
            width="100" 
            height="100" 
            viewBox="0 0 100 100"
            onMouseEnter={() => setHover(!hover)}
            onMouseLeave={() => setHover(!hover)}
            >
           {
               lines.map( (points, i) => 
                    <path 
                        key={`control-icon-line-${i}`}
                        d={createLinePath(lines[i])}
                        stroke={hover ? 'black' : "#ececec"}
                        strokeWidth="1"
                    />
                )
            }
            {
                circles.map( (circle, i) => 
                    <circle 
                        key={`control-icon-circle-${i}`}
                        cx={circle.cx}
                        cy={circle.cy}
                        r={circle.r}
                        fill="transparent"
                        stroke={hover ? '#63df6d' : "#ececec"}
                        strokeWidth="3"
                    />
                    )


           }
            
        </svg>
     );
}
 
export default ControlsIcon;