import { portfolioData } from '../data/portfolioData';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="animate-fade-in">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 mb-20">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {portfolioData.home.greeting}
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed max-w-xl">
            {portfolioData.home.description}
          </p>
          <div className="pt-4 flex gap-4">
            <Link to="/about" className="bg-brand-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-brand-700 transition flex items-center shadow-md shadow-brand-200">
              View Full Profile <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
        
        <div className="w-56 h-56 md:w-80 md:h-80 flex-shrink-0">
          <img 
            src="./profile.jpeg" 
            alt="Karishma Gangwani" 
            className="w-full h-full object-cover rounded-full shadow-xl border-4 border-white bg-brand-100"
            onError={(e) => { e.currentTarget.src = "./profile.jpeg" }} 
          />
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-brand-900 mb-8 border-b border-brand-100 pb-2">Areas of Focus</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {portfolioData.home.highlights.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl border border-brand-100 shadow-sm hover:border-brand-300 transition-colors">
              <h3 className="font-bold text-brand-700 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}