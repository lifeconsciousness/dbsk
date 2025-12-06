import { useState, FormEvent } from 'react';

export default function Waitlist() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Thanks! You are on the list. (This is a demo)');
    setEmail('');
  };

  return (
    <div id="waitlist" className="bg-brand-dark py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 -ml-20 -mt-20 w-64 h-64 rounded-full bg-brand-blue opacity-10 blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl font-bold text-white mb-4">Join Europe's Robotics Education Revolution</h2>
        <p className="text-slate-400 mb-8 text-lg">
          We're piloting with students at Maastricht University to develop the most accessible entry point into drone and robotics engineering. <br />
          Perfect for schools, universities, and self-learners. Join the waitlist for <strong>20% off</strong> and help build Europe's technical future.
        </p>
        
        <form 
          className="flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto" 
          onSubmit={handleSubmit}
        >
          <input 
            type="email" 
            placeholder="Enter your email" 
            required 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-6 py-4 rounded-lg flex-grow text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-blue shadow-lg" 
          />
          <button 
            type="submit" 
            className="bg-brand-blue text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-600 transition shadow-lg"
          >
            Notify Me
          </button>
        </form>

        <p className="mt-12 text-slate-500 text-sm">
          Built with ❤️ in Maastricht. <br />
          &copy; 2025 DBSK. All rights reserved.
        </p>
      </div>
    </div>
  );
}
