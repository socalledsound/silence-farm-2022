import  { takeLatest, put, all, call } from 'redux-saga/effects';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import { emailRegisterStart, emailSignInSuccess, emailSignInFailure, loginLoading } from '../../features/user/userSlice'
// import{ startFetchUserWorks, fetchUserWorksSuccess, fetchUserWorksFailure} from '../../features/gallery/gallerySlice'



// function* signInWithEmail(action){
//     // console.log('registering with email')
//     const { email, password } = action.payload
//     yield put(loginLoading(true))
//     try{
//         const { user } = yield auth.signInWithEmailAndPassword(email, password);
//         const userRef = yield(call(createUserProfileDocument, user));
//         const userSnapshot = yield userRef.get();
//         yield put(
//             emailSignInSuccess({id: userSnapshot.id, 
//                                   displayName: userSnapshot.data().displayName,
//                                     avatar: userSnapshot.data().avatar,
//                                     email:  userSnapshot.data().email,
//                                 })
//         )
//         yield put(loginLoading(false))
//     }
//     catch(error){
//         console.log(error);
//         yield put(
//             emailSignInFailure(error.message)            
//         )
//         yield put(loginLoading(false))   

//     }
// }

function* registerWithEmail(action){
    // console.log('registering with email')
    const {username, email, password } = action.payload
    yield put(loginLoading(true))
    try{
        const { user } = yield auth.createUserWithEmailAndPassword(email, password);
        const userRef = yield(call(createUserProfileDocument, user, { username }));
        const userSnapshot = yield userRef.get();
        yield put(
            emailSignInSuccess({id: userSnapshot.id, 
                                username: userSnapshot.data().username,
                                email:  userSnapshot.data().email,
                                })
        )
        yield put(loginLoading(false)) 
    }
    catch(error){
        console.log(error);
        yield put(
            emailSignInFailure(error.message)
        )
        yield put(loginLoading(false)) 
    }
}


export function* onEmailRegisterStart(){
    // console.log('hi from register')
    yield takeLatest(emailRegisterStart.type, registerWithEmail)
}

export function* userSagas() {
    yield all([call(onEmailRegisterStart)])
}

// export function* onEmailSignInStart(){
//     // console.log('hi from sign in')
//     yield takeLatest(UserActionTypes.EMAIL_SIGNIN_START, signInWithEmail)
// }

// export function* userSagas() {
//     yield all([call(onEmailSignInStart),call(onEmailRegisterStart)])
// }
