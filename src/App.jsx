import React from 'react';
import MarqueeBanner from './components/MarqueeBanner';
import HeroSection from './components/HeroSection';
import GuessSection from './components/GuessSection';
import FeelSection from './components/FeelSection';

function App() {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <MarqueeBanner />
      <HeroSection />
      <GuessSection />
      <FeelSection />
    </div>
  );
}

export default App;
