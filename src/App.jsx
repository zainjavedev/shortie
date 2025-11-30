import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div className="page">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
      </main>
      <Contact />
    </div>
  );
}

export default App;
