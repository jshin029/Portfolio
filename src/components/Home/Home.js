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
                        Software Engineer & Tea enthusiast
                    </p>
                </div>
                <div>
                    <button className="homeButtonResume">
                        Resume
                    </button>
                    <button className="homeButtonChat">
                        Let's Chat
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;