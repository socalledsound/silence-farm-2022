import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {  NavLink } from 'react-router-dom'
import { selectUploadModalState, toggleUploadModal } from '../upload/uploadSlice'
import Logo from './Logo'
import styles from './Header.module.css'
import ControlsIcon from './ControlsIcon'

// import './header.styles.css'

const Header = () => {

const dispatch = useDispatch();

const uploadModal = useSelector(selectUploadModalState)
console.log(uploadModal)
// useEffect(() => {
//     dispatch(toggleControlsOpen)
// })


    return (
        <>
            {
                uploadModal ?
            
                    <div>

                    </div>
                    :
                    <div className={styles.headerContainer}> 
                        <div className={styles.flexContainer}>
                            <NavLink to="/" className={styles.headerTitle}> 
                                <Logo className={styles.logo}/>
                            </NavLink>   
                        </div>

                        <div className={styles.flexContainer}>
                            <NavLink to="/upload" className={styles.headerLink} >
                                <p className="offWhiteText" onClick={() => dispatch(toggleUploadModal(true))}>upload</p>
                            </NavLink>
                            <NavLink to="/about"  className={styles.headerLink} >
                                <p className="offWhiteText"> ? </p>
                            </NavLink>   
                            <NavLink to="/controls" className={styles.controls}>
                                <ControlsIcon />
                            </NavLink>  
                        </div>
                    </div>
            }
        </>
        
    )



}
export default Header