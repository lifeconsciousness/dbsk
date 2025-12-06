import { useState } from 'react';
import CourseSidebar from './CourseSidebar';
import VideoPlayer from './VideoPlayer';
import MilestoneTracker from './MilestoneTracker';

interface Chapter {
  id: number;
  title: string;
  duration: string;
  completed: boolean;
  locked: boolean;
  lessons: Lesson[];
}

interface Lesson {
  id: number;
  title: string;
  duration: string;
  videoUrl: string;
  completed: boolean;
  description?: string;
  learningPoints?: string[];
}

interface LessonDetail extends Lesson {
  description: string;
  learningPoints: string[];
  notes?: string;
}

const lessonsDetails: Record<number, LessonDetail> = {
  1: {
    id: 1,
    title: "Unboxing Your DBSK Kit",
    duration: "3 min",
    videoUrl: "./drone1.mp4",
    completed: true,
    description: "Welcome to DBSK! In this lesson, we'll unbox your drone kit and identify all the components. Learn proper handling techniques and how to organize your workspace for the assembly process.",
    learningPoints: [
      "Identify all components included in the DBSK kit",
      "Understand proper handling of electronic components",
      "Learn about anti-static precautions",
      "Organize components for efficient assembly"
    ]
  },
  2: {
    id: 2,
    title: "Safety First: Pre-Flight Checklist",
    duration: "12 min",
    videoUrl: "https://www.youtube.com/embed/3t30ThtOV6M",
    completed: true,
    description: "Safety is paramount when working with drones. This lesson covers essential safety procedures, legal requirements, and the pre-flight checklist you should follow before every flight.",
    learningPoints: [
      "EU Drone regulations and compliance",
      "Battery safety and LiPo handling procedures",
      "Workspace safety when building electronics",
      "Pre-flight inspection checklist"
    ]
  },
  3: {
    id: 3,
    title: "Understanding the Components",
    duration: "15 min",
    videoUrl: "https://www.youtube.com/embed/UytSNlHw8J8",
    completed: true,
    description: "Dive deep into each component of your quadcopter. Understand what each part does, how they work together, and why they're essential for flight.",
    learningPoints: [
      "Frame structure and material properties",
      "Motor specifications and types (brushless vs brushed)",
      "Flight controller basics and sensor integration",
      "Electronic Speed Controllers (ESCs) explained"
    ]
  },
  4: {
    id: 4,
    title: "Tools & Workspace Setup",
    duration: "10 min",
    videoUrl: "https://www.youtube.com/embed/3t30ThtOV6M",
    completed: true,
    description: "Set up your ideal workspace for drone assembly. Learn about the tools you'll need and how to create an organized, safe environment for building.",
    learningPoints: [
      "Essential tools for drone assembly (no soldering needed!)",
      "Workspace organization techniques",
      "Lighting and workspace ergonomics",
      "Component storage best practices"
    ]
  },
  5: {
    id: 5,
    title: "Frame Assembly Basics",
    duration: "20 min",
    videoUrl: "https://www.youtube.com/embed/gMbnJzHhoHU",
    completed: true,
    description: "Start building! Learn how to properly assemble the DBSK modular frame using our snap-fit system. No tools required for this section.",
    learningPoints: [
      "Understanding the modular frame design",
      "Proper arm attachment techniques",
      "Ensuring structural integrity",
      "Frame balance and symmetry checks"
    ]
  },
  6: {
    id: 6,
    title: "Installing the Motors",
    duration: "25 min",
    videoUrl: "https://www.youtube.com/embed/UytSNlHw8J8",
    completed: true,
    description: "Attach the brushless motors to your frame arms. Learn about motor rotation directions, mounting techniques, and the importance of proper installation.",
    learningPoints: [
      "Motor rotation patterns (CW and CCW)",
      "Secure mounting without overtightening",
      "Wire management basics",
      "Testing motor rotation direction"
    ]
  },
  7: {
    id: 7,
    title: "Flight Controller Setup",
    duration: "30 min",
    videoUrl: "https://www.youtube.com/embed/gMbnJzHhoHU",
    completed: false,
    description: "Install the brain of your drone - the flight controller. Learn about sensor orientation, mounting techniques, and initial connection setup.",
    learningPoints: [
      "Flight controller orientation and arrow direction",
      "Vibration dampening techniques",
      "Connecting ESCs to the flight controller",
      "Power distribution basics"
    ]
  },
  8: {
    id: 8,
    title: "Wiring & Power Systems",
    duration: "35 min",
    videoUrl: "https://www.youtube.com/embed/3t30ThtOV6M",
    completed: false,
    description: "Master the wiring of your drone's power system. Learn safe wiring practices, connector types, and how to route cables for clean, safe builds.",
    learningPoints: [
      "Understanding power distribution",
      "Connector types and polarities",
      "Cable routing for minimal interference",
      "Safety checks for electrical connections"
    ]
  },
  9: {
    id: 9,
    title: "Propeller Installation",
    duration: "15 min",
    videoUrl: "https://www.youtube.com/embed/UytSNlHw8J8",
    completed: false,
    description: "The final hardware step! Learn to install propellers correctly, understand propeller physics, and perform safety checks before first flight.",
    learningPoints: [
      "Clockwise vs counter-clockwise propellers",
      "Proper installation and tightening",
      "Propeller balance checking",
      "Safety considerations with spinning propellers"
    ]
  },
  10: {
    id: 10,
    title: "Introduction to Circuits",
    duration: "18 min",
    videoUrl: "https://www.youtube.com/embed/gMbnJzHhoHU",
    completed: false,
    description: "Understand basic electronics theory. Learn about voltage, current, resistance, and how circuits work in your drone.",
    learningPoints: [
      "Ohm's Law and basic circuit principles",
      "Series vs parallel circuits",
      "Reading circuit diagrams",
      "Measuring voltage and current"
    ]
  }
};

