import React from 'react';
import './Projects.scss';
import ProjectsCard from '../Common/ProjectsCard/ProjectsCard';
import { Container, Row, Col } from 'react-bootstrap';

const descriptions = [
    "Birdie allows users to search for trending tweets based on location",
    "StockOverflow uses news data and previous trends to predict a stock’s future",
    "Joyride takes out the stress of organizing rides in large groups ",
    "Baut recommends movies and music based on conversations with the user",
    "Toor creates a space for users to share and enjoy audio tours in places they visited",
    "CheaterBeater identifies fraudalent hackathon projects based on devpost"
]

function Projects(){
    return(
        <Container fluid className="projectsContainer">
            <Row className="justify-content-md-center">
                <Col lg="10">
                    <header className="projectsSubHeader">
                        A peek at...
                    </header>
                    <header className="projectsMainHeader">
                        My Work
                    </header>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col lg="10">
                    <Row className="projectsListContainer">
                        <Col lg="4">
                            <ProjectsCard description={ descriptions[0] } winner={ false } image={ "birdie" } link={ "https://github.com/CS-UCR/final-project-kirbydownb" }/>
                        </Col>
                        <Col lg="4">
                            <ProjectsCard description={ descriptions[1] } winner={ false } image={ "stockOverflow" } link={ "https://github.com/kimjihwan0208/stockoverflow" }/>
                        </Col>
                        <Col lg="4">
                            <ProjectsCard description={ descriptions[2] } winner={ true } image={ "joyride" } link={ "https://github.com/chefong/Joyride" }/>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col lg="10">
                    <Row className="projectsListContainer">
                        <Col lg="4">
                            <ProjectsCard description={ descriptions[3] } winner={ true } image={ "baut" } link={ "https://github.com/KirbyDownB/GEICOChatBot" }/>
                        </Col>
                        <Col lg="4">
                            <ProjectsCard description={ descriptions[4] } winner={ false } image={ "toor" } link={ "https://github.com/chefong/toor" }/>
                        </Col>
                        <Col lg="4">
                            <ProjectsCard description={ descriptions[5] } winner={ true } image={ "cb" } link={ "https://github.com/willshiao/CheaterBeater" }/>
                        </Col>
                    </Row>  
                </Col>
            </Row>
            

        </Container>
    )
}

export default Projects;