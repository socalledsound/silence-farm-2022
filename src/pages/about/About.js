import React from 'react'

import './About.css'
const About = () => {

   
    return ( 
          <div className='about-bg'>
                
                <div className="about-flex">
                    <div className="hand-wave">
                    👋
                    </div>
                       
                   

                <div className="text-container">
                    <p className="text">Hi!  My name is Chris Kubick.  You can see more projects like this (and also not like this) at my<a href="https://www.socalledsound.com" className="about-link"> website</a>.</p>
                    <p className="text">I'm very often looking for opportunities to work with or for other people, so send me an<a href="mailto: socalledsound@gmail.com" className="about-link"> email </a>if you'd like to hire me or collaborate.</p>
                    <p className="text">I also <a href="https://www.socalledsidefx.com" className="about-link">teach</a> people how to make stuff like this, send me an email if you're interested!</p>
                </div>    
                <div className="text-container">
                    <p className="text">This project is a re-working of an older project...etc..etc. write more.</p>
                </div>
                <div className="text-container">
                    <p className="text">
                        Silence farm is, basically, a granular synthesizer, built using the web audio API.
                    </p>
                    <p className="text">
                        Via the controls icon at the top, you can control the parameters of individual voices, and also 
                        some parameters of the overall mix.
                    </p>
                    <p className="text">
                            The 'mutation' parameter under 'all sounds' controls a random value that loads new sound files into the mix.  
                            Each sound file is a 'voice' that you can toggle on or off.  
                            At somewhat random intervals, each one of these voices generates a new sound grain, a little chunk of the audio file.
                            You can control the fade in, fade out, duration, pitch and volume of these grains, and also the regularity
                            with which a new grain is generated, aka the density. 
                    </p>
                    <p className="text">
                        The sound files are a combination of sounds that I had in my library and sounds that people like you have uploaded from around the world.
                        Each one of these sounds is a 'room tone', a recording a of a room in silence.
                        
                    </p>

                    <p className="text">
                        If you want to, you can also upload your own ambient environment for inclusion in the mix.  
                        If you're concerned about privacy, there's a little bit about that below.
                    </p>  
                
            </div> 


                </div>
            </div> 
    
    );
          

}
 
export default About;