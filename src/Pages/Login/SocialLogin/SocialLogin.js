import google from '../../../images/google.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import { toast } from 'react-toastify';
import axios from 'axios';


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
    const setAccessToken = async () => {
        const email = user?.user?.email;

        if (email) {
            toast.success("Logged In successfully")
            const { data } = await axios.post('https://tranquil-island-04777.herokuapp.com/login', { email });

            localStorage.setItem('accessToken', data.accessToken);
            navigate(from, { replace: true });
        }

    }

    if (loading) {
        return <Loading />
    }
    if (error) {
        errorMessage = <p className="text-danger">{error?.message}</p>;
    }

    if (user) {
        setAccessToken();
    }
    return (
        <div className='my-3'>
            <div className='d-flex align-items-center'>
                <div style={{ height: '2px' }} className='w-50 bg-primary'></div>
                <p className='mb-0 px-2'>OR</p>
                <div style={{ height: '2px' }} className='w-50 bg-primary'></div>
            </div>
            {
                errorMessage ? errorMessage : ""
            }
            <div>
                <button onClick={handleSignInWithGoogle} className='btn btn-danger rounded-pill d-flex align-items-center justify-content-center w-75 d-block mx-auto my-2'>
                    <img width={35} src={google} alt="" />
                    <span className="ms-3">Google SignIn</span>
                </button>
            </div>

        </div>
    );
};

export default SocialLogin;