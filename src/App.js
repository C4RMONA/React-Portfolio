import React, { useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import About from './components/About';
import Header from './components/Header';
// import Home from './pages/Home';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {

  return (
    <Router>
      <div className='page'>
        <Header />
        <div>
          <Routes className='page'>
            <Route path='/' element={<About />} />
            <Route path='/aboutme' element={<About />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/resume' element={<Resume />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
