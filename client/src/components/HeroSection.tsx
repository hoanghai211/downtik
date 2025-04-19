import React from "react";

const HeroSection = () => {
  return (
    <section className="text-center py-16 mb-8 relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 to-cyan-500/5"></div>
        <div className="absolute top-0 left-1/3 w-32 h-32 bg-primary/30 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-cyan-400/30 rounded-full filter blur-3xl opacity-20"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <div className="inline-block mb-2 px-3 py-1 bg-primary/10 rounded-full text-primary font-semibold text-sm">
          TikSave - Save TikTok videos without watermark
        </div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
          <span className="block">Download</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-cyan-400">
            TikTok Videos
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          Get your favorite TikTok videos without watermark in high quality.
          <span className="hidden md:inline"> Fast, free, and easy to use!</span>
        </p>
        
        {/* Features */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-4 mb-6 text-sm md:text-base text-slate-600 dark:text-slate-400">
          <div className="flex items-center">
            <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center mr-2">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 3L4.5 8.5L2 6" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span>No Watermark</span>
          </div>
          <div className="flex items-center">
            <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mr-2">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" className="stroke-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span>HD Quality</span>
          </div>
          <div className="flex items-center">
            <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center mr-2">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 3L4.5 8.5L2 6" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span>Audio Extraction</span>
          </div>
          <div className="flex items-center">
            <div className="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center mr-2">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 3L4.5 8.5L2 6" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span>No Registration</span>
          </div>
        </div>
        
        {/* Directed arrow */}
        <div className="mt-6 animate-bounce mx-auto w-8 h-8 flex justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" className="stroke-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
