import React from 'react';
import './ProjectsCard.scss';
import { ReactComponent as Baut } from '../../../assets/images/baut.svg';
import { ReactComponent as StockOverflow } from '../../../assets/images/stockoverflow.svg';
import { ReactComponent as JoyRide } from '../../../assets/images/joyride.svg';
import { ReactComponent as CB } from '../../../assets/images/cb.svg';
import { ReactComponent as Birdie } from '../../../assets/images/birdie.svg';
import { ReactComponent as Toor } from '../../../assets/images/toor.svg';

const imageSelecter = (image) => {
    if (image === 'baut')
    {
        return <Baut />
    }
    else if (image === 'stockOverflow')
    {
        return <StockOverflow />
    }
    else if (image === 'joyride')
    {
        return <JoyRide />
    }
    else if (image === 'cb')
    {
        return <CB />
    }
    else if (image === 'birdie')
    {
        return <Birdie />
    }
    else if (image === 'toor')
    {
        return <Toor />
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