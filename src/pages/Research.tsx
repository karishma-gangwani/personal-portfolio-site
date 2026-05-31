import { portfolioData } from '../data/portfolioData';
import { BookOpen } from 'lucide-react';

export default function Research() {
  return (
    <div className="animate-fade-in max-w-4xl mx-auto">
      <div className="mb-12 border-b border-brand-100 pb-8">
        <h1 className="text-4xl font-extrabold text-brand-900 mb-4 flex items-center">
          <BookOpen className="w-8 h-8 mr-3 text-brand-600" /> Research & Data Strategy
        </h1>
        <p className="text-lg text-slate-700">Peer-reviewed publications, qualitative market analysis, and population-scale data management.</p>
      </div>

      <div className="grid gap-6">
        {portfolioData.research.map((paper) => (
          <div key={paper.id} className="bg-white p-8 rounded-xl border border-brand-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-brand-900 mb-1">{paper.title}</h3>
                <p className="text-sm font-medium text-slate-500">{paper.role} • {paper.year}</p>
              </div>
            </div>
            <p className="text-slate-700 text-sm mb-6 leading-relaxed">{paper.description}</p>
            <div className="flex gap-2 flex-wrap">
              {paper.tags.map(tag => (
                <span key={tag} className="bg-brand-50 text-brand-700 border border-brand-200 text-xs px-3 py-1 rounded-full font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}