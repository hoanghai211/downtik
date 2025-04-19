// Simple Express server that handles both API and serving the frontend
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

// API endpoints
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.post('/api/download', (req, res) => {
  try {
    const { url } = req.body;
    
    if (!url || typeof url !== 'string') {
      return res.status(400).json({ error: "Missing or invalid TikTok URL" });
    }
    
    if (!url.includes('tiktok.com')) {
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
    
    // Generate random stats for demo
    const viewCount = Math.floor(Math.random() * 10) + 1;
    const commentCount = Math.floor(Math.random() * 5) + 1;
    const shareCount = Math.floor(Math.random() * 3) + 1;
    const downloadCount = Math.floor(Math.random() * 2) + 1;
    
    const mockResponse = {
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
    console.error("Error processing request:", error);
    return res.status(500).json({ error: "Failed to process TikTok video" });
  }
});

// Start server
const port = 5000;
app.listen(port, '0.0.0.0', () => {
  console.log(`API server running on port ${port}`);
});