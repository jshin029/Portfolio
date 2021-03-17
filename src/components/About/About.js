import React from 'react';
import './About.scss';
import AboutCard from '../Common/AboutCard/AboutCard';

const textDescriptions = [
    "I recently graduated from the University of California, Riverside with a B.S. in Computer Science. Currently, I'm a software engineer at Raytheon and enjoy working on web apps in my free time.",
    "I enjoy solving challenging problems and seeing the results succeed. I'm always open to learning new things with the help of my friends, Youtube and SO.",
    "Grab a large cup filled with 1/4 of ice. Fill to brim with ITO EN Unsweetened Green tea or coffee. Tune into cafe jazz stream or holiday jingles depending on the season."
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
            <div className="aboutListContainer">
                <AboutCard textDescription={ textDescriptions[0] } image={"webDev"} title={"Who am I"}/>
                <AboutCard textDescription={ textDescriptions[1] } image={"bulb"} title={"Why Software Engineering"}/>
                <AboutCard textDescription={ textDescriptions[2] } image={"coffee"} title={"How to get Started"}/>
            </div>
        </div>
    )
}

export default About;