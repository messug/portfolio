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



const Projects = ({icon, title, description, techStack, githubLink, projectLink,  }) => {

const handleGithubIconClick = (e) => {
  e.preventDefault();
  window.location.href = githubLink;
  };
const handleGlobeIconClick = (e) => {
  e.preventDefault();
    window.location.href = projectLink;
  };

return (
    <Card className="project-card">

    <CardBody>
          <CardTitle tag="h5" className="card-title">{title}</CardTitle>
        {techStack && <p className="tech-stack-line">{techStack}</p>}
        <CardText className="card-description">{description}</CardText>
        <div className="icon-container">
          <a href={githubLink} className="github-icon" onClick={handleGithubIconClick} target="_blank" rel="noopener noreferrer" aria-label={`${title} GitHub repository`}>
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href={projectLink} className="globe-icon" onClick={handleGlobeIconClick} target="_blank" rel="noopener noreferrer" aria-label={`${title} live demo`}>
            <FontAwesomeIcon icon={faGlobe}/>
          </a>
        </div>


      </CardBody>
    </Card>
  );
};

export default Projects;
