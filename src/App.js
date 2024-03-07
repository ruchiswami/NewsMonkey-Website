import { useState } from 'react';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import About from './components/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

function App() {
  const[progress, setProgress] = useState(0);
  
  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
        color='#f11946'
        progress={progress}
      
      />
        <Routes>
         
          <Route path="/about" element={<About />} />
          <Route path="/business" element={<News setProgress={setProgress} key ="business" pageSize={9} country="in" category="business" />} />
          <Route path="/entertainment" element={<News setProgress={setProgress}   key="entertainment" pageSize={9} country="in" category="entertainment" />} />
          <Route path="/home" element={<News setProgress={setProgress}   key="general" pageSize={9} country="in" category="general" />} />
          <Route path="/general" element={<News setProgress={setProgress}   key="general" pageSize={9} country="in" category="general" />} />
          <Route path="/science" element={<News setProgress={setProgress}  key= "science"pageSize={9} country="in" category="science" />} />
          <Route path="/sports" element={<News setProgress={setProgress} key ="sports"pageSize={9} country="in" category="sports" />} />
          <Route path="/technology" element={<News setProgress={setProgress} key="technology"pageSize={9} country="in" category="technology" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
