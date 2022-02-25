import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Strong from './Views/Strong'
import Smart from './Views/Smart'
import Welcome from './Views/Welcome'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} /> 
        <Route path="strong" element={<Strong />} />
        <Route path="smart" element={<Smart />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
