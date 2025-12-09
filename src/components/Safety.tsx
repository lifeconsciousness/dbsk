export default function Safety() {
  return (
    <div id="safety" className="py-24 bg-white border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-green-600 font-bold uppercase tracking-wide text-sm">Safety First</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold text-brand-dark sm:text-4xl">
            Built for Safe Learning
          </p>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            DBSK prioritizes safety at every level—from comprehensive education to thoughtful hardware design. Learn responsibly and fly with confidence.
          </p>
        </div>

        {/* Safety Guarantee Box */}
        <div className="mb-12 bg-gradient-to-r from-blue-50 via-cyan-50 to-blue-50 border-2 border-blue-400 rounded-2xl shadow-lg p-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <svg className="w-8 h-8 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <h3 className="text-3xl font-bold text-slate-800">Safety-First Design Philosophy</h3>
          </div>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
            DBSK isn't just safe by accident—every component, lesson, and design decision prioritizes student safety while delivering authentic, professional-grade drone education. <span className="font-semibold text-brand-blue">Safe enough for schools, sophisticated enough for real learning.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Safety Education */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition">
            <div className="flex items-center justify-center h-14 w-14 rounded-full bg-red-100 text-red-600 mb-4">
              <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-brand-dark mb-2">Comprehensive Safety Training</h3>
            <p className="text-slate-600">Students receive thorough instruction on fire safety, battery handling, propeller safety, and workspace best practices before building begins.</p>
          </div>

          {/* Protective Equipment */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition">
            <div className="flex items-center justify-center h-14 w-14 rounded-full bg-blue-100 text-brand-blue mb-4">
              <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-brand-dark mb-2">Protective Glasses Included</h3>
            <p className="text-slate-600">Every kit comes with safety glasses to protect students during assembly and flight operations, establishing good safety habits from day one.</p>
          </div>

          {/* Regulations Education */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition">
            <div className="flex items-center justify-center h-14 w-14 rounded-full bg-purple-100 text-purple-600 mb-4">
              <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-brand-dark mb-2">Legal & Ethical Training</h3>
            <p className="text-slate-600">Integrated curriculum covers EU drone regulations, altitude restrictions, no-fly zones, privacy laws, and responsible piloting—preparing students to fly legally and ethically.</p>
          </div>

          {/* Hardware Restrictions */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition">
            <div className="flex items-center justify-center h-14 w-14 rounded-full bg-orange-100 text-orange-600 mb-4">
              <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-brand-dark mb-2">Safety-Restricted Flight</h3>
            <p className="text-slate-600">The flight controller is pre-configured with safety restrictions including altitude limits and geofencing capabilities, creating a controlled learning environment.</p>
          </div>

          {/* Sub-250g Classification */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition">
            <div className="flex items-center justify-center h-14 w-14 rounded-full bg-green-100 text-green-600 mb-4">
              <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-brand-dark mb-2">Sub-250g Toy Classification</h3>
            <p className="text-slate-600">Under 250 grams means no registration required under EU regulations and classified as a toy—perfect for educational settings with minimal bureaucracy.</p>
          </div>

          {/* Assembly Safety */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition">
            <div className="flex items-center justify-center h-14 w-14 rounded-full bg-indigo-100 text-indigo-600 mb-4">
              <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-brand-dark mb-2">No-Solder Design</h3>
            <p className="text-slate-600">Modular snap-fit assembly eliminates dangerous tools and heat sources, making it safe for classrooms while teaching real engineering principles.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
