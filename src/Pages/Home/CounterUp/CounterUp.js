import React from 'react';
import './CounterUp.css'
import { BsCart4, } from 'react-icons/bs'
import { FiThumbsUp } from 'react-icons/fi'
import { FaUsers, FaUserAlt } from 'react-icons/fa';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const CounterUp = () => {
    return (
        <div className='counter-section'>
            <div className="container py-5">
                <div className="row counter-content my-5">
                    <div className="four col-md-3 my-2">
                        <div className="counter-box bg-blue">
                            <i><FiThumbsUp /></i>
                            <span className="counter text-white">
                                <CountUp end={214} duration={2} >
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start}>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                            </span>
                            <p className='text-white'>Available Companies</p>
                        </div>
                    </div>
                    <div className="four col-md-3 my-2">
                        <div className="counter-box">
                            <i><FaUsers /></i>
                            <span className="counter">
                                <CountUp end={325} duration={2}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start}>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                            </span>
                            <p>Registered Members</p>
                        </div>
                    </div>
                    <div className="four col-md-3 my-2">
                        <div className="counter-box">
                            <i><BsCart4 /></i>
                            <span className="counter">
                                <CountUp end={2174} duration={2}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start}>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                            </span>
                            <p>Available Products</p>
                        </div>
                    </div>
                    <div className="four col-md-3 my-2">
                        <div className="counter-box">
                            <i><FaUserAlt /></i>
                            <span className="counter">
                                <CountUp end={156} duration={2}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start}>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                            </span>
                            <p>Saved Trees</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CounterUp;