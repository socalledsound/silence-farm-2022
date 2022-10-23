import React from 'react'
// import { useDispatch } from 'react-redux'
import {  NavLink } from 'react-router-dom'
import Logo from '../Logo/Logo'
import styles from './Header.module.css'
import ControlsIcon from '../controls-icon/ControlsIcon'
// import './header.styles.css'

const Header = ({ started, uploadPageOpen }) => {
console.log(started)
// const dispatch = useDispatch();

// useEffect(() => {
//     dispatch(toggleControlsOpen)
// })


    return (
        <div className={styles.headerContainer}>
            <div className={styles.flexContainer}>
               
                <NavLink to="/" className={styles.headerTitle}> 
                    {/* <img src="/logo.jpg" alt="silence farm logo" className="logo"/> */}
                    <Logo className={styles.logo}/>
                </NavLink>
                {/* <div className="divider"> | </div> */}
            </div>

               

                        
         

            <div className={styles.flexContainer}>
                
                
                {/* <div className="divider"> | </div> */}

  

                <NavLink to="/upload" className={styles.headerLink} >
                    <p className="white">upload</p>
                </NavLink>
                    
                                  {/* {
                                        started ? 
                                            <div  className="header-controls" onClick={() => dispatch(toggleControlsOpen())}>
                                                <ControlsIcon />
                                            </div>
                                            :
                                            null
                                      
                    
                                 } */}

                    
                <NavLink to="/about"  className={styles.headerLink} >
                                <p className="white"> ? </p>
                    </NavLink>
           
                    
                    <NavLink to="/controls" className={styles.controls}>
                            <ControlsIcon />
                    </NavLink>  
            </div>
            {/* {
                    !uploadPageOpen &&
                } */}

                

        </div>
    )



}
export default Header