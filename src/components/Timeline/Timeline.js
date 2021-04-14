import React from 'react';
import './Timeline.scss';
import Experience from './Experience';
import { Container, Row, Col } from 'react-bootstrap';

function Timeline() {
    return(
        <Container fluid className="tlContainer">
            <Row className="justify-content-md-center tlHeaderContainer">
                <Col lg="10">
                    <header className="tlSubHeader">
                        Just Some Of...
                    </header>
                    <header className="tlMainHeader">
                        My Experience
                    </header>
                </Col>
            </Row>
            <Row className="justify-content-md-center tlExperienceContainer">
                <Col lg="10">
                    <Experience />
                </Col>
            </Row>
        </Container>
    )
}

export default Timeline;