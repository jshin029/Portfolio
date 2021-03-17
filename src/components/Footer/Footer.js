import React from 'react';
import './Footer.scss';

import { ReactComponent as Github } from '../../assets/images/github.svg';
import { ReactComponent as LinkedIn } from '../../assets/images/linkedin.svg';
import { ReactComponent as Email } from '../../assets/images/email.svg';


function Footer(){
    return(
        <div className="footerContainer">
            <div className="footerInnerContainer">
                <a href="https://github.com/jshin029">
                    <Github className="footerGithub" />
                </a>
                <a href="https://www.linkedin.com/in/john-shin029/">
                    <LinkedIn className="footerLinkedin" />
                </a>
                <a href="mailto: johnhshin97@gmail.com">
                    <Email className="footerEmail" />
                </a>
            </div>
        </div>
    )
}

export default Footer;