import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../features/user/userSlice'
import Login from '../../features/user/Login'
import Register from '../../features/user/Register'
import Upload from '../../features/upload/Upload'


const UploadPage = () => {

    const [registered, toggleRegistered]  = useState(false)
    const currentUser = useSelector(selectCurrentUser)

    return ( 
        <div>
            {
                currentUser ? 
                    <Upload />
                    :
                    registered ?
                            <Login toggleRegistered={toggleRegistered}/>
                        :
                            <Register toggleRegistered={toggleRegistered} />
            }
               
        </div>
     );
}
 
export default UploadPage;