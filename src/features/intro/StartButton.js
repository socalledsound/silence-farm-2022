import React from 'react'
import { useDispatch } from 'react-redux';
import { initAudio } from '../../app/audio-middleware/audio.actions'
import './StartButton.css'



const StartButton = () => {

    const dispatch = useDispatch()

    return ( 
        <div>
            <button className="farm-silence-button offWhiteText" onClick={() => dispatch(initAudio())}>farm silence</button>
        </div>
        
     );
}
 
export default StartButton;


