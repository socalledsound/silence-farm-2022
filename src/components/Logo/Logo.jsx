import React, { useState } from 'react'
import './Logo.css'

const lines = Array.from({length: 5}, (e, i) => {
    const x1 = 0, x2 = 120;
    const y = 15 * i + 1;
    return [[x1, y], [x2, y]]
})

const createLinePath = (arr) => {
    const path = `M${arr.map((item, i) => [item[0], item[1]]).join('L')}`;
    return path
}
    




const Logo = ({purple = false}) => {
    
    const [ hover, setHover ] = useState(false)
    
    return ( 
        <svg 
            viewBox="0 0 100 100"
            className="logo"
            onMouseEnter={() => setHover(!hover)}
            onMouseLeave={() => setHover(!hover)}
            >
            #0b3c07
            {lines.map((line,i) => 
                <path 
                    key={i}
                    d={createLinePath(lines[i])}
                    stroke="#53ff44"
                    strokeWidth="3"                    
                />    
            )}'#e00bab'
            <rect x={hover ? '30': '45'} y={hover ? '10': '30'} width={hover ? '60' : '30'} height={hover ? '45' : '10'} fill={hover ? '#3c1c07' : '#e00bab'}/>
        </svg>
     );
}
 
export default Logo;
