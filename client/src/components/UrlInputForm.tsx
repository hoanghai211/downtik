import React, { useState } from "react";
import { validateTikTokUrl } from "@/lib/validation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { X, Download, Loader2 } from "lucide-react";

interface UrlInputFormProps {
  onSubmit: (url: string) => void;
  isLoading: boolean;
}

const UrlInputForm: React.FC<UrlInputFormProps> = ({ onSubmit, isLoading }) => {
  const [url, setUrl] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const trimmedUrl = url.trim();
    
    if (!trimmedUrl) {
      setError("Please enter a TikTok URL");
      return;
    }
    
    if (!validateTikTokUrl(trimmedUrl)) {
      setError("Please enter a valid TikTok URL");
      return;
    }
    
    setError(null);
    onSubmit(trimmedUrl);
  };
  
  const handleClear = () => {
    setUrl("");
    setError(null);
  };
  
  return (
    <section className="max-w-3xl mx-auto mb-12 px-4">
      <Card className="border-0 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 shadow-xl backdrop-blur-lg">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-cyan-500/20 opacity-10"></div>
        <CardContent className="p-6 md:p-8 relative z-10">
          <form id="downloadForm" className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-2">
              <label htmlFor="tiktokUrl" className="text-slate-300 font-medium text-lg tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-cyan-400 font-bold">
                  TikTok Video URL
                </span>
              </label>
              <div className={`relative transition-all duration-300 rounded-xl ${isFocused ? 'ring-2 ring-primary/50 shadow-lg shadow-primary/20' : ''}`}>
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-primary/10">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.06.034C8.783.034 9.411.04 9.95.053c.54.013 1.01.04 1.42.08.528.115.977.295 1.348.54.37.244.684.558.941.941.245.371.425.82.54 1.348.04.41.067.88.08 1.42.013.54.02 1.167.02 1.89v2.347c0 .723-.007 1.35-.02 1.89-.013.54-.04 1.01-.08 1.42-.115.528-.295.977-.54 1.347a3.564 3.564 0 0 1-.941.942c-.371.244-.82.424-1.347.54-.411.04-.88.066-1.42.08-.54.013-1.167.02-1.89.02H5.712c-.723 0-1.35-.007-1.89-.02-.54-.014-1.01-.04-1.42-.08a3.817 3.817 0 0 1-1.347-.54 3.564 3.564 0 0 1-.942-.942 3.817 3.817 0 0 1-.54-1.348c-.04-.41-.066-.88-.08-1.42-.013-.54-.02-1.166-.02-1.89V6.272c0-.723.007-1.35.02-1.89.014-.54.04-1.01.08-1.42.115-.527.295-.977.54-1.348a3.564 3.564 0 0 1 .942-.94c.37-.246.82-.426 1.347-.54.41-.04.88-.068 1.42-.08.54-.014 1.167-.02 1.89-.02h2.347Zm3.326 3.57a1.011 1.011 0 0 0-.293-.714 1.011 1.011 0 0 0-.714-.293 1.011 1.011 0 0 0-.714.293 1.011 1.011 0 0 0-.293.714c0 .278.098.516.293.714.195.195.436.293.714.293.278 0 .516-.098.714-.293.195-.198.293-.436.293-.714ZM8 3.89c-.695 0-1.348.17-1.96.508a3.76 3.76 0 0 0-1.427 1.374A3.694 3.694 0 0 0 4.1 7.699c0 .695.17 1.348.508 1.96a3.76 3.76 0 0 0 1.374 1.428c.612.339 1.272.508 1.979.508.707 0 1.367-.17 1.979-.508a3.76 3.76 0 0 0 1.427-1.427A3.694 3.694 0 0 0 11.9 7.7a3.694 3.694 0 0 0-.533-1.927 3.76 3.76 0 0 0-1.427-1.374A3.754 3.754 0 0 0 8 3.89Zm0 6.647c-.778 0-1.444-.278-1.999-.833-.554-.554-.832-1.22-.832-1.998 0-.778.278-1.444.832-1.999.555-.554 1.221-.832 1.999-.832.778 0 1.444.278 1.998.832.555.555.833 1.22.833 1.999 0 .778-.278 1.444-.833 1.998-.554.555-1.22.833-1.998.833Z" fill="currentColor" className="fill-primary"/>
                    </svg>
                  </div>
                </div>
                <Input
                  id="tiktokUrl"
                  value={url}
                  onChange={(e) => {
                    setUrl(e.target.value);
                    if (error) setError(null);
                  }}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  placeholder="https://www.tiktok.com/@username/video/1234567890123456789"
                  className="pl-12 pr-12 py-6 h-14 text-white bg-slate-800/50 border-slate-700 rounded-xl placeholder:text-slate-500 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-primary/50"
                />
                {url && (
                  <button
                    type="button"
                    onClick={handleClear}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-500 hover:text-white transition-colors"
                  >
                    <X size={18} />
                  </button>
                )}
              </div>
              {error && (
                <p className="text-[#FF0050] text-sm mt-2 flex items-center">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                    <path d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zM7 3v6h2V3H7zm0 8v2h2v-2H7z" fill="#FF0050"/>
                  </svg>
                  {error}
                </p>
              )}
            </div>
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full py-6 px-6 h-14 bg-gradient-to-r from-[#FF0050] to-[#00F2EA] hover:brightness-110 transition-all transform hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/30 rounded-xl font-bold text-base"
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Processing...
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  <Download className="w-5 h-5 mr-2" />
                  Download Without Watermark
                </span>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
};

export default UrlInputForm;
