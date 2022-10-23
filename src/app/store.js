import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from './sagas/rootSaga'
import audioMiddleWare from './audio-middleware/audio.middleware'
import uploadReducer from '../features/upload/uploadSlice'
import userReducer from '../features/user/userSlice'
// import masterClockMiddleware from './masterClock/masterClock.middleware'
// import { granularReducer } from './granular/granular.reducer'
// import { mouseReducer } from './mouse/mouse.reducer'
// import { controlsReducer } from './controls/controls.reducer'
// import { soundsInfoReducer } from './sounds-info/soundsInfo.reducer'
// import { userReducer } from './user/user.reducer'
// import { uploadReducer } from './upload/upload.reducer'
// import { presetsReducer } from './presets/presets.reducer'

const sagaMiddleware = createSagaMiddleware()


export const store = configureStore({
  reducer: {
    upload: uploadReducer,
    user: userReducer,
  },
  middleware: [audioMiddleWare, sagaMiddleware]
});
sagaMiddleware.run(rootSaga)