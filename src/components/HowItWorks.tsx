export default function HowItWorks() {
  return (
    <div id="how-it-works" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-brand-dark mb-6">Your Learning Path: From Beginner to Builder</h2>
            <p className="text-slate-600 mb-8 text-lg">
              A structured approach that takes anyone—student, educator, or hobbyist—from zero knowledge to flying their own drone. Integrated into classrooms across Europe to develop the next generation of technical talent.
            </p>
            
            <div className="flex gap-4 mb-8">
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-brand-blue text-white font-bold">1</span>
              <div>
                <h4 className="text-lg font-bold">Build the Hardware (No Experience Needed)</h4>
                <p className="text-slate-500">Snap-fit design means anyone can assemble it. No soldering, no special tools. Learn hardware engineering fundamentals hands-on.</p>
              </div>
            </div>
            
            <div className="flex gap-4 mb-8">
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-brand-blue text-white font-bold">2</span>
              <div>
                <h4 className="text-lg font-bold">Learn Programming & Control Systems</h4>
                <p className="text-slate-500">Start with guided setup, progress to Python programming. Learn real robotics concepts—PID control, sensor fusion, and autonomous navigation.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-brand-blue text-white font-bold">3</span>
              <div>
                <h4 className="text-lg font-bold">Fly & Continue Learning</h4>
                <p className="text-slate-500">Master EU regulations, practice safe flight protocols, and join a community of learners. Build expertise that transfers to robotics, aerospace, and beyond.</p>
              </div>
            </div>
          </div>
          <div>
            <img src="/unnamed-4.jpg" 
                 alt="DBSK Components Knolling" 
                 className="rounded-lg shadow-xl rotate-1 hover:rotate-0 transition duration-500 border-4 border-white" />
          </div>
        </div>
      </div>
    </div>
  );
}
