// import React, { useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import { selectUploadStarted } from './features/upload/uploadSlice'
// import { addItemsToSoundsInfoArray } from './app/sounds-info/soundsInfo.actions'
// import soundsInfo from './app/sounds-info/SoundsInfo'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import MainPage from './pages/main/MainPage.js'
import About from './pages/about/About'
import Upload from './pages/upload/UploadPage'
// import Main from './Main'
// import MainThemed from './pages/main-themed/MainThemed'


// import Controls from './components/controls/controls'
// import Canvas from './components/canvas/canvas'
// import CanvasClass from './components/canvas-class/Canvas-Class'
// import Canvasp5hook from './components/canvasp5hook/canvasp5hook'

const App = () => {

  // const dispatch = useDispatch()

  // currently from granular
  // const timerStarted = useSelector(selectTimerStarted)
  // const timerStarted = false
  //currently from upload
  // const uploadStarted = useSelector(selectUploadStarted)

  // useEffect(() => {
  //   dispatch(addItemsToSoundsInfoArray(soundsInfo))
  // })


  return(
    <BrowserRouter>
      <>
        <Header started={false}  uploadPageOpen={false}/>
        <Routes>
          <Route path="/" element={<MainPage />}/>
          <Route path="about" element={About}/>
          <Route path="upload" element={Upload} />
        </Routes>
        
      </>    
   
    </BrowserRouter>
  )
}
export default App

