import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Resume from './pages/Resume';

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
