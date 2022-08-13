import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar';
import Generator from './pages/Generator';
import Exercises from './pages/Exercises';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path = '/' element={<Generator />} />
          <Route path = '/exercises' element={<Exercises />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
