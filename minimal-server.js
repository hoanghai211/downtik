import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// API routes
app.use(express.json());

// API endpoints
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/api/ping', (req, res) => {
  res.json({ message: 'Server is running!' });
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
    
    // Generate a mock response
    const mockResponse = {
      username: "@tiktok_user",
      avatar: "https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1654721415359490~c5_100x100.jpeg",
      thumbnail: "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/oAKgkpbiPbzFvfNQCNzDjnIeD0KAezrgxkLiMd",
      video_url: "https://api.example.com/download/no-watermark-video.mp4",
      audio_url: "https://api.example.com/download/audio.mp3",
      stats: {
        views: "1.2M",
        comments: "5.4K",
        shares: "12.3K",
        downloads: "98.7K"
      }
    };
    
    return res.status(200).json(mockResponse);
  } catch (error) {
    console.error("Error processing request:", error);
    return res.status(500).json({ error: "Failed to process TikTok video" });
  }
});

// Serve static files
const staticDir = path.join(__dirname, 'client');
app.use(express.static(staticDir));

// Serve index.html for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(staticDir, 'index.html'));
});

// Start server
const port = 5000;
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
  
  // Print directory information
  console.log('Static files being served from:', staticDir);
  console.log('index.html exists:', fs.existsSync(path.join(staticDir, 'index.html')));
});