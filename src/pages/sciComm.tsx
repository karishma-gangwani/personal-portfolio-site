import { portfolioData } from '../data/portfolioData';
import { Mic } from 'lucide-react';

export default function SciComm() {
  return (
    <div className="animate-fade-in max-w-4xl mx-auto">
      <div className="mb-12 border-b border-brand-100 pb-8">
        <h1 className="text-4xl font-extrabold text-brand-900 mb-4 flex items-center">
          <Mic className="w-8 h-8 mr-3 text-brand-600" /> Science Communication
        </h1>
        <p className="text-lg text-slate-700">Bridging the gap between complex data and human understanding through storytelling, education, and behavioral insights.</p>
      </div>

      <div className="space-y-8">
        {portfolioData.scicomm.map((item) => (
          <div key={item.id} className="bg-white p-8 rounded-2xl border border-brand-100 shadow-sm hover:shadow-md transition">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-3 block">
              {item.type}
            </span>
            <h2 className="text-2xl font-bold text-brand-900 mb-2">{item.title}</h2>
            <p className="text-sm font-semibold text-slate-500 mb-5">{item.role}</p>
            <p className="text-slate-700 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}