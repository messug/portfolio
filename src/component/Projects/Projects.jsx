import React from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import './project.css';



const Projects = ({icon, title, description, githubLink, projectLink,  }) => {

const handleGithubIconClick = () => {
  window.location.href = githubLink;
  };
const handleGlobeIconClick = () => {
    window.location.href = projectLink;
  };

return (
    <Card className="project-card">
     
    <CardBody>
          <CardTitle tag="h5" className="card-title">{title}</CardTitle>
        <CardText className="card-description">{description}</CardText>
        <div className="icon-container">
          <a href="#" className="github-icon" onClick={handleGithubIconClick}>
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="#" className="globe-icon" onClick={handleGlobeIconClick}>
            <FontAwesomeIcon icon={faGlobe}/>
          </a>
        </div>
        
      
      </CardBody>
    </Card>
  );
};

export default Projects;
