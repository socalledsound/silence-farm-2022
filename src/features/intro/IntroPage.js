import React from 'react'
import IntroText from './IntroText'
import StartButton from './StartButton'
import './IntroPage.css'

const IntroPage = () => {
    const loaded = true

    return ( 
        <div className="intro-screen-container">
            {loaded ?
                    <div className="intro-container">
                         <StartButton />
                         <IntroText />
                       
                    </div>

                :

               <div style={{color: 'white'}}>...loading...</div>
            }
         
        </div>
     );
}
 
export default IntroPage;