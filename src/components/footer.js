import React from 'react';
import '../footer.css';
import Twitter from '../assets/images/twitter.png';
import LinkedIn from '../assets/images/linkedin.png';
import GithubLogo from '../assets/images/github.png';

function Footer() {
    return (
        <div className="footer" id="footer">
            <div className='img-links'>
                <a href="https://github.com/elizabethodell" target="_blank"><img src={GithubLogo} alt="Github" className="icon"/></a>
                <a href="https://www.linkedin.com/in/eodell/" target="_blank"><img src={LinkedIn} alt="LinkedIn" className="icon"/></a>
                <a href="https://twitter.com/" target="_blank"><img src={Twitter} alt="Twitter" className="icon"/></a>
            </div>
            <p className='footer-info'>
                &copy; Elizabeth Odell |  <a href="https://drive.google.com/file/d/1ld3h-JxFpFnZMXbkhaKRDaoo6kDF-JID/view?usp=sharing" className="link">Download Resume</a>
            </p>

        </div>
    )
}

export default Footer;