import express from "express";
import { createServer } from "http";
import { TikTokVideo } from "@shared/schema";
import { setupVite, serveStatic, log } from "./vite";
import path from "path";
import fs from "fs";

// Create Express app
const app = express();
app.use(express.json());

// Simple logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// Health check endpoint
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

// Ping endpoint for testing
app.get("/api/ping", (_req, res) => {
  res.json({ message: "Server is running!" });
});

// TikTok URL download endpoint
app.post("/api/download", (req, res) => {
  try {
    const { url } = req.body;
    
    if (!url || typeof url !== "string") {
      return res.status(400).json({ error: "Missing or invalid TikTok URL" });
    }
    
    if (!url.includes("tiktok.com")) {
      return res.status(400).json({ error: "Not a valid TikTok URL" });
    }
    
    // Extract username from URL if possible
    const urlParts = url.split('/');
    let username = "@tiktok_user";
    
    for (let i = 0; i < urlParts.length; i++) {
      if (urlParts[i].startsWith('@')) {
        username = urlParts[i];
        break;
      }
    }
    
    // Generate random stats for the demo
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
  } catch (error) {
    console.error("Error processing TikTok URL:", error);
    return res.status(500).json({ error: "Failed to process TikTok video" });
  }
});

// Create HTTP server
const server = createServer(app);

// Handle frontend serving
(async () => {
  try {
    if (process.env.NODE_ENV === "development") {
      try {
        // Use Vite's built-in development server
        console.log("Setting up Vite development server");
        await setupVite(app, server);
      } catch (err) {
        console.error("Failed to set up Vite:", err);
        
        // Fallback to serving static files if Vite setup fails
        console.log("Using fallback to serve static files");
        const clientDir = path.resolve(process.cwd(), "client");
        const indexPath = path.join(clientDir, "index.html");

        if (fs.existsSync(clientDir) && fs.existsSync(indexPath)) {
          app.use(express.static(clientDir));
          app.get("*", (req, res) => {
            res.sendFile(indexPath);
          });
        } else {
          console.error("Client directory or index.html not found:", clientDir);
        }
      }
    } else {
      // In production, serve the built client
      serveStatic(app);
    }
    
    // Start server
    const port = 5000;
    server.listen(port, "0.0.0.0", () => {
      console.log(`Server running on port ${port} in ${process.env.NODE_ENV || 'development'} mode`);
    });
  } catch (error) {
    console.error("Server startup error:", error);
    process.exit(1);
  }
})();
