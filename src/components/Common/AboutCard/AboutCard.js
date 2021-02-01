import React from 'react';
import './AboutCard.scss';
import { ReactComponent as WebDevIcon } from '../../../assets/images/webDevIcon.svg';
import { ReactComponent as CoffeeIcon } from '../../../assets/images/coffeeIcon.svg';
import { ReactComponent as BulbIcon } from '../../../assets/images/bulbIcon.svg';


const imageSelecter = (image) => {
    if (image === 'webDev')
    {
        return <WebDevIcon className="aboutCardIcon" />
    }
    else if (image === 'coffee')
    {
        return <CoffeeIcon className="aboutCardIcon" />
    }
    else if (image === 'bulb')
    {
        return <BulbIcon className="aboutCardIcon" />
    }
}

function AboutCard(props){
    const { textDescription, image } = props;
    return(
        <div className="aboutCardContainer">
            { imageSelecter(image) }
            <header className="aboutCardHeader">
                Web Development
            </header>
            <p className="aboutCardDescription">
                { textDescription }
            </p>
        </div>
    );
}

export default AboutCard