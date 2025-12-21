import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import ParticleBackground from './components/ParticleBackground';
import Home from './components/Home';
import EchoChamber from './components/EchoChamber';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen bg-[#050508] text-gray-200 selection:bg-arcane-500 selection:text-white overflow-hidden">
        <ParticleBackground />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/echo-chamber" element={<EchoChamber />} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;