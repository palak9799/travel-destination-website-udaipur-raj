import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Attractions } from './components/Attractions';
import { Dining } from './components/Dining';
import { Activities } from './components/Activities';
import { Footer } from './components/Footer';
import { Assistant } from './components/Assistant';

function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-amber-200 selection:text-royal-900">
      <Navbar />
      <Hero />
      <main>
        <Attractions />
        <Dining />
        <Activities />
      </main>
      <Footer />
      <Assistant />
    </div>
  );
}

export default App;
