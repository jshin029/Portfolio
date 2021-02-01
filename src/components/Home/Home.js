import React from 'react';
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
                    <button className="homeButton homeButtonResume">
                        Resume
                    </button>
                    <button className="homeButton homeButtonChat">
                        Let's Chat
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;