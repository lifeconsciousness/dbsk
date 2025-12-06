export default function Sustainability() {
  return (
    <div id="sustainability" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <img src="./spare set drone.jpg" 
                 alt="DBSK Spare Parts" 
                 className="rounded-lg shadow-lg mx-auto w-3/4 hover:scale-105 transition duration-500" />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-brand-accent font-bold uppercase tracking-wide text-sm mb-2">Built to Last</h2>
            <h2 className="text-3xl font-extrabold text-brand-dark mb-6">Crash? Just Swap & Fly.</h2>
            <p className="text-lg text-slate-600 mb-6">
              Crashes happen. That's part of learning. With DBSK, they don't have to stop the fun.
            </p>
            <p className="text-lg text-slate-600 mb-8">
              Our snap-fit modular design means broken parts are swapped in seconds, not thrown away. 
              Get back in the air faster and keep experimenting without the worry.
            </p>
            <ul className="space-y-2 mb-8 text-slate-500 font-medium">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Affordable Replacement Parts
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                No Tools Required for Assembly
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
