import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import About from './components/About';
import ScheduleSection from './components/ScheduleSection';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <About />
      <ScheduleSection />
    </div>
  );
}

export default App;