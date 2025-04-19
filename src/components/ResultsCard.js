import { 
  CheckCircleIcon, 
  EyeIcon, 
  ChatBubbleBottomCenterIcon,
  ShareIcon,
  ArrowDownTrayIcon,
  PlayIcon,
  MusicalNoteIcon,
  VideoCameraIcon
} from '@heroicons/react/24/solid'

export default function ResultsCard({ videoData }) {
  if (!videoData) return null

  return (
    <div className="bg-dark-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
      {/* Header */}
      <div className="bg-primary-900/30 border-b border-primary-900/50 px-6 py-4 flex items-center">
        <div className="flex items-center gap-2">
          <CheckCircleIcon className="h-5 w-5 text-primary-500" />
          <h3 className="font-bold text-lg text-white">Download Ready</h3>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Thumbnail */}
          <div className="lg:col-span-1">
            <div className="relative aspect-[9/16] rounded-xl overflow-hidden bg-dark-950 border border-slate-800">
              <img 
                src={videoData.thumbnail} 
                alt="Video thumbnail" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null
                  e.target.src = "https://placehold.co/600x800/2e3a52/ffffff?text=TikTok+Video"
                }}
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                  <PlayIcon className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Video Info */}
          <div className="lg:col-span-2 flex flex-col">
            {/* Author */}
            <div className="flex items-center gap-4 pb-4 mb-6 border-b border-slate-800">
              <img 
                src={videoData.avatar} 
                alt="Author avatar" 
                className="w-12 h-12 rounded-full object-cover ring-2 ring-primary-500"
                onError={(e) => {
                  e.target.onerror = null
                  e.target.src = "https://placehold.co/100x100/2e3a52/ffffff?text=User"
                }}
              />
              <div>
                <div className="font-bold text-white text-lg flex items-center">
                  {videoData.username}
                  <CheckCircleIcon className="w-4 h-4 text-primary-500 ml-1.5" />
                </div>
                <div className="text-sm text-slate-400">TikTok Creator</div>
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              <div className="bg-dark-800 rounded-lg p-3">
                <div className="text-sm text-slate-400 mb-1 flex items-center gap-1.5">
                  <EyeIcon className="h-4 w-4 text-primary-500" />
                  Views
                </div>
                <div className="font-bold text-white">{videoData.stats.views}</div>
              </div>
              <div className="bg-dark-800 rounded-lg p-3">
                <div className="text-sm text-slate-400 mb-1 flex items-center gap-1.5">
                  <ChatBubbleBottomCenterIcon className="h-4 w-4 text-primary-500" />
                  Comments
                </div>
                <div className="font-bold text-white">{videoData.stats.comments}</div>
              </div>
              <div className="bg-dark-800 rounded-lg p-3">
                <div className="text-sm text-slate-400 mb-1 flex items-center gap-1.5">
                  <ShareIcon className="h-4 w-4 text-primary-500" />
                  Shares
                </div>
                <div className="font-bold text-white">{videoData.stats.shares}</div>
              </div>
              <div className="bg-dark-800 rounded-lg p-3">
                <div className="text-sm text-slate-400 mb-1 flex items-center gap-1.5">
                  <ArrowDownTrayIcon className="h-4 w-4 text-primary-500" />
                  Downloads
                </div>
                <div className="font-bold text-white">{videoData.stats.downloads}</div>
              </div>
            </div>
            
            {/* Download Options */}
            <div className="mt-auto">
              <h4 className="text-sm font-medium text-slate-400 mb-3">Download Options:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a 
                  href={videoData.video_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-primary-600 to-primary-800 text-white font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  <VideoCameraIcon className="h-5 w-5" />
                  Download Video
                </a>
                <a 
                  href={videoData.audio_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-secondary-600 to-secondary-800 text-white font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  <MusicalNoteIcon className="h-5 w-5" />
                  Download Audio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}