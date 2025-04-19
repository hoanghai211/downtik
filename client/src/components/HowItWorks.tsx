import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="max-w-5xl mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        How It Works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="bg-white rounded-xl shadow-md overflow-hidden transition-all transform hover:-translate-y-2 hover:shadow-xl">
          <CardContent className="p-6 text-center">
            <div className="w-16 h-16 bg-[#FF0050] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-link text-[#FF0050] text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Paste TikTok Link
            </h3>
            <p className="text-gray-600">
              Copy the TikTok video URL from the app or website and paste it into our downloader.
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-white rounded-xl shadow-md overflow-hidden transition-all transform hover:-translate-y-2 hover:shadow-xl">
          <CardContent className="p-6 text-center">
            <div className="w-16 h-16 bg-[#00F2EA] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-bolt text-[#00F2EA] text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Process Video
            </h3>
            <p className="text-gray-600">
              Our system processes the video and removes the TikTok watermark automatically.
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-white rounded-xl shadow-md overflow-hidden transition-all transform hover:-translate-y-2 hover:shadow-xl">
          <CardContent className="p-6 text-center">
            <div className="w-16 h-16 bg-green-500 bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-download text-green-500 text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Download
            </h3>
            <p className="text-gray-600">
              Download the watermark-free video in high quality or extract just the audio track.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default HowItWorks;
