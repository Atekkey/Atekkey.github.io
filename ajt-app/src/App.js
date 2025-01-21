import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Resume from './pages/Resume';

// const textColor = "#E6E6E6";
function App() {
  return (
    <Router>
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Resume" element={<Resume />} />
        </Routes>

    </Router>
  );
}

export default App;
