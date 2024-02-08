// Projects.jsx

import React from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button
} from 'reactstrap';
import './project.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import {  faGlobe } from '@fortawesome/free-solid-svg-icons';

const Projects = ({ title }) => {
  return (
    <Card className="project-card" style={{ width: '18rem', height: '23rem' }}>
      <CardBody>
        <CardTitle tag="h5">{title}</CardTitle>
        <CardText>
        </CardText>
        <Button href="#" color="black"><FontAwesomeIcon icon={faGithub} /></Button>
        <Button href="#" color="black"> <FontAwesomeIcon icon={faGlobe}/></Button>
      </CardBody>
    </Card>
 );
};

export default Projects;




