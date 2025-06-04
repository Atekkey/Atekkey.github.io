import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Resume from './pages/Resume';
import SimpleHome from './pages/SimpleHome';

function App() {
  return (
    <Router>
    <Routes>
          <Route path="/" element={<SimpleHome />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Resume" element={<Resume />} />
        </Routes>

    </Router>
  );
}

export default App;
