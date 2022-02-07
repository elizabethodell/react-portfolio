import React from 'react';
import Headshot from '../assets/images/headshot.jpg';
import '../App.css';

const About = () => {
    return (
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='card'>

                            <div className='card-body'>
                                <div className="row coding-background ">
                                    <img className='avatar' src={Headshot} />
                                </div>
                            </div>

                            <div className='card-body'>
                                <div className="row">
                                    <p className='p-about'>
                                        Construction project engineer turned coder! I graduate from Virginia Tech in 2019 with a B.S. in Building Construction. Combining my love of construction and interst in coding has led to my interest in growing technolgy in a field that is behind the curve.

                                    </p>
                                </div>
                            </div>

                            <div className="modal-footer" />

                            <div className='card-body'>
                                <h2>Want to learn more about me?</h2>
                                <br />
                                <a href="https://drive.google.com/file/d/1ld3h-JxFpFnZMXbkhaKRDaoo6kDF-JID/view?usp=sharing" className="link">Download Resume</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default About;
