import React from 'react';
import './About.scss';
import AboutCard from '../Common/AboutCard/AboutCard';

const textDescriptions = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
]

function About(){
    return(
        <div className="aboutContainer">
            <div className="aboutHeaderContainer">
                <header className="aboutSubHeader">
                    Little Bit...
                </header>
                <header className="aboutMainHeader">
                    About Me
                </header>
            </div>
            <div className="aboutDescriptionContainer">
                <AboutCard textDescription={ textDescriptions[0] } image={"webDev"} />
                <AboutCard textDescription={ textDescriptions[0] } image={"bulb"} />
                <AboutCard textDescription={ textDescriptions[0] } image={"coffee"} />
            </div>
        </div>
    )
}

export default About;