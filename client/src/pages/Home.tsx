import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import UrlInputForm from "@/components/UrlInputForm";
import VideoResult from "@/components/VideoResult";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import ErrorDisplay from "@/components/ErrorDisplay";
import { useQuery, useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { queryClient } from "@/lib/queryClient";
import { useState, useEffect } from "react";
import { TikTokVideo } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";

const Home = () => {
  const [url, setUrl] = useState("");
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  // Set dark mode for the futuristic design
  useEffect(() => {
    document.documentElement.classList.add('dark');
    return () => {
      document.documentElement.classList.remove('dark');
    };
  }, []);

  const downloadMutation = useMutation({
    mutationFn: async (tiktokUrl: string) => {
      const response = await apiRequest("POST", "/api/download", { url: tiktokUrl });
      return response.json();
    },
    onSuccess: (data) => {
      if (data.error) {
        setError(data.error);
        toast({
          variant: "destructive",
          title: "Error",
          description: data.error,
        });
      } else {
        setError(null);
        queryClient.setQueryData(["/api/tiktok-video"], data);
        
        // Success toast
        toast({
          title: "Success!",
          description: "Video processed successfully. Ready to download!",
          variant: "default",
        });
      }
    },
    onError: (error: Error) => {
      setError(error.message);
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    },
  });

  const { data: videoData } = useQuery<TikTokVideo>({
    queryKey: ["/api/tiktok-video"],
    enabled: false, // Don't auto-fetch
  });

  const handleSubmit = (tiktokUrl: string) => {
    setUrl(tiktokUrl);
    downloadMutation.mutate(tiktokUrl);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-white">
      {/* Background patterns */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(var(--primary-rgb),0.05),transparent_50%)]"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute top-1/3 left-1/4 w-60 h-60 bg-cyan-500/5 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl opacity-30"></div>
      </div>
      
      <Header />
      <main className="container mx-auto px-4 py-10 flex-grow z-10">
        <HeroSection />
        <UrlInputForm 
          onSubmit={handleSubmit} 
          isLoading={downloadMutation.isPending} 
        />
        
        {error && <ErrorDisplay message={error} />}
        
        {videoData && !error && (
          <VideoResult videoData={videoData} />
        )}

        <HowItWorks />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
