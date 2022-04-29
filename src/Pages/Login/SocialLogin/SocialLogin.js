import google from '../../../images/google.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';


const SocialLogin = () => {
    let errorMessage;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const handleSignInWithGoogle = () => {
        errorMessage = "";
        signInWithGoogle();
    }

    if (loading) {
        return <Loading />
    }
    if (error) {
        errorMessage = <p className="text-danger">{error?.message}</p>;
    }

    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div className='my-3'>
            <div className='d-flex align-items-center'>
                <div style={{ height: '2px' }} className='w-50 bg-blue'></div>
                <p className='mb-0 px-2'>OR</p>
                <div style={{ height: '2px' }} className='w-50 bg-blue'></div>
            </div>
            {
                errorMessage ? errorMessage : ""
            }
            <div>
                <button onClick={handleSignInWithGoogle} className='btn btn-outline-dark rounded-pill d-flex align-items-center justify-content-center w-75 d-block mx-auto my-2'>
                    <img width={35} src={google} alt="" />
                    <span className="ms-3">SignIn Using Google</span>
                </button>
            </div>

        </div>
    );
};

export default SocialLogin;