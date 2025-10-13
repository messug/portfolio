import React from 'react';
import Projects from './Projects';

const ParentComponent = () => {
  return (
    <div className="parent-component" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', padding: '2rem 1rem' }}>
      <Projects
        icon="tablet"
        title="Garden Loft"
        description="A senior-friendly tablet app that builds community through real-time video calls, social clubs, and daily activities. Designed with accessibility and simplicity to make digital connection easy for everyone."
        githubLink="https://github.com/garden-loft"
        projectLink="coming.soon/"
        style={{ width: '20%' }}
      />
      <Projects
       icon="truck"
        title="Unido Rental"
        description="A truck and snow-plow rental web app designed to solve seasonal challenges. It includes booking management, location-based availability, and a smooth user experience for local businesses."
        githubLink="https://github.com/unido-rental"
        projectLink="https://unidoo.netlify.app/"

        style={{ width: '20%' }}
      />
      <Projects
       icon="person"
        title="Personal Portfolio"
        description="A showcase of my skills, design vision, and development journey. Fully responsive with clean UI, subtle animations, and optimized performance for fast loading across all devices."
        githubLink="https://github.com/your-username"
        projectLink="https://meseret-gebrezgi.vercel.app/"

        style={{ width: '20%' }}
      />
    </div>
  );
};

export default ParentComponent;
