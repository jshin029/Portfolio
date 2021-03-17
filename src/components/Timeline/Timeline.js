import React from 'react';
import Experience from './Experience';
import './Timeline.scss';

function Timeline() {
    return(
        <div className="tlContainer">
            <div className="tlHeaderContainer">
                <header className="tlSubHeader">
                    Just Some Of...
                </header>
                <header className="tlMainHeader">
                    My Experience
                </header>
            </div>
            <div className="tlExperienceContainer">
                <Experience />
            </div>
        </div>
    )
}

export default Timeline;