const coursesData: Chapter[] = [
  {
    id: 1,
    title: "Getting Started",
    duration: "45 min",
    completed: true,
    locked: false,
    lessons: [
      lessonsDetails[1],
      lessonsDetails[2],
      lessonsDetails[3],
      lessonsDetails[4],
    ]
  },
  {
    id: 2,
    title: "Drone Assembly",
    duration: "2h 15min",
    completed: false,
    locked: false,
    lessons: [
      lessonsDetails[5],
      lessonsDetails[6],
      lessonsDetails[7],
      lessonsDetails[8],
      lessonsDetails[9],
    ]
  },
  {
    id: 3,
    title: "Electronics Fundamentals",
    duration: "1h 30min",
    completed: false,
    locked: false,
    lessons: [
      lessonsDetails[10],
      { id: 11, title: "Understanding ESCs", duration: "22 min", videoUrl: "https://www.youtube.com/embed/3t30ThtOV6M", completed: false, description: "Deep dive into Electronic Speed Controllers. Learn how ESCs convert battery power into motor control signals.", learningPoints: ["ESC specifications and ratings", "PWM and digital protocols", "ESC calibration procedures", "Troubleshooting ESC issues"] },
      { id: 12, title: "Battery Technology & LiPo Safety", duration: "25 min", videoUrl: "https://www.youtube.com/embed/UytSNlHw8J8", completed: false, description: "Critical safety information about LiPo batteries. Learn proper charging, storage, and handling procedures.", learningPoints: ["LiPo cell chemistry and ratings (C-rating, mAh)", "Charging procedures and safety", "Storage and disposal guidelines", "Recognizing damaged batteries"] },
      { id: 13, title: "Sensors & Gyroscopes", duration: "25 min", videoUrl: "https://www.youtube.com/embed/gMbnJzHhoHU", completed: false, description: "Understand the sensors that keep your drone stable. Learn about gyroscopes, accelerometers, and how they work together.", learningPoints: ["IMU (Inertial Measurement Unit) basics", "Gyroscope and accelerometer functions", "Sensor calibration importance", "GPS and other optional sensors"] },
    ]
  },
  {
    id: 4,
    title: "How Drones Fly",
    duration: "1h 45min",
    completed: false,
    locked: false,
    lessons: [
      { id: 14, title: "Physics of Flight", duration: "20 min", videoUrl: "https://www.youtube.com/embed/3t30ThtOV6M", completed: false, description: "Explore the fundamental physics principles that enable drone flight. From Newton's laws to rotational dynamics.", learningPoints: ["Newton's laws applied to flight", "Forces acting on a quadcopter", "Torque and angular momentum", "Center of gravity and balance"] },
      { id: 15, title: "Aerodynamics Basics", duration: "25 min", videoUrl: "https://www.youtube.com/embed/UytSNlHw8J8", completed: false, description: "Learn how air flows around your drone and propellers. Understand the aerodynamic principles of multirotor flight.", learningPoints: ["Airflow and propeller design", "Induced drag and efficiency", "Ground effect phenomenon", "Weather conditions impact"] },
      { id: 16, title: "Thrust, Lift & Drag", duration: "20 min", videoUrl: "https://www.youtube.com/embed/gMbnJzHhoHU", completed: false, description: "Master the three fundamental forces of flight. Learn how your drone generates thrust and counteracts drag.", learningPoints: ["Thrust-to-weight ratio", "Understanding lift in multirotors", "Drag forces and minimization", "Power consumption optimization"] },
      { id: 17, title: "Quadcopter Stability", duration: "25 min", videoUrl: "https://www.youtube.com/embed/3t30ThtOV6M", completed: false, description: "Discover how quadcopters achieve and maintain stable flight. Learn about the X and + configurations.", learningPoints: ["Quadcopter stability principles", "Motor mixing and differential thrust", "Self-leveling mechanisms", "Manual vs stabilized flight modes"] },
      { id: 18, title: "PID Control Systems", duration: "15 min", videoUrl: "https://www.youtube.com/embed/UytSNlHw8J8", completed: false, description: "Introduction to PID controllers - the algorithm that keeps your drone flying smoothly. Foundation for advanced tuning.", learningPoints: ["P, I, and D components explained", "How PID maintains stability", "Basic tuning concepts", "Feedback loops in flight control"] },
    ]
  },
  {
    id: 5,
    title: "Software & Configuration",
    duration: "2h",
    completed: false,
    locked: true,
    lessons: [
      { id: 19, title: "Installing Betaflight", duration: "15 min", videoUrl: "https://www.youtube.com/embed/gMbnJzHhoHU", completed: false, description: "Set up Betaflight, the open-source flight controller software. Complete installation and initial configuration.", learningPoints: ["Betaflight software installation", "Connecting to your flight controller", "Firmware flashing basics", "Initial setup wizard"] },
      { id: 20, title: "Calibrating Your Drone", duration: "30 min", videoUrl: "https://www.youtube.com/embed/3t30ThtOV6M", completed: false, description: "Perform essential calibrations to ensure accurate flight. Accelerometer, magnetometer, and ESC calibration.", learningPoints: ["Accelerometer calibration procedure", "ESC calibration steps", "Stick calibration", "Verifying calibration accuracy"] },
      { id: 21, title: "Controller Setup & Binding", duration: "25 min", videoUrl: "https://www.youtube.com/embed/UytSNlHw8J8", completed: false, description: "Connect and configure your radio transmitter. Set up channels, modes, and failsafe procedures.", learningPoints: ["Binding transmitter to receiver", "Channel mapping and configuration", "Failsafe setup for safety", "Switch configuration"] },
      { id: 22, title: "Flight Modes Explained", duration: "20 min", videoUrl: "https://www.youtube.com/embed/gMbnJzHhoHU", completed: false, description: "Understand different flight modes: Angle, Horizon, and Acro. Learn when to use each mode.", learningPoints: ["Angle mode for beginners", "Horizon mode features", "Acro mode for advanced flying", "Switching between modes safely"] },
      { id: 23, title: "Fine-Tuning PID Values", duration: "30 min", videoUrl: "https://www.youtube.com/embed/3t30ThtOV6M", completed: false, description: "Advanced lesson on tuning PID values for optimal flight performance. Make your drone fly perfectly.", learningPoints: ["Reading flight logs", "Adjusting P, I, D gains", "Identifying oscillations", "Testing and iteration process"] },
    ]
  },
  {
    id: 6,
    title: "First Flight & Beyond",
    duration: "1h 20min",
    completed: false,
    locked: true,
    lessons: [
      { id: 24, title: "Pre-Flight Safety Check", duration: "10 min", videoUrl: "https://www.youtube.com/embed/UytSNlHw8J8", completed: false, description: "Essential pre-flight checklist you must complete before every flight. Develop good safety habits.", learningPoints: ["Visual inspection checklist", "Electronic systems check", "Environment assessment", "Emergency procedures review"] },
      { id: 25, title: "Your First Takeoff", duration: "15 min", videoUrl: "https://www.youtube.com/embed/gMbnJzHhoHU", completed: false, description: "The moment you've been waiting for! Safe procedures for your first flight and landing.", learningPoints: ["Arming the drone safely", "Smooth throttle control", "Hover stability", "Controlled landing technique"] },
      { id: 26, title: "Basic Maneuvers", duration: "25 min", videoUrl: "https://www.youtube.com/embed/3t30ThtOV6M", completed: false, description: "Practice fundamental flight maneuvers. Build confidence and control skills.", learningPoints: ["Forward and backward flight", "Lateral movements", "Coordinated turns", "Figure-eight patterns"] },
      { id: 27, title: "Troubleshooting Common Issues", duration: "20 min", videoUrl: "https://www.youtube.com/embed/UytSNlHw8J8", completed: false, description: "Learn to diagnose and fix common problems. Become self-sufficient in maintenance and repairs.", learningPoints: ["Motor not spinning diagnostics", "Drift and instability solutions", "Connection issues", "Crash damage assessment"] },
      { id: 28, title: "Maintenance & Care", duration: "10 min", videoUrl: "https://www.youtube.com/embed/gMbnJzHhoHU", completed: false, description: "Keep your drone in top condition. Regular maintenance procedures and long-term care.", learningPoints: ["Post-flight inspection routine", "Cleaning and maintenance schedule", "Component replacement timing", "Long-term storage procedures"] },
    ]
  },
];

