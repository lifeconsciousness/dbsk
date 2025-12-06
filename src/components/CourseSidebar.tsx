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
}

interface CourseSidebarProps {
  chapters: Chapter[];
  selectedLesson: Lesson;
  onLessonSelect: (lesson: Lesson, chapter: Chapter) => void;
  isOpen: boolean;
}

export default function CourseSidebar({ chapters, selectedLesson, onLessonSelect, isOpen }: CourseSidebarProps) {
  return (
    <div className={`
      ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      md:translate-x-0 fixed md:sticky top-16 left-0 h-[calc(100vh-4rem)]
      w-96 bg-white border-r border-slate-200 overflow-y-auto transition-transform duration-300 z-30
    `}>
      <div className="p-4 border-b border-slate-200 bg-slate-50">
        <h2 className="font-bold text-lg text-slate-900">Course Content</h2>
        <p className="text-sm text-slate-500 mt-1">
          {chapters.length} chapters • {chapters.reduce((acc, ch) => acc + ch.lessons.length, 0)} lessons
        </p>
      </div>

      <div className="divide-y divide-slate-100">
        {chapters.map((chapter) => (
          <div key={chapter.id} className="bg-white">
            <div className={`
              p-4 flex items-center justify-between cursor-pointer
              ${chapter.locked ? 'opacity-50 cursor-not-allowed' : 'hover:bg-slate-50'}
            `}>
              <div className="flex items-center gap-3">
                <div className={`
                  w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
                  ${chapter.completed 
                    ? 'bg-green-100 text-green-600' 
                    : chapter.locked 
                    ? 'bg-slate-100 text-slate-400'
                    : 'bg-blue-100 text-brand-blue'
                  }
                `}>
                  {chapter.completed ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : chapter.locked ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  ) : (
                    chapter.id
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-slate-900">{chapter.title}</h3>
                  <p className="text-xs text-slate-500">{chapter.duration}</p>
                </div>
              </div>
            </div>

            {!chapter.locked && (
              <div className="bg-slate-50">
                {chapter.lessons.map((lesson, index) => (
                  <button
                    key={lesson.id}
                    onClick={() => onLessonSelect(lesson, chapter)}
                    disabled={chapter.locked}
                    className={`
                      w-full text-left px-4 py-3 pl-14 flex items-center justify-between
                      transition-colors group
                      ${selectedLesson.id === lesson.id 
                        ? 'bg-blue-50 border-l-4 border-brand-blue' 
                        : 'hover:bg-slate-100 border-l-4 border-transparent'
                      }
                      ${chapter.locked ? 'cursor-not-allowed opacity-50' : ''}
                    `}
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <div className={`
                        w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0
                        ${lesson.completed 
                          ? 'bg-green-500 text-white' 
                          : selectedLesson.id === lesson.id
                          ? 'bg-brand-blue text-white'
                          : 'bg-slate-200 text-slate-600 group-hover:bg-slate-300'
                        }
                      `}>
                        {lesson.completed ? (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        )}
                      </div>
                      <div className="min-w-0">
                        <p className={`
                          text-sm font-medium truncate
                          ${selectedLesson.id === lesson.id 
                            ? 'text-brand-blue' 
                            : 'text-slate-700'
                          }
                        `}>
                          {lesson.title}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs text-slate-500 ml-2">{lesson.duration}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 border-t border-slate-200">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900 mb-1">Need Help?</p>
            <p className="text-xs text-slate-600 mb-2">Join our community forum for support</p>
            <button className="text-xs font-semibold text-brand-blue hover:underline">
              Get Support →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
