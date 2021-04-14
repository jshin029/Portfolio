import React from 'react';
import './ProjectsCard.scss';

import baut from '../../../assets/images/baut.png';
import stockOverFlow from '../../../assets/images/stockoverflow.png';
import birdie from '../../../assets/images/birdie.png';
import joyride from '../../../assets/images/joyride.png';
import toor from '../../../assets/images/toor.png';
import cb from '../../../assets/images/cb.png';


const imageSelecter = (image) => {
    if (image === 'baut')
    {
        return <img className="projectsCardImg" src={baut} alt="Baut"/>
    }
    else if (image === 'stockOverflow')
    {
        return <img className="projectsCardImg" src={stockOverFlow} alt="StockOverFlow"/>
    }
    else if (image === 'joyride')
    {
        return <img className="projectsCardImg" src={joyride} alt="Joyride"/>
    }
    else if (image === 'cb')
    {
        return <img className="projectsCardImg" src={cb} alt="CheaterBeater"/>
    }
    else if (image === 'birdie')
    {
        return <img className="projectsCardImg" src={birdie} alt="Birdie"/>
    }
    else if (image === 'toor')
    {
        return <img className="projectsCardImg" src={toor} alt="Toor"/>
    }
}

function ProjectsCard(props){
    const { description, image, link } = props;
    return(
        <div className="projectsCardContainer">
            { imageSelecter(image) }
            <div className="projectsCardTextContainer">
                <header className="projectsCardDescription">
                    { description }
                </header>
                <a href={link} className="projectsCardLink">
                    See Project
                </a>
            </div>
        </div>
    )
}

export default ProjectsCard;