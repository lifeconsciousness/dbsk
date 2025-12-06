import { useState, useRef } from 'react';

interface Lesson {
  id: number;
  title: string;
  duration: string;
  videoUrl: string;
  completed: boolean;
  image?: string;
}

interface Chapter {
  id: number;
  title: string;
}

interface VideoPlayerProps {
  lesson: Lesson;
  chapter: Chapter;
  onPrevious?: () => void;
  onNext?: () => void;
  onMarkComplete?: () => void;
  isFirstLesson?: boolean;
  isLastLesson?: boolean;
}

export default function VideoPlayer({ lesson, chapter, onPrevious: _onPrevious, onNext: _onNext, onMarkComplete: _onMarkComplete, isFirstLesson: _isFirstLesson, isLastLesson: _isLastLesson }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handlePlayClick = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
      {/* Image Section (if present) */}
      {lesson.image && (
        <div className="p-6 bg-white border-b border-slate-200">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">{lesson.title}</h3>
          <img 
            src={lesson.image} 
            alt={lesson.title}
            className="w-full rounded-lg border border-slate-200 shadow-sm"
          />
        </div>
      )}
      
      {/* Video Container */}
      <div className="relative bg-slate-900 aspect-video">
        {lesson.videoUrl.endsWith('.mov') || lesson.videoUrl.endsWith('.mp4') ? (
          <video
            ref={videoRef}
            src={lesson.videoUrl}
            title={lesson.title}
            className="w-full h-full"
            controls
            controlsList="nodownload"
            onPlay={() => setIsPlaying(true)}
          />
        ) : (
          <iframe
            src={lesson.videoUrl}
            title={lesson.title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
        
        {/* Video Overlay with Play Button (shown before video loads) */}
        {!isPlaying && (
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 to-slate-900/80 flex items-center justify-center">
            <button 
              onClick={handlePlayClick}
              className="w-20 h-20 bg-brand-blue hover:bg-blue-600 rounded-full flex items-center justify-center transform hover:scale-110 transition-all shadow-2xl"
            >
              <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        )}

        {/* Lesson Badge */}
        <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-lg">
          <p className="text-xs text-slate-300 font-medium">Lesson {lesson.id}</p>
          <p className="text-sm text-white font-bold">{chapter.title}</p>
        </div>

        {/* Completion Badge */}
        {lesson.completed && (
          <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full flex items-center gap-1 text-sm font-semibold">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Completed
          </div>
        )}
      </div>

      {/* Video Controls Info */}
      <div className="p-4 bg-slate-50 border-t border-slate-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-slate-700 hover:text-brand-blue transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span className="text-sm font-medium">Download Resources</span>
            </button>
            
            <button className="flex items-center gap-2 text-slate-700 hover:text-brand-blue transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium">Ask Question</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-slate-200 rounded-lg transition">
              <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </button>
            <button className="p-2 hover:bg-slate-200 rounded-lg transition">
              <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Quick Notes Section */}
      <div className="p-4 border-t border-slate-200">
        <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-brand-blue mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <div className="flex-1">
            <h4 className="font-semibold text-slate-900 mb-2">Quick Notes</h4>
            <textarea 
              placeholder="Take notes as you watch..." 
              className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue text-sm resize-none"
              rows={3}
            ></textarea>
            <button className="mt-2 text-sm font-semibold text-brand-blue hover:underline">
              Save Note
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
