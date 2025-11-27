import React from 'react';
import { Castle, Instagram, Facebook, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-royal-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-4 md:mb-0">
            <Castle size={32} className="text-amber-500 mr-2" />
            <span className="text-2xl font-serif font-bold">Udaipur</span>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-amber-500 transition-colors"><Instagram size={24} /></a>
            <a href="#" className="hover:text-amber-500 transition-colors"><Facebook size={24} /></a>
            <a href="#" className="hover:text-amber-500 transition-colors"><Twitter size={24} /></a>
          </div>
        </div>
        
        <div className="border-t border-royal-800 pt-8 text-center text-royal-200 text-sm">
          <p className="mb-2">© {new Date().getFullYear()} Udaipur Tourism Guide. All rights reserved.</p>
          <p>Created for travelers who seek the royal experience.</p>
          <p className="mt-4 text-xs text-royal-400">Photos by Picsum. Information is illustrative.</p>
        </div>
      </div>
    </footer>
  );
};
