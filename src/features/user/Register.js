import { Link } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { toggleUploadModal } from '../upload/uploadSlice'
import RegisterForm from '../../components/Form-Register/RegisterForm'
import './Login.css'

const Register = ({toggleRegistered}) => {

        const dispatch = useDispatch()
        return (    
            <div className="wrapper">
                <div className="login-container">
                    <div className="upload-text">
                        <p className="message">you'll have to make an account to upload a sound</p>
                    </div>
    
                    <div className="login-form-container">
                        <RegisterForm />
                       
                    </div>   
                    <div 
                        className="account-exists-button"
                        onClick={() => toggleRegistered(true)}
                        >
                            <p>i already have an account</p>
                    </div>
                    <div className="cancel-button-container">
                        <p className="white" onClick={() => dispatch(toggleUploadModal(false))}> <Link to="/" className="cancel-button"> cancel</Link></p>
                    </div> 
                    
                </div> 
            </div>
     );
}
 
export default Register;