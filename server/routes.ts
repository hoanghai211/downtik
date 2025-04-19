import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { TikTokVideo, tiktokVideoSchema } from "@shared/schema";
import fetch from "node-fetch";

export async function registerRoutes(app: Express): Promise<Server> {
  // Simple test route for health check
  app.get("/api/health", (req, res) => {
    res.status(200).json({ status: "ok" });
  });

  // TikTok URL download endpoint with mock implementation for development
  app.post("/api/download", async (req, res) => {
    try {
      const { url } = req.body;

      // Validate URL
      if (!url || typeof url !== "string") {
        return res.status(400).json({ error: "Missing or invalid TikTok URL" });
      }

      // Basic validation for TikTok URL
      if (!url.includes("tiktok.com")) {
        return res.status(400).json({ error: "Not a valid TikTok URL" });
      }

      // Extract username from URL if possible for a more realistic mock response
      const urlParts = url.split('/');
      let username = "@tiktok_user";
      
      // Try to extract username from URL (format: tiktok.com/@username/...)
      for (let i = 0; i < urlParts.length; i++) {
        if (urlParts[i].startsWith('@')) {
          username = urlParts[i];
          break;
        }
      }
      
      // Generate random view counts for a more dynamic demo
      const viewCount = Math.floor(Math.random() * 10) + 1;
      const commentCount = Math.floor(Math.random() * 5) + 1;
      const shareCount = Math.floor(Math.random() * 3) + 1;
      const downloadCount = Math.floor(Math.random() * 2) + 1;
      
      const mockResponse: TikTokVideo = {
        username: username,
        avatar: "https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1654721415359490~c5_100x100.jpeg",
        thumbnail: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/oAKgkpbiPbzFvfNQCNzDjnIeD0KAezrgxkLiMd",
        video_url: "https://api.example.com/download/no-watermark-video.mp4",
        audio_url: "https://api.example.com/download/audio.mp3",
        stats: {
          views: `${viewCount}.${Math.floor(Math.random() * 9)}M`,
          comments: `${commentCount}.${Math.floor(Math.random() * 9)}K`,
          shares: `${shareCount}.${Math.floor(Math.random() * 9)}K`, 
          downloads: `${downloadCount}.${Math.floor(Math.random() * 9)}K`
        }
      };

      return res.status(200).json(mockResponse);
      
      /* 
      // This is the actual implementation that will be used when we fully implement the API
      const response = await fetch("https://savetikk.com/profile.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          "Origin": "https://savetikk.com",
          "Referer": "https://savetikk.com/ja",
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
          "X-Requested-With": "XMLHttpRequest"
        },
        body: new URLSearchParams({
          "video-full-url": url
        }).toString()
      });

      if (!response.ok) {
        return res.status(500).json({ error: "Failed to fetch video data from TikTok" });
      }

      const html = await response.text();

      // Parse the HTML response
      const videoData = parseHtmlResponse(html);

      // Validate parsed data with our schema
      const validatedData = tiktokVideoSchema.parse(videoData);

      return res.status(200).json(validatedData);
      */
    } catch (error) {
      console.error("Error downloading TikTok video:", error);
      return res.status(500).json({ error: "Failed to process TikTok video" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

// Helper function to extract data from HTML response
function parseHtmlResponse(html: string): TikTokVideo {
  const getBetween = (string: string, start: string, end: string): string | null => {
    const str = ' ' + string;
    const startIndex = str.indexOf(start);
    if (startIndex === -1) return null;
    
    const contentStartIndex = startIndex + start.length;
    const contentEndIndex = str.indexOf(end, contentStartIndex);
    if (contentEndIndex === -1) return null;
    
    return str.substring(contentStartIndex, contentEndIndex).trim();
  };

  // Extract video URL
  const videoUrlPath = getBetween(html, 'href="api.php?url=', '&hd=1">Without Watermark');
  const videoUrl = videoUrlPath ? `https://savetikk.com/api.php?url=${videoUrlPath}&hd=1` : null;

  // Extract audio URL
  const audioUrlPartial = getBetween(html, 'href="', '.mp3&hd=1">Download MP3</a>');
  const audioUrl = audioUrlPartial ? `${audioUrlPartial}.mp3&hd=1` : null;

  // Extract other information
  const thumbnail = getBetween(html, "background-image: url('", "');");
  const avatar = getBetween(html, '<img class="result_author" src="', '" alt=');
  const username = getBetween(html, '<h2 class="maintext">', '</h2>');

  // Extract stats
  const views = getBetween(html, '<div class="icon-result icon-play"><i class="icon play-icon"></i><span>', '</span>');
  const comments = getBetween(html, '<div class="icon-result icon-comment"><i class="icon comment-icon"></i><span>', '</span>');
  const shares = getBetween(html, '<div class="icon-result icon-share"><i class="icon share-icon"></i><span>', '</span>');
  const downloads = getBetween(html, '<div class="icon-result icon-download"><i class="icon download-icon"></i><span>', '</span>');

  return {
    username: username || undefined,
    avatar: avatar || undefined,
    thumbnail: thumbnail || undefined,
    video_url: videoUrl || undefined,
    audio_url: audioUrl || undefined,
    stats: {
      views: views || undefined,
      comments: comments || undefined,
      shares: shares || undefined,
      downloads: downloads || undefined
    }
  };
}
