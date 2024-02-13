import React from 'react';
import Projects from './Projects';

const ParentComponent = () => {
  return (
    <div className="parent-component" style={{ display: 'flex', justifyContent: 'center' }}>
      <Projects
        icon="tablet"
        title="Garden Loft"
        description="Its senior tablet app which brings connection and belonging to the community."
        githubLink="https://github.com/garden-loft"
        projectLink="https://just-for-us-master.vercel.app/"
        style={{ width: '20%' }}
      />
      <Projects
       icon="truck"
        title="Unido Rental"
        description="Its a website for Truck snow plow rental and its creation is based on the problem of a winter."
        githubLink="https://github.com/unido-rental"
        projectLink="https://unidoo.netlify.app/"
       
        style={{ width: '20%' }}
      />
      <Projects
       icon="person"
        title="Portfolio"
        description="Its about me which showcases my skills and my projects."
        githubLink="https://github.com/your-username"
        projectLink="https://meseret-gebrezgi.vercel.app/"
       
        style={{ width: '20%' }}
      />
    </div>
  );
};

export default ParentComponent;
