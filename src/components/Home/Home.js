import React from 'react';
import { ReactComponent as Profile } from '../../assets/images/profile.svg';
import './Home.scss';


function Home(){
    return(
        <div className="homeContainer">   
            <div className="homeLeft">
                <div>
                    <p>
                        <span className="homeTextColor">Hey, </span> 
                        it's me
                    </p>
                    <header className="homeHeader">
                        John Shin
                    </header>
                    <p className="homeDescriptionText">
                        Software Engineer & Tea Enthusiast of the matcha variety
                    </p>
                </div>
                <div className="homeButtonContainer">
                    <a className="homeButton homeButtonResume">
                        Resume
                    </a>
                    <a className="homeButton homeButtonChat" href="https://www.linkedin.com/in/john-shin029/">
                        Let's Chat
                    </a>
                </div>
            </div>
            <div className="homeRight">
            </div>
        </div>
    );
}

export default Home;