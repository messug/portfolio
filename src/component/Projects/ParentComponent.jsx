import React from 'react';
import Projects from './Projects';

const ParentComponent = () => {
  return (
    <div className="parent-component" style={{ display: 'flex', justifyContent: 'center' }}>
      <Projects title="Garden Loft" style={{ width: '20%' }} />
      <Projects title="Unido Rental" style={{ width: '20%' }} />
      <Projects title="Portfolio" style={{ width: '20%' }} />
    </div>
  );
};

export default ParentComponent;
