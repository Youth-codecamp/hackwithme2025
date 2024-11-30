import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import About from './components/About';
import ScheduleSection from './components/ScheduleSection';
import Partners from './components/Partners';
import GhostBot from './components/GhostBot';
import Involvement from './components/Involvement';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <About />
      <Involvement />
      <ScheduleSection />
      <Partners />
      <GhostBot />
    </div>
  );
}

export default App;