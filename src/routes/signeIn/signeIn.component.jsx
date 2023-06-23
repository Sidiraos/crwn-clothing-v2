import {signInWithGooglePopUp , createUsersDocumentFromAuth} from '../../utils/firebase/firebase.utils';
function SigneIn(){
    const logGoogleUser = async ()=> {
        const {user} = await signInWithGooglePopUp();
        const userDocRef = await createUsersDocumentFromAuth(user);
    }
    return(
        <div>
            <h2>Signe In page</h2>
            <button onClick={logGoogleUser}>Sign in with Google</button>
        </div>
    )
}

export default SigneIn;