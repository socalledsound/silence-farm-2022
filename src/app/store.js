import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import audioMiddleWare from './audio-middleware/audio.middleware'



export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: [audioMiddleWare]
});