export default function LearningPlatform() {
  const [selectedLesson, setSelectedLesson] = useState<Lesson>(coursesData[0].lessons[0]);
  const [currentChapter, setCurrentChapter] = useState<Chapter>(coursesData[0]);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeView, setActiveView] = useState<'lessons' | 'progress'>('lessons');

  const handleLessonSelect = (lesson: Lesson, chapter: Chapter) => {
    setSelectedLesson(lesson);
    setCurrentChapter(chapter);
  };

  const handleMarkComplete = () => {
    // Mark current lesson as complete
    coursesData.map(chapter => ({
      ...chapter,
      lessons: chapter.lessons.map(lesson =>
        lesson.id === selectedLesson.id ? { ...lesson, completed: true } : lesson
      )
    }));
    
    // Find next lesson
    goToNextLesson();
  };

  const goToPreviousLesson = () => {
    const allLessons: Array<{ lesson: Lesson; chapter: Chapter }> = [];
    coursesData.forEach(chapter => {
      chapter.lessons.forEach(lesson => {
        allLessons.push({ lesson, chapter });
      });
    });

    const currentIndex = allLessons.findIndex(item => item.lesson.id === selectedLesson.id);
    if (currentIndex > 0) {
      const previous = allLessons[currentIndex - 1];
      setSelectedLesson(previous.lesson);
      setCurrentChapter(previous.chapter);
    }
  };

  const goToNextLesson = () => {
    const allLessons: Array<{ lesson: Lesson; chapter: Chapter }> = [];
    coursesData.forEach(chapter => {
      chapter.lessons.forEach(lesson => {
        allLessons.push({ lesson, chapter });
      });
    });

    const currentIndex = allLessons.findIndex(item => item.lesson.id === selectedLesson.id);
    if (currentIndex < allLessons.length - 1) {
      const next = allLessons[currentIndex + 1];
      setSelectedLesson(next.lesson);
      setCurrentChapter(next.chapter);
    }
  };

  const isFirstLesson = selectedLesson.id === 1;
  const isLastLesson = selectedLesson.id === coursesData[coursesData.length - 1].lessons[coursesData[coursesData.length - 1].lessons.length - 1].id;

  const totalLessons = coursesData.reduce((acc, chapter) => acc + chapter.lessons.length, 0);
  const completedLessons = coursesData.reduce((acc, chapter) => 
    acc + chapter.lessons.filter(l => l.completed).length, 0
  );
  const overallProgress = Math.round((completedLessons / totalLessons) * 100);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 hover:bg-slate-100 rounded-lg transition md:hidden"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <a href="/" className="font-extrabold text-2xl tracking-tight text-brand-blue">DBSK</a>
              <span className="text-slate-400">|</span>
              <h1 className="text-lg font-bold text-slate-700">Learning Platform</h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full">
                <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-sm font-semibold text-slate-700">{overallProgress}% Complete</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* View Toggle */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-full px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 py-2">
            <button
              onClick={() => setActiveView('lessons')}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
                activeView === 'lessons'
                  ? 'bg-brand-blue text-white'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Course Content
              </div>
            </button>
            <button
              onClick={() => setActiveView('progress')}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
                activeView === 'progress'
                  ? 'bg-brand-blue text-white'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                My Progress & Achievements
              </div>
            </button>
          </div>
        </div>
      </div>

      {activeView === 'progress' ? (
        /* Progress View */
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <MilestoneTracker 
            completedLessons={completedLessons}
            totalLessons={totalLessons}
            currentChapter={currentChapter.title}
          />
        </div>
      ) : (
        /* Lessons View */
        <div className="flex px-4 sm:px-6 lg:px-8">
          {/* Sidebar */}
          <CourseSidebar 
            chapters={coursesData}
            selectedLesson={selectedLesson}
            onLessonSelect={handleLessonSelect}
            isOpen={sidebarOpen}
          />

          {/* Main Content */}
          <div className="flex-1 p-4 lg:p-8">
            {/* Video Section */}
            <VideoPlayer 
              lesson={selectedLesson}
              chapter={currentChapter}
              onPrevious={goToPreviousLesson}
              onNext={goToNextLesson}
              onMarkComplete={handleMarkComplete}
              isFirstLesson={isFirstLesson}
              isLastLesson={isLastLesson}
            />

            {/* Lesson Description */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{selectedLesson.title}</h3>
                  <p className="text-slate-500">Chapter {currentChapter.id}: {currentChapter.title}</p>
                </div>
                <span className="bg-blue-100 text-brand-blue px-3 py-1 rounded-full text-sm font-semibold">
                  {selectedLesson.duration}
                </span>
              </div>

              <div className="prose prose-slate max-w-none">
                <p className="text-slate-600 mb-4">{selectedLesson.description}</p>
                
                <h4 className="text-lg font-semibold mb-3">What you'll learn:</h4>
                <ul className="space-y-2">
                  {selectedLesson.learningPoints?.map((point, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Safety Notice */}
              <div className="mt-4 bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <p className="text-sm text-amber-800">
                    <strong>Safety First:</strong> Always ensure your workspace is clear and follow proper handling procedures when working with electronic components.
                  </p>
                </div>
              </div>

              {/* Navigation */}
              <div className="mt-6 flex items-center justify-between pt-6 border-t border-slate-200">
                <button 
                  onClick={goToPreviousLesson}
                  disabled={selectedLesson.id === 1}
                  className="flex items-center gap-2 px-4 py-2 text-slate-600 hover:text-brand-blue disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Previous Lesson
                </button>
                <button 
                  onClick={goToNextLesson}
                  disabled={selectedLesson.id === 28}
                  className="flex items-center gap-2 px-4 py-2 text-slate-600 hover:text-brand-blue disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Next Lesson
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
