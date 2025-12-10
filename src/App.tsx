import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Safety from './components/Safety'
import Waitlist from './components/Waitlist'
import LearningPlatform from './components/LearningPlatform'
import Shop from './components/Shop'

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'learning' | 'shop'>('home')

  return (
    <div className="bg-slate-50 text-slate-900 font-sans">
      {currentPage === 'shop' ? (
        <Shop onNavigate={setCurrentPage} />
      ) : currentPage === 'home' ? (
        <>
          <Navbar onNavigate={setCurrentPage} />
          <Hero />
          <Features />

          {/* Learning Platform CTA */}
          <div className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 border-y border-slate-200">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-200 p-12">
                <h2 className="text-brand-blue font-bold uppercase tracking-wide text-sm mb-2">
                  Interactive Learning Platform
                </h2>
                <h2 className="text-4xl font-extrabold text-brand-dark mb-6">
                  Start Your Robotics Journey Today
                </h2>
                <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                  From zero to flying in hours, not weeks. Our structured curriculum guides complete beginners through drone assembly, programming, and flight—building the technical skills that drive innovation. Perfect for schools, universities, and independent learners.
                </p>
                <button 
                  onClick={() => setCurrentPage('learning')}
                  className="bg-brand-blue text-white px-8 py-4 rounded-lg text-lg font-bold shadow-lg hover:bg-blue-700 hover:shadow-xl transition transform hover:-translate-y-1"
                >
                  Start Learning Now →
                </button>
              </div>
            </div>
          </div>
          
          <Safety />
          
          
          <HowItWorks />
          {/* <Sustainability /> */}
          <Waitlist />
        </>
      ) : (
        <LearningPlatform onNavigate={setCurrentPage} />
      )}
    </div>
  )
}

export default App
