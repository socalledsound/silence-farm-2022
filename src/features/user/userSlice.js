import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentUser: null,
    errors: null,
    loading: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

        emailSignInSuccess : (state, action) => {
            // console.log(action.payload)
            return {
                ...state,
                currentUser: action.payload
            }
        },
        setCurrentUser : (state, action) => {
            return {
                ...state, 
                currentUser : action.payload,
            }
        },
        emailSignInFailure : (state, action) => {
            // console.log(action.payload)
            return {
                ...state,
                errors: action.payload
            }
        },
        resetLoginErrors : (state) => {
            return {
                ...state,
                errors: null,
            }
        },
        loginLoading : (state, action) => {
            // console.log(action)
            return {
                ...state,
                loading: action.payload
            }
        },
        logOutUser : (state) => {
            return {
                ...state,
                currentUser: null,
            }
        },



    }
})

export const selectLoginError = state => state.user.errors
export const selectLoginLoading = state => state.user.loading
export const selectCurrentUser = state => state.user.currentUser

export const emailRegisterStart = (formData) => ({
    type: 'EMAIL_REGISTER_START',
    payload: formData,
})

export const { 
    addUser, logOutUser, resetLoginErrors, emailSignInSuccess, 
    setCurrentUser,
    emailSignInFailure, loginLoading, 
    submitUserUpdateStart, 
    updateUserSuccess, updateUserFailure,
    } = userSlice.actions 
export default userSlice.reducer