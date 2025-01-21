import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (

    <div className="App">

      <div class="container">

        <div class="column"> 
          Hello! My name is <p1>Anand Tekkey</p1>,<br></br> and this is my Portfolio.
        </div>

        <div class="column">
            <div className="resumebox">
                    <Link to="/Resume" className="link" >Resume </Link>
            </div>
        </div>
        
        <div class="column">
            <a href = "https://github.com/atekkey"> <img src= "PNGs/GH3.png" alt="github.com/atekkey" width = "100" height = "100"></img> </a>
          </div>
        <div class="column" >
          <a href = "https://linkedin.com/in/atekkey"> <img src= "PNGs/LI.png" alt="linkedin.com/in/atekkey" width = "100" height = "100"></img> </a>
          </div>
        </div>



      <section class="midsection1">
      
      </section>
      <section class="section2">
      <div class="head1"> Minesweeper </div>
        <div class="container">
          <div class="columnLeft"> {/* Left Column */}
            • Built the classic game Minesweeper using Python 
              and Object Oriented Programming <br></br> 
            • Developed a prototype version in Terminal, and a UI based final version  <br></br>
            • Implemented advanced features such as flood-filling 0's, Chording, & Difficulty Levels <br></br>
          </div>

          <div class="column">
            <img src="PNGs/MSterminal.png" alt="Minesweeper in Terminal" width="180" height="150"/> 
            <img src="PNGs/MS1.png" alt="Minesweeper Ex 2" width="220" height="180"/>
            </div>
          <div class="columnRight" >
          <img src="PNGs/MS2.png" alt="Minesweeper Ex 3" width="280" height="220"/>
          </div>
        </div>
      
      </section>

      <section class="section3">
      
      </section>


    </div>



  );
};

export default Home;
