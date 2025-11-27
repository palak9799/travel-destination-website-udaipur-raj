import React from 'react';
import { ATTRACTIONS } from '../constants';
import { MapPin, Star } from 'lucide-react';

export const Attractions: React.FC = () => {
  return (
    <section id="attractions" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-2">Discover History</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-royal-900 mb-6">Top Attractions</h3>
          <p className="max-w-2xl mx-auto text-slate-600">
            Immerse yourself in the grandeur of the Mewar dynasty. From lakeside palaces to hilltop fortresses, Udaipur is a treasure trove of architectural marvels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ATTRACTIONS.map((place) => (
            <div key={place.id} className="group bg-stone-50 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={place.imageUrl} 
                  alt={place.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-amber-600 font-bold text-sm flex items-center shadow-sm">
                  <Star size={14} className="mr-1 fill-current" />
                  {place.rating}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-serif font-bold text-royal-900">{place.name}</h4>
                </div>
                
                <div className="flex items-center text-slate-500 text-sm mb-4">
                  <MapPin size={16} className="mr-1 text-amber-500" />
                  {place.location}
                </div>

                <p className="text-slate-600 mb-6 line-clamp-3 text-sm leading-relaxed">
                  {place.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {place.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider font-semibold bg-royal-100 text-royal-800 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="border-t border-stone-200 pt-4 flex justify-between items-center">
                   <span className="text-xs text-slate-400 font-medium">Entry Fee</span>
                   <span className="text-royal-900 font-bold">{place.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
