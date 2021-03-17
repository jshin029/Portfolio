import React from 'react';
import './TLCard.scss';

function TLCard(props){
    const {title, date, description} = props;
    return(
        <div className="tlCardContainer">
            <h1 className="tlCardTitle">
                {title}
            </h1>
            <h2 className="tlCardDate">
                {date}
            </h2>
            <p className="tlCardDescription">
                {description} 
            </p>
        </div>
    )
}

export default TLCard;