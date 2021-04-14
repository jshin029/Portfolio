import React from 'react';
import './Home.scss';
import { Container, Row, Col } from 'react-bootstrap';

function Home(){
    return(
        <Container fluid className="homeContainer">
            <Row className="justify-content-md-center align-items-center homeLeft">
                <Col lg="10">
                    <div>
                        <p className="homeIntroHeader">
                            <span className="homeTextColor">Hey, </span> 
                            it's me
                        </p>
                        <header className="homeHeader">
                            John Shin
                        </header>
                        <p className="homeDescriptionText">
                            Software Engineer & Tea Enthusiast of the matcha variety
                        </p>
                    </div>
                    <div className="homeButtonContainer">
                        <a className="homeButton homeButtonResume" href="https://drive.google.com/file/d/1yczD-RztvU7Tw1g70Xe4epzk4GTZcqgL/view?usp=sharing">
                            Resume
                        </a>
                        <a className="homeButton homeButtonChat" href="https://www.linkedin.com/in/john-shin029/">
                            Let's Chat
                        </a>
                    </div>
                </Col>
            </Row>
            <div className="homeRight">
            </div>
        </Container>
    );
}

export default Home;