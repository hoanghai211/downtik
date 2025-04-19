import React from "react";
import { AlertTriangle } from "lucide-react";

interface ErrorDisplayProps {
  message: string;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ message }) => {
  return (
    <div className="max-w-3xl mx-auto mb-8 px-4">
      <div className="bg-red-500/10 border border-red-500/20 backdrop-blur-sm rounded-xl p-4 flex items-start">
        <div className="bg-red-500/20 p-2 rounded-lg mr-3 mt-0.5">
          <AlertTriangle className="h-5 w-5 text-red-500" />
        </div>
        <div>
          <h4 className="font-semibold text-red-500 mb-1">Processing Error</h4>
          <p className="text-slate-300 text-sm">{message}</p>
          <div className="mt-3 text-xs text-slate-400">
            <p>Please check the URL and try again. Make sure it's a valid TikTok video link.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorDisplay;
