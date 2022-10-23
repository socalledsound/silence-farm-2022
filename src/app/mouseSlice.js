import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentMousePos: {
        x: 0,
        y: 0,
    },
    clickedMousePos: {
        x: 0,
        y: 0,
    },
    clicked: false,
}


const mouseSlice = createSlice({
    name: 'mouse',
    initialState,
    reducers: {
        updateCurrentMousePos : (state, action) => {
            state.currentMousePos = {x: action.payload.x, y: action.payload.y}
        },
        setClickedMousePos : (state, action) => {
            state.clickedMousePos = {x: action.payload.x, y: action.payload.y}
        },
        toggleClicked : (state, action ) => {
            state.clicked = !state.clicked
        }
        }
  
})

export const { updateCurrentMousePos, setClickedMousePos, toggleClicked } = mouseSlice.actions

export const selectCurrentMousePos = (state) => state.mouse.currentMousePos
export const selectClickedMousePos = (state) => state.mouse.clickedMousePos
export const selectClickedState = (state) => state.mouse.clicked
// export const selectCanvasHeight = (state) => state.main.canvasHeight
// export const selectLoadingState = (state) => state.main.loading

export default mouseSlice.reducer



