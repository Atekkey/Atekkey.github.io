import './App.css';

// const textColor = "#E6E6E6";
function App() {
  return (
    <div className="App">
      
      <section class="section1">
      Hello! My name is Anand Tekkey, and this is my Portfolio.
      </section>
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
      Third Part
      </section>


    </div>
  );
}

export default App;
