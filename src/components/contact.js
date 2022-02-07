import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContactForm from '../components/contact-form';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import '../App.css';

function Contact() {
    return (
        <div className='container'>
             <div className='card-body'>
                <div className="row ">
                    <img className='contactHero'/>
                </div>
            </div>
            <Container fluid className="shadow bg-light mb-5">
                <Container className="p-4">
                    <Row>
                        <Col>
                            <Container>
                                <h4>My Contact Info</h4>
                                <p>
                                    <a href="mailto:ebo16@vt.edu">
                                        <span className="pr-3">
                                            <FaEnvelope />
                                        </span>
                                        ebo16@vt.edu
                                    </a>
                                </p>

                                <p>
                                    <a href="https://github.com/elizabethodell" target='_blank'>
                                        <span className="pr-3">
                                            <FaGithub />
                                        </span>
                                        elizabethodell
                                    </a>
                                </p>
                                <p>
                                    <a href="https://www.linkedin.com/in/eodell/" target='_blank'>
                                        <span className="pr-3">
                                            <FaLinkedin />
                                        </span>
                                        eodell
                                    </a>
                                </p>
                            </Container>
                        </Col>

                        <Col sm={12} md={6} lg={8} className="pt-sm-4 pt-lg-0">
                            <Container>
                                <h4 style={{ color: "#F06543" }}>Send a Message</h4>
                                <ContactForm />
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    )
}

export default Contact;