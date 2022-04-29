import React from 'react';
import google from '../../../images/google.png'
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    return (
        <div className='my-3'>
            <div className='d-flex align-items-center'>
                <div style={{ height: '2px' }} className='w-50 bg-blue'></div>
                <p className='mb-0 px-2'>OR</p>
                <div style={{ height: '2px' }} className='w-50 bg-blue'></div>
            </div>
            <div>
                <button className='btn btn-outline-dark rounded-pill d-flex align-items-center justify-content-center w-75 d-block mx-auto my-2'>
                    <img width={35} src={google} alt="" />
                    <span className="ms-3">SignIn Using Google</span>
                </button>
            </div>

        </div>
    );
};

export default SocialLogin;