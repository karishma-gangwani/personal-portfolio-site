import { HashRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { portfolioData } from './data/portfolioData';

import Home from './pages/home';
import SciComm from './pages/sciComm';
import Research from './pages/research';
import About from './pages/about';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-brand-50 text-slate-900 font-sans">
        
        <nav className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-brand-100 z-50 shadow-sm">
          <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center">
            <NavLink to="/" className="font-bold text-xl tracking-tight text-brand-900 mb-4 md:mb-0 hover:text-brand-700 transition">
              KSG.
            </NavLink>
            <div className="flex space-x-6 text-sm font-medium text-slate-600">
              <NavLink to="/" className={({isActive}) => isActive ? "text-brand-700" : "hover:text-brand-600 transition"}>Home</NavLink>
              <NavLink to="/scicomm" className={({isActive}) => isActive ? "text-brand-700" : "hover:text-brand-600 transition"}>SciComm</NavLink>
              <NavLink to="/research" className={({isActive}) => isActive ? "text-brand-700" : "hover:text-brand-600 transition"}>Research</NavLink>
              <NavLink to="/about" className={({isActive}) => isActive ? "text-brand-700" : "hover:text-brand-600 transition"}>About & CV</NavLink>
            </div>
          </div>
        </nav>

        <main className="flex-grow max-w-5xl mx-auto w-full px-6 py-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/scicomm" element={<SciComm />} />
            <Route path="/research" element={<Research />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <footer className="bg-brand-900 text-brand-50 py-10 px-6 mt-12">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <span className="font-bold text-xl tracking-tight text-white">Karishma Sanjay Gangwani</span>
              <p className="text-brand-200 text-sm mt-1">Strategic Communications & Data Science</p>
            </div>
            {/* <div className="flex space-x-6">
              <a href={portfolioData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-brand-200 hover:text-white transition">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={portfolioData.socials.github} target="_blank" rel="noopener noreferrer" className="text-brand-200 hover:text-white transition">
                <Github className="w-5 h-5" />
              </a>
              <a href={portfolioData.socials.email} className="text-brand-200 hover:text-white transition">
                <Mail className="w-5 h-5" />
              </a>
            </div> */}
          </div>
        </footer>

      </div>
    </Router>
  );
}