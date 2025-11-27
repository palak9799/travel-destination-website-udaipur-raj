import React from 'react';
import { DINING } from '../constants';
import { Utensils } from 'lucide-react';

export const Dining: React.FC = () => {
  return (
    <section id="dining" className="py-20 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-2">Culinary Delights</h2>
            <h3 className="text-4xl font-serif font-bold text-royal-900 mb-6">Taste of Rajasthan</h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Udaipur offers a gastronomic journey ranging from traditional Rajasthani thalis (platters) to rooftop dining with breathtaking lake views. Don't miss the Dal Baati Churma!
            </p>
            
            <div className="space-y-6">
              {DINING.map((spot) => (
                <div key={spot.id} className="bg-white p-4 rounded-xl shadow-sm border border-stone-200 flex gap-4 transition-transform hover:-translate-y-1 duration-300">
                  <img src={spot.imageUrl} alt={spot.name} className="w-24 h-24 rounded-lg object-cover bg-stone-200" />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h4 className="font-serif font-bold text-lg text-royal-900">{spot.name}</h4>
                      <span className="text-amber-500 font-bold text-sm">★ {spot.rating}</span>
                    </div>
                    <p className="text-xs font-semibold text-amber-600 uppercase mb-1">{spot.cuisine}</p>
                    <p className="text-sm text-slate-600 mb-2 line-clamp-2">{spot.description}</p>
                    <p className="text-xs text-slate-400">{spot.priceRange}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative h-[600px] hidden md:block rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://picsum.photos/id/493/800/1200" 
              alt="Dining with a view" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <div className="text-white">
                <Utensils className="mb-4 text-amber-500" size={32} />
                <h3 className="text-2xl font-serif font-bold mb-2">Rooftop Ambiance</h3>
                <p className="text-stone-200 text-sm">Experience dining under the stars with the illuminated City Palace as your backdrop.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
