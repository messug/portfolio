import React from "react";
import './skill.css'
export default function Skills(){

  const skills = [
    {
      category: "Frontend Development",
      items: ["React", "React Native (Expo)", "JavaScript", "TypeScript", "Responsive Design", "Figma", "Cross-Platform UI/UX"]
    },
    {
      category: "Backend & Cloud",
      items: ["Firebase", "Supabase", "Node.js", "RESTful APIs", "Authentication", "Real-Time Data Sync"]
    },
    {
      category: "IoT & Smart Systems",
      items: ["Home Assistant", "Phyn Water Sensors", "Zooz Z-Wave Switches", "Tochtech Motion Sensors", "Smart Home Automation"]
    },
    {
      category: "APIs & Integrations",
      items: ["VideoSDK", "WebRTC", "Zoom API", "YouTube API", "Apple Store Connect", "TestFlight Deployment"]
    },
    {
      category: "DevOps & Tools",
      items: ["Git", "GitHub", "CI/CD (Expo EAS)", "Version Control", "Debugging", "Performance Optimization"]
    },
    {
      category: "Databases",
      items: ["Firestore", "Supabase SQL", "Real-Time Syncing"]
    },
    {
      category: "Other Skills",
      items: ["Agile Development", "Accessibility Design", "User Testing", "Troubleshooting", "Problem Solving", "Collaboration"]
    }
  ];

  return (
<section id='skills'>
  <div className="skills-wrapper">
   <h2>Technical Skills</h2>
   <div className="skills-container">
     {skills.map((skillGroup, index) => (
       <div key={index} className="skill-category">
         <h3>{skillGroup.category}</h3>
         <div className="skill-items">
           {skillGroup.items.map((skill, idx) => (
             <span key={idx} className="skill-tag">{skill}</span>
           ))}
         </div>
       </div>
     ))}
   </div>
  </div>
</section>
   );
}

