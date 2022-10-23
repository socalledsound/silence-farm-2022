import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../features/user/userSlice'
import Login from '../../features/user/Login'
import Upload from '../../features/upload/Upload'


const UploadPage = () => {

    const currentUser = useSelector(selectCurrentUser)

    return ( 
        <div>
            {
                currentUser ? 
                    <Upload />
                    :
                    <Login /> 
            }
               
        </div>
     );
}
 
export default UploadPage;