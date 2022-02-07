import React from 'react';
import '../App.css';
import '../portfolio.css';

const Resume = () => {
    return (
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='card'>
                            <div className="header">
                                <h3>Want to learn more about me? </h3>
                                <h4>Download Resume: <a href="https://drive.google.com/file/d/1ld3h-JxFpFnZMXbkhaKRDaoo6kDF-JID/view?usp=sharing">Elizabeth Odell</a></h4>
                            </div>

                            <div className="header">
                                <h3>Front-end Profeficiencies</h3>
                            </div>
                            <div className="modal-footer" />

                            <div>

                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JQuery</li>
                                    <li>JavaScript</li>
                                    <li>Responsive Design</li>
                                    <li>React</li>
                                    <li>Boostrap</li>
                                </ul>

                                <div className="modal-footer" />

                            </div>

                            <div className="header">
                                <h3>Back-end Profeficiencies</h3>
                            </div>
                            <div className="modal-footer" />

                            <div>

                                <ul>
                                    <li>Apis</li>
                                    <li>Node</li>
                                    <li>Express</li>
                                    <li>MySQL, Sequelize</li>
                                    <li>MongoDB, Mongoose</li>
                                    <li>REST</li>
                                    <li>GraphSQL</li>
                                </ul>


                            </div>

                            <div className="modal-footer" />
                        </div>

                    </div>
                </div>
            </div>

        </React.Fragment >
    );
};

export default Resume;
