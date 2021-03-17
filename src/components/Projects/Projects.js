import React from 'react';
import './Projects.scss';
import ProjectsCard from '../Common/ProjectsCard/ProjectsCard';

const descriptions = [
    "Birdie allows users to search for trending tweets based on location",
    "StockOverflow uses news data to predict a stock’s future",
    "Joyride takes out the stress of organizing rides in large groups ",
    "Baut recommends movies and music based on the user's decision",
    "Toor creates a space for users to share and enjoy audio tours in places they visited",
    "CheaterBeater identifies fraudalent hackathon projects based on devpost"
]

function Projects(){
    return(
        <div className="projectsContainer">
            <div>
                <header className="projectsSubHeader">
                    A peek at...
                </header>
                <header className="projectsMainHeader">
                    My Work
                </header>
            </div>
            <div className="projectsListContainer">
                <ProjectsCard description={ descriptions[0] } winner={ false } image={ "birdie" } link={ "https://github.com/CS-UCR/final-project-kirbydownb" }/>
                <ProjectsCard description={ descriptions[1] } winner={ false } image={ "stockOverflow" } link={ "https://github.com/kimjihwan0208/stockoverflow" }/>
                <ProjectsCard description={ descriptions[2] } winner={ true } image={ "joyride" } link={ "https://github.com/chefong/Joyride" }/>
            </div>
            <div className="projectsListContainer">
                <ProjectsCard description={ descriptions[3] } winner={ true } image={ "baut" } link={ "https://github.com/KirbyDownB/GEICOChatBot" }/>
                <ProjectsCard description={ descriptions[4] } winner={ false } image={ "toor" } link={ "https://github.com/chefong/toor" }/>
                <ProjectsCard description={ descriptions[5] } winner={ true } image={ "cb" } link={ "https://github.com/willshiao/CheaterBeater" }/>

            </div>
        </div>
    )
}

export default Projects;