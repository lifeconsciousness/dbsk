import { useState } from 'react';

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-brand-dark mb-6">
          Your Gateway to <span className="text-brand-blue">Drones & Robotics</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-500 mb-10">
          No experience needed. No soldering required. Just plug and learn.<br />
          The educational drone kit empowering Europe's next generation of engineers.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#waitlist" className="bg-brand-blue text-white px-8 py-4 rounded-lg text-lg font-bold shadow-lg hover:bg-blue-700 transition transform hover:-translate-y-1">
            Join the Waitlist
          </a>
          <a href="#features" className="bg-white text-slate-700 border border-slate-300 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-slate-50 transition">
            Learn More
          </a>
        </div>
        
        <div className="mt-16 relative max-w-3xl mx-auto">
          <div className="relative bg-slate-900 rounded-xl shadow-2xl overflow-hidden aspect-video group cursor-pointer" onClick={() => setIsPlaying(true)}>
            {!isPlaying ? (
              <>
                <img 
                  src="./dron kit tech.jpg" 
                  alt="DBSK Starter Kit with Manual" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition flex items-center justify-center">
                  <div className="w-20 h-20 bg-brand-blue rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all shadow-2xl">
                    <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <p className="text-white text-sm font-semibold">See It In Action</p>
                </div>
              </>
            ) : (
              <video
                src="./advertisement.mp4"
                className="w-full h-full"
                controls
                autoPlay
                controlsList="nodownload"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
