import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <footer className="footer">
        <p>© 2025 Your Name. Built with React.js & CSS</p>
      </footer>
    </div>
  );
}

export default App;