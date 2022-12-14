
import React from 'react'
import { useDispatch } from 'react-redux'
import { emailSignInStart } from '../../features/user/userSlice'
import useForm from './useForm'
import TextField from '../TextField/TextField'
import styles from './LoginForm.module.css'
import { validateLogin } from './validateLogin'
const LoginForm = () => {
    
    const dispatch = useDispatch()
    const initialFormState = {
        email: '',
        password: '',
    }

    const submitFormData = (data) => {
        dispatch(emailSignInStart(data))
    }


     const { formData, errors, handleInputChange, handleSubmit } = 
                useForm(initialFormState, validateLogin, (formData) => submitFormData(formData))
    const { email, password } = formData
    // console.log(keys);
    return ( 
        <form onSubmit={handleSubmit} className={styles.formWrapper}>

                    <TextField 
                        value={email}
                        required
                        name='email'
                        onChange={handleInputChange}
                        error={errors.email}
                        placeholder={`enter your email`}
                        
                    />
 
                    <TextField 
                        value={password}
                        name='password'
                        onChange={handleInputChange}
                        error={errors.password}
                        placeholder={`enter your password`}
                        
                    /> 
                            
                
                    <button className={styles.submitFormButton} type='submit'>submit</button>
               
        </form>
     );
}
 
export default LoginForm;