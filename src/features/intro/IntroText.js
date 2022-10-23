import React from 'react'
import { Link } from 'react-router-dom'

import './IntroText.css'


const IntroText = () => {

    return (
        <div className="container">
            <p className="text">
            silence farm is a place to share silence.  add your own if you want to! </p>
          
            <p className="text">
            find a relatively quiet moment, plug a microphone in to your browser, and go to the <Link to="/upload" className="upload-link">upload</Link> page.
            you'll have to log in to upload a sound, after which you will be guided through the process.</p>
            <p className="text">or just help farm the silence by clicking the button above, and letting these silences mix with your own.</p>
            <p className="text">thanks for stopping by.  </p>
            
           
        </div>
    )

}
export default IntroText