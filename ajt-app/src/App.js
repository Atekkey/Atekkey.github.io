import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Resume from './pages/Resume';
import SimpleHome from './pages/SimpleHome';
import Home3 from './pages/Home3';

function App() {
  return (
    <Router>
    <Routes>
          <Route path="/" element={<Home3 />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Home2" element={<SimpleHome />} />
          <Route path="/Resume" element={<Resume />} />
        </Routes>

    </Router>
  );
}

export default App;
