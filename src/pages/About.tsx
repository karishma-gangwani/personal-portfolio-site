import { portfolioData } from '../data/portfolioData';
import { Award, Globe } from 'lucide-react';

export default function About() {
  return (
    <div className="animate-fade-in max-w-3xl mx-auto">
      <h1 className="text-4xl font-extrabold text-brand-900 mb-8 border-b border-brand-100 pb-4">About Me</h1>
      
      <div className="prose prose-slate max-w-none mb-12">
        <p className="text-lg text-slate-700 leading-relaxed mb-6">
          {portfolioData.about.bio}
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl border border-brand-100 shadow-sm mb-8">
        <h2 className="text-2xl font-bold text-brand-900 mb-6 flex items-center">
          <Award className="w-6 h-6 mr-3 text-brand-600"/> Education & Credentials
        </h2>
        <ul className="space-y-4">
          {portfolioData.about.certifications.map((cert, index) => (
            <li key={index} className="flex items-start">
              <span className="w-2 h-2 mt-2 mr-4 bg-brand-500 rounded-full flex-shrink-0"></span>
              <span className="text-slate-700 font-medium">{cert}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-brand-900 p-8 rounded-2xl border border-brand-800 shadow-sm text-white">
        <h2 className="text-xl font-bold mb-4 flex items-center">
          <Globe className="w-5 h-5 mr-3 text-brand-200"/> Global Perspective
        </h2>
        <p className="text-brand-100 leading-relaxed text-sm">
          I am passionate about traveling, learning new languages, and experiencing different cultures. This global mindset informs how I approach behavioral insights and inclusive communication strategies.
        </p>
      </div>
    </div>
  );
}