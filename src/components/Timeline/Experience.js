import React from 'react';
import './Experience.scss';
import TLCard from '../Common/TLCard/TLCard';
import { Container, Row, Col } from 'react-bootstrap';


import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

const descriptions = [
    "As a part of the Air Missile Defense Radar divison, I work on different components of the radar processesing software using C++, Jenkins, and Gtest.",
    "During the summer of 2019, I was working on building new features for custom chatbots built with React and Spring. One of the main features I developed was adding cross language support for our chatbots using GCP's language api. Several REST endpoints were created which allowed the bots to support queries sent in any language and respond accordingly.",
    "During the MLH hackathon season of 2019-2020, I worked as a Web Development Lead for both Cutie Hack and Citrus Hack. Using Figma and React, I created and implemented the mockups for the frontend. For user authentication/registration, we used Redux with JWT to validate our requests as well as maintaining user sessions. This web app was used to manage applications from 500+ people."
]

const useStyles = makeStyles(() => ({
    dummyEntry: {
        display: 'none',
    },
    dot: {
        backgroundColor: '#FF697C',
    }
  }));

function Experience(){
    const classes = useStyles();
    return(
        <div className="experienceContainer">
            <Timeline align="alternate">
                {/* timeline item placeholder to start on left */}
                <TimelineItem className={classes.dummyEntry}/>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot className={classes.dot}>
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <TLCard 
                            title={"Raytheon"}
                            date={"Sept 2020 - Present"}
                            description={descriptions[0]}
                        />
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot>
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <TLCard 
                            title={"SmartBot360"}
                            date={"Jun 2019 - Nov 2019"}
                            description={descriptions[1]}
                        />
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                    <TimelineDot >
                    </TimelineDot>
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <TLCard 
                            title={"CitrusHack"}
                            date={"Jun 2019 - May 2020"}
                            description={descriptions[2]}
                        />
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>
    )
}

export default Experience;