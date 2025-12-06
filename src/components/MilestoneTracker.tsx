interface Milestone {
  id: number;
  title: string;
  description: string;
  threshold: number;
  icon: string;
  unlocked: boolean;
}

interface MilestoneTrackerProps {
  completedLessons: number;
  totalLessons: number;
  currentChapter: string;
}

export default function MilestoneTracker({ completedLessons, totalLessons, currentChapter }: MilestoneTrackerProps) {
  const milestones: Milestone[] = [
    {
      id: 1,
      title: "First Steps",
      description: "Complete your first lesson",
      threshold: 1,
      icon: "🎯",
      unlocked: completedLessons >= 1
    },
    {
      id: 2,
      title: "Getting Started",
      description: "Complete the first chapter",
      threshold: 4,
      icon: "🚀",
      unlocked: completedLessons >= 4
    },
    {
      id: 3,
      title: "Builder",
      description: "Complete 10 lessons",
      threshold: 10,
      icon: "🔧",
      unlocked: completedLessons >= 10
    },
    {
      id: 4,
      title: "Engineer",
      description: "Complete 20 lessons",
      threshold: 20,
      icon: "⚡",
      unlocked: completedLessons >= 20
    },
    {
      id: 5,
      title: "Drone Master",
      description: "Complete all lessons",
      threshold: totalLessons,
      icon: "🏆",
      unlocked: completedLessons >= totalLessons
    }
  ];

  const progress = (completedLessons / totalLessons) * 100;
  const nextMilestone = milestones.find(m => !m.unlocked);

  return (
    <div className="space-y-4">
      {/* Progress Overview */}
      <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold mb-1">Your Learning Journey</h3>
            <p className="text-blue-100">Currently in: {currentChapter}</p>
          </div>
          <div className="text-right">
            <div className="text-4xl font-extrabold">{Math.round(progress)}%</div>
            <p className="text-sm text-blue-100">Complete</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="relative">
          <div className="w-full bg-blue-900/30 rounded-full h-3 overflow-hidden">
            <div 
              className="bg-white h-full rounded-full transition-all duration-500 ease-out shadow-lg"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between mt-2 text-sm text-blue-100">
            <span>{completedLessons} lessons completed</span>
            <span>{totalLessons - completedLessons} remaining</span>
          </div>
        </div>

        {/* Next Milestone Preview */}
        {nextMilestone && (
          <div className="mt-4 bg-white/10 backdrop-blur-sm rounded-lg p-3 flex items-center gap-3">
            <div className="text-3xl">{nextMilestone.icon}</div>
            <div>
              <p className="text-xs text-blue-100 font-medium">Next Milestone</p>
              <p className="font-semibold">{nextMilestone.title}</p>
              <p className="text-xs text-blue-200">{nextMilestone.threshold - completedLessons} more lessons to go!</p>
            </div>
          </div>
        )}
      </div>

      {/* Milestones Grid */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h4 className="font-bold text-lg text-slate-900 mb-4 flex items-center gap-2">
          <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
          Achievements
        </h4>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {milestones.map((milestone) => (
            <div
              key={milestone.id}
              className={`
                relative p-4 rounded-xl border-2 text-center transition-all duration-300
                ${milestone.unlocked 
                  ? 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-300 shadow-md' 
                  : 'bg-slate-50 border-slate-200 opacity-60'
                }
              `}
            >
              {milestone.unlocked && (
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              )}
              
              <div className={`text-4xl mb-2 ${milestone.unlocked ? 'animate-bounce' : 'grayscale'}`}>
                {milestone.icon}
              </div>
              <h5 className={`font-bold text-sm mb-1 ${milestone.unlocked ? 'text-slate-900' : 'text-slate-500'}`}>
                {milestone.title}
              </h5>
              <p className={`text-xs ${milestone.unlocked ? 'text-slate-600' : 'text-slate-400'}`}>
                {milestone.description}
              </p>
              
              {!milestone.unlocked && (
                <div className="mt-2 text-xs font-semibold text-brand-blue">
                  {milestone.threshold - completedLessons} more
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">{completedLessons}</p>
              <p className="text-xs text-slate-500">Lessons Done</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">{milestones.filter(m => m.unlocked).length}</p>
              <p className="text-xs text-slate-500">Achievements</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">7</p>
              <p className="text-xs text-slate-500">Day Streak</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">3.5h</p>
              <p className="text-xs text-slate-500">Time Spent</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
