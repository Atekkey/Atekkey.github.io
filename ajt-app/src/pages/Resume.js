import React from 'react';


const About = () => {
  return (

    <div className= "App">
        <embed
        src={"curResume.pdf"}
        style={{ width: '100%', height: '900px', border: 'none' }}
        title="Resume"
      />
    </div>

  );
};

export default About;

