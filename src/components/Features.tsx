export default function Features() {
  return (
    <div id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-accent font-bold uppercase tracking-wide text-sm">Why DBSK?</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold text-brand-dark sm:text-4xl">
            Your First Step into Drone & Robotics Engineering
          </p>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            Designed for classrooms, universities, and self-learners. Build technical skills that matter for Europe's future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-brand-blue mx-auto mb-6">
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-brand-dark mb-2">Zero Barriers to Entry</h3>
            <p className="text-slate-500">No prior experience required. No soldering, no complex tools. Anyone can start learning drone technology within minutes—perfect for classrooms and first-time builders.</p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-600 mx-auto mb-6">
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-brand-dark mb-2">Classroom-Safe & Legal</h3>
            <p className="text-slate-500">Safe for educational environments. The drone's weight is under 250 grams means it is perfectly fine to use according to EU regulations.</p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-orange-100 text-orange-600 mx-auto mb-6">
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-brand-dark mb-2">Industry-Standard Education</h3>
            <p className="text-slate-500">Learn with real professional tools—Betaflight, Python, aerodynamics, and control systems. Build the technical foundation Europe needs for robotics leadership.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
