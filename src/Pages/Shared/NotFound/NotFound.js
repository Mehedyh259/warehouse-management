import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    let navigate = useNavigate();
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center py-5">

                    <h1 className='title-color fw-bold'>Oops!  404 Not Found</h1>

                    <p className="text-danger">
                        Sorry, an error has occured, Requested page not found!
                    </p>
                    <button onClick={() => navigate('/')} className="btn bg-blue">
                        Take Me To Home
                    </button>

                </div>
            </div>
        </div>

    );
};

export default NotFound;