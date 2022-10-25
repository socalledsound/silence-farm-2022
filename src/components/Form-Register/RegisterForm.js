
import React from 'react'
import { useDispatch } from 'react-redux'
import { emailRegisterStart } from '../../features/user/userSlice'
import useForm from './useForm'
import TextField from '../TextField/TextField'
import styles from './RegisterForm.module.css'
import { validateLogin } from './validateRegister'
const RegisterForm = () => {
    
    const dispatch = useDispatch()
    const initialFormState = {
        username: '',
        email: '',
        password: '',
    }

    const submitFormData = (data) => {
        dispatch(emailRegisterStart(data))
    }


     const { formData, errors, handleInputChange, handleSubmit } = 
                useForm(initialFormState, validateLogin, (formData) => submitFormData(formData))
    const {username, email, password } = formData
    // console.log(keys);
    return ( 
        <form onSubmit={handleSubmit} className={styles.formWrapper}>
                      <TextField 
                            value={username}
                            required
                            name='username'
                            onChange={handleInputChange}
                            error={errors.name}
                            placeholder='enter a username'
                        />
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
 
export default RegisterForm;