import React from 'react';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://picsum.photos/id/1015/1920/1080")', // Using Lake type image
        }}
      >
        <div className="absolute inset-0 bg-royal-900/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-royal-900/90"></div>
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-center text-center text-white">
        <h2 className="text-amber-400 font-bold tracking-[0.2em] uppercase mb-4 animate-[fadeInDown_1s_ease-out]">Welcome to Rajasthan</h2>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 leading-tight drop-shadow-2xl animate-[fadeInUp_1s_ease-out_0.3s_both]">
          Udaipur
        </h1>
        <p className="text-lg md:text-2xl font-light max-w-2xl text-stone-100 mb-10 leading-relaxed animate-[fadeInUp_1s_ease-out_0.6s_both]">
          The Venice of the East. A city of lakes, palaces, and timeless royal heritage.
        </p>
        
        <button 
          onClick={() => document.getElementById('attractions')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-amber-600 text-white px-8 py-3 rounded-full font-bold uppercase tracking-wider hover:bg-amber-700 transition-all hover:scale-105 shadow-lg animate-[fadeInUp_1s_ease-out_0.9s_both]"
        >
          Explore the City
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/70">
        <ChevronDown size={32} />
      </div>
    </div>
  );
};
