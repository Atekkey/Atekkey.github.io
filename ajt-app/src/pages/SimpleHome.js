import React from 'react';
import { Link } from 'react-router-dom';

const SimpleHome = () => {
  return (
    <div className="app">
      <div class="app-header">
        Home
      </div>
    
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
                      <Link to="/Resume" className="link" style={{color: "#000000FF"}}>Resume </Link>
              </div>
          </div>

          <div class="column" >
          <a href = "mailto:anand@tekkey.net"> <img src= "PNGs/gmail2_edit.png" alt="anand@tekkey.net" style={{ width: "10vw", height: "10vw", marginLeft:"-2vw"}}></img> </a>
          </div>

          <div class="column" >
            <img src= "PNGs/uiuc1_edit.png" alt="UIUC Logo" style={{ width: "15vw", height: "15vw", margin:"-4vw"}} />
          </div>

          <div class="column">
            <a href = "https://github.com/atekkey"> <img src= "PNGs/GH3_edit.png" alt="github.com/atekkey" style={{ width: "10vw", height: "10vw", marginRight:"-2vw"}}></img> </a>
          </div>
          <div class="column" >
            <a href = "https://linkedin.com/in/atekkey"> <img src= "PNGs/LI_edit.png" alt="linkedin.com/in/atekkey" style={{ width: "10vw", height: "10vw" }}></img> </a>
          </div>

        </div>

      </div>


    </div>
  );
};

export default SimpleHome;
