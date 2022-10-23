import React, { useEffect } from 'react'
import { onAuthStateChange } from './firebase/firebase.utils'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { selectUploadModalState } from './features/upload/uploadSlice'
import Header from './features/header/Header'
import MainPage from './pages/main/MainPage.js'
import AboutPage from './pages/about/AboutPage'
import UploadPage from './pages/upload/UploadPage'


// import { useSelector, useDispatch } from 'react-redux'
// import { selectUploadStarted } from './features/upload/uploadSlice'
import { addItemsToSoundsInfoArray } from './app/sounds-info/soundsInfo.actions'
import soundsInfo from './app/sounds-info/SoundsInfo'
// import Main from './Main'
// import MainThemed from './pages/main-themed/MainThemed'


// import Controls from './components/controls/controls'
// import Canvas from './components/canvas/canvas'
// import CanvasClass from './components/canvas-class/Canvas-Class'
// import Canvasp5hook from './components/canvasp5hook/canvasp5hook'

const App = () => {

  const dispatch = useDispatch()

  // currently from granular
  // const timerStarted = useSelector(selectTimerStarted)
  // const timerStarted = false
  //currently from upload
  // const uploadStarted = useSelector(selectUploadStarted)

  useEffect(() => {
    dispatch(addItemsToSoundsInfoArray(soundsInfo))
  })

  const uploadModal = useSelector(selectUploadModalState)

return (
    <BrowserRouter>
        <Header started={false}  uploadModal={uploadModal}/>
        <Routes>
            <Route path="/" element={<MainPage />}/>
            <Route path="about" element={<AboutPage />}/>
            <Route path="upload" element={<UploadPage />} />
        </Routes>
        }

    </BrowserRouter>

)

       

}
export default App

