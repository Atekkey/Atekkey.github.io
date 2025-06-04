import React from 'react';
import { Link } from 'react-router-dom';

const SimpleHome = () => {
  return (

    <div className="homebg">
      
      <div class="container">

        <div class="column"> 
          <mainHead><doubleFont>Hello!</doubleFont><br></br> My name is <colName>Anand Tekkey</colName>,<br></br> and this is my Portfolio.</mainHead>
        </div>

        <div class="column">
            <img src="PNGs/anandFace.JPG" alt="Anand Tekkey" style={{ width: "30vw", height: "auto" }} />
        </div>


      </div>
      
      <div class="container">
        
        <div class="column">
            <div className="resumebox" >
                    <Link to="/Resume" className="link" style={{color: "#1a1a1afa"}}>Resume </Link>
            </div>
        </div>

        <div class="column">
          <a href = "https://github.com/atekkey"> <img src= "PNGs/GH3_edit.png" alt="github.com/atekkey" style={{ width: "10vw", height: "auto"}}></img> </a>
        </div>
        <div class="column" >
          <a href = "https://linkedin.com/in/atekkey"> <img src= "PNGs/LI_edit.png" alt="linkedin.com/in/atekkey" style={{ width: "10vw", height: "auto" }}></img> </a>
        </div>

      </div>



      

    </div>
  );
};

export default SimpleHome;
