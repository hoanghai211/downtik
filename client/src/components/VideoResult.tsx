import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { TikTokVideo } from "@shared/schema";
import { Download, Music, Play, Eye, MessageCircle, Share2, Download as DownloadIcon } from "lucide-react";

interface VideoResultProps {
  videoData: TikTokVideo;
}

const VideoResult: React.FC<VideoResultProps> = ({ videoData }) => {
  const handleVideoDownload = () => {
    if (videoData.video_url) {
      window.open(videoData.video_url, "_blank");
    }
  };

  const handleAudioDownload = () => {
    if (videoData.audio_url) {
      window.open(videoData.audio_url, "_blank");
    }
  };

  return (
    <section id="videoResult" className="max-w-4xl mx-auto mb-12 px-4">
      <Card className="border-0 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 shadow-xl backdrop-blur-lg">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-cyan-500/10 opacity-10"></div>
        <CardContent className="p-6 md:p-8 relative z-10">
          {/* Success Message */}
          <div className="mb-6 bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 flex items-center">
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500 mr-3">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 0a8 8 0 100 16A8 8 0 008 0zm3.72 6.28a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06 0L4.22 9.41a.75.75 0 011.06-1.06L6.75 9.82l3.72-3.72a.75.75 0 011.06 0z" fill="currentColor"/>
              </svg>
            </div>
            <p className="text-emerald-500 font-medium">Video processed successfully! Download options are ready.</p>
          </div>
          
          {/* User Info */}
          <div className="flex items-center mb-6 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-cyan-400 rounded-full opacity-30 blur-sm"></div>
              <img
                src={videoData.avatar || "https://via.placeholder.com/80"}
                alt="User Avatar"
                className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-primary/30 relative z-10"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                {videoData.username || "@username"}
              </h3>
              <p className="text-sm text-slate-400">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-cyan-400">
                  Original Creator
                </span>
              </p>
            </div>
          </div>

          {/* Video Preview */}
          <div className="mb-6 rounded-xl overflow-hidden bg-slate-800 relative ring-1 ring-slate-700/50">
            <AspectRatio ratio={16 / 9}>
              <img
                src={videoData.thumbnail || "https://via.placeholder.com/1080x1920"}
                alt="Video Thumbnail"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-primary/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-primary/30 transform transition-transform hover:scale-110 group cursor-pointer">
                  <Play size={28} className="text-white fill-white group-hover:text-primary transition-colors" />
                </div>
              </div>
            </AspectRatio>
          </div>

          {/* Video Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-slate-800/50 p-4 rounded-xl text-center border border-slate-700/30 hover:border-primary/30 transition-colors group">
              <div className="w-10 h-10 mx-auto rounded-full bg-slate-700/30 flex items-center justify-center mb-2 group-hover:bg-primary/20 transition-colors">
                <Eye size={18} className="text-slate-300 group-hover:text-primary transition-colors" />
              </div>
              <p className="text-xs text-slate-400 uppercase tracking-wide">Views</p>
              <p className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                {videoData.stats?.views || "0"}
              </p>
            </div>
            <div className="bg-slate-800/50 p-4 rounded-xl text-center border border-slate-700/30 hover:border-primary/30 transition-colors group">
              <div className="w-10 h-10 mx-auto rounded-full bg-slate-700/30 flex items-center justify-center mb-2 group-hover:bg-primary/20 transition-colors">
                <MessageCircle size={18} className="text-slate-300 group-hover:text-primary transition-colors" />
              </div>
              <p className="text-xs text-slate-400 uppercase tracking-wide">Comments</p>
              <p className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                {videoData.stats?.comments || "0"}
              </p>
            </div>
            <div className="bg-slate-800/50 p-4 rounded-xl text-center border border-slate-700/30 hover:border-primary/30 transition-colors group">
              <div className="w-10 h-10 mx-auto rounded-full bg-slate-700/30 flex items-center justify-center mb-2 group-hover:bg-primary/20 transition-colors">
                <Share2 size={18} className="text-slate-300 group-hover:text-primary transition-colors" />
              </div>
              <p className="text-xs text-slate-400 uppercase tracking-wide">Shares</p>
              <p className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                {videoData.stats?.shares || "0"}
              </p>
            </div>
            <div className="bg-slate-800/50 p-4 rounded-xl text-center border border-slate-700/30 hover:border-primary/30 transition-colors group">
              <div className="w-10 h-10 mx-auto rounded-full bg-slate-700/30 flex items-center justify-center mb-2 group-hover:bg-primary/20 transition-colors">
                <DownloadIcon size={18} className="text-slate-300 group-hover:text-primary transition-colors" />
              </div>
              <p className="text-xs text-slate-400 uppercase tracking-wide">Downloads</p>
              <p className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                {videoData.stats?.downloads || "0"}
              </p>
            </div>
          </div>

          {/* Download Buttons */}
          <div className="space-y-4">
            <Button
              onClick={handleVideoDownload}
              className="w-full py-6 px-6 h-14 bg-gradient-to-r from-[#FF0050] to-[#00F2EA] hover:brightness-110 transition-all transform hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/30 rounded-xl font-bold text-base"
              disabled={!videoData.video_url}
            >
              <Download className="w-5 h-5 mr-2" />
              Download Video (No Watermark)
            </Button>
            
            {videoData.audio_url && (
              <Button
                onClick={handleAudioDownload}
                variant="outline"
                className="w-full py-6 px-6 h-14 bg-transparent border-slate-700 text-white hover:bg-slate-800 hover:text-primary hover:border-primary/30 transition-all rounded-xl font-medium"
              >
                <Music className="w-5 h-5 mr-2" />
                Download Audio Track
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default VideoResult;
