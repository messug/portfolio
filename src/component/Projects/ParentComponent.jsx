import React from 'react';
import Projects from './Projects';

const ParentComponent = () => {
  return (
    <div className="parent-component" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', padding: '2rem 1rem' }}>
      <Projects
        icon="tablet"
        title="Garden Loft"
        techStack="React Native • Firebase • VideoSDK"
        description="A senior-friendly tablet app connecting residents through live video calls, social clubs, and daily community events."
        githubLink="https://github.com/garden-loft"
        projectLink="coming.soon/"
        style={{ width: '20%' }}
      />
      <Projects
       icon="truck"
        title="Unido Rental"
        techStack="React • Node.js • Firebase"
        description="A rental management platform built for seasonal truck and snow-plow operations, featuring bookings, availability tracking, and local business tools."
        githubLink="https://github.com/unido-rental"
        projectLink="https://unidoo.netlify.app/"
        style={{ width: '20%' }}
      />
      <Projects
       icon="person"
        title="Portfolio Website"
        techStack="React • Vite • Tailwind CSS"
        description="A clean, fast portfolio showcasing my work, skills, and contact links — designed for a modern, responsive experience."
        githubLink="https://github.com/your-username"
        projectLink="https://meseret-gebrezgi.vercel.app/"
        style={{ width: '20%' }}
      />
    </div>
  );
};

export default ParentComponent;
