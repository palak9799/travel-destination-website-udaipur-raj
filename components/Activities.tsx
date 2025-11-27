import React from 'react';
import { ACTIVITIES, MARKETS } from '../constants';
import { ShoppingBag, Calendar } from 'lucide-react';

export const Activities: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Shopping Section */}
      <section id="shopping" className="py-20 border-b border-stone-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-2">Vibrant Bazaars</h2>
            <h3 className="text-4xl font-serif font-bold text-royal-900">Shop Local</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {MARKETS.map((market) => (
              <div key={market.id} className="relative overflow-hidden rounded-xl group h-80">
                <img src={market.imageUrl} alt={market.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-royal-900/80 opacity-90 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-8 text-white">
                  <ShoppingBag className="mb-4 text-amber-400" size={32} />
                  <h4 className="text-2xl font-serif font-bold mb-2">{market.name}</h4>
                  <p className="text-stone-300 mb-4">{market.specialty}</p>
                  <p className="text-sm font-medium text-amber-400">{market.timing}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="activities" className="py-20 bg-royal-50">
        <div className="container mx-auto px-4">
           <div className="text-center mb-16">
            <h2 className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-2">Experiences</h2>
            <h3 className="text-4xl font-serif font-bold text-royal-900">Things to Do</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {ACTIVITIES.map((activity) => (
              <div key={activity.id} className="bg-white rounded-xl overflow-hidden shadow-md flex flex-col md:flex-row h-full md:h-64">
                <div className="md:w-2/5 h-48 md:h-full relative">
                  <img src={activity.imageUrl} alt={activity.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 md:w-3/5 flex flex-col justify-center">
                  <h4 className="text-xl font-serif font-bold text-royal-900 mb-2">{activity.name}</h4>
                  <p className="text-slate-600 text-sm mb-4">{activity.description}</p>
                  
                  <div className="mt-auto space-y-2">
                    <div className="flex items-center text-sm text-slate-500">
                      <Calendar size={16} className="mr-2 text-amber-500" />
                      {activity.duration}
                    </div>
                     <div className="flex items-center justify-between mt-4 pt-4 border-t border-stone-100">
                      <span className="text-xs uppercase font-bold text-slate-400">Cost</span>
                      <span className="text-royal-900 font-bold">{activity.cost}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
