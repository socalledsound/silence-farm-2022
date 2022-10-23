import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    uploadModal: false,
    uploading: false,
    uploadData: null,
    
}

export const uploadSlice = createSlice({
    name: 'upload',
    initialState,
    reducers: {
        toggleUploadModal : (state, action) => {
            state.uploadModal = action.payload
        }
    }
})

export const { toggleUploadModal } = uploadSlice.actions

export const selectUploadModalState = (state) => state.upload.uploadModal

export default uploadSlice.reducer