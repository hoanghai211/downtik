import express from "express";
import { createServer } from "http";
import { TikTokVideo } from "@shared/schema";
import { setupVite, serveStatic } from "./vite";

// Create minimal Express app
const app = express();
app.use(express.json());

// API endpoints
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.get("/api/ping", (_req, res) => {
  res.json({ message: "Server is running!" });
});

// TikTok URL download endpoint with simple mock response
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
    
    // Simple mock response
    const mockResponse: TikTokVideo = {
      username: username,
      avatar: "https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1654721415359490~c5_100x100.jpeg",
      thumbnail: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/oAKgkpbiPbzFvfNQCNzDjnIeD0KAezrgxkLiMd",
      video_url: "https://api.example.com/download/no-watermark-video.mp4",
      audio_url: "https://api.example.com/download/audio.mp3",
      stats: {
        views: "1.5M",
        comments: "10.2K",
        shares: "5.4K", 
        downloads: "2.1K"
      }
    };
    
    return res.status(200).json(mockResponse);
  } catch (error) {
    console.error("Error processing request:", error);
    return res.status(500).json({ error: "Failed to process TikTok video" });
  }
});

// Create HTTP server
const server = createServer(app);

// Use the existing Vite setup
if (process.env.NODE_ENV === "development") {
  setupVite(app, server)
    .then(() => {
      const port = 5000;
      server.listen(port, "0.0.0.0", () => {
        console.log(`Server running on port ${port} in development mode`);
      });
    })
    .catch(error => {
      console.error("Failed to set up Vite:", error);
      // Start server anyway
      const port = 5000;
      server.listen(port, "0.0.0.0", () => {
        console.log(`Server running on port ${port} (API only)`);
      });
    });
} else {
  // Production mode
  serveStatic(app);
  const port = 5000;
  server.listen(port, "0.0.0.0", () => {
    console.log(`Server running on port ${port} in production mode`);
  });
}
