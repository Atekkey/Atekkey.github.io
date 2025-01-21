import React from 'react';


const resume = () => {
  return (

    <div className= "App">
        {/* <embed
        src={"curResume.pdf"}
        style={{ width: '100%', height: '500px', border: 'none' }}
        title="Resume"
      /> */}

      <iframe class="pdf"
      title = "Resume" 
      src="./curResume.pdf"
      width="800" height="1000">
      </iframe>
      
    </div>

  );
};

export default resume;

