// TikTok Downloader Simple Server
// This is a simplified server that serves both API and frontend without bundling
const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

// Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

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
    
    // Extract username from URL if possible
    const urlParts = url.split('/');
    let username = "@tiktok_user";
    
    for (let i = 0; i < urlParts.length; i++) {
      if (urlParts[i].startsWith('@')) {
        username = urlParts[i];
        break;
      }
    }
    
    // Mock response for testing
    const mockResponse = {
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

// Serve the frontend as a single HTML page
app.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TikTok Video Downloader</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #000;
      color: #fff;
      line-height: 1.6;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
    }
    
    header {
      text-align: center;
      margin-bottom: 3rem;
    }
    
    .logo {
      font-size: 2.5rem;
      font-weight: 800;
      background: linear-gradient(90deg, #ff0050, #00f2ea);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 1rem;
    }
    
    .tagline {
      font-size: 1.2rem;
      color: #888;
    }
    
    .url-form {
      background: linear-gradient(135deg, #ff0050, #00f2ea);
      padding: 3px;
      border-radius: 10px;
      margin-bottom: 2rem;
    }
    
    .url-form-inner {
      background: #111;
      border-radius: 8px;
      padding: 2rem;
    }
    
    .url-form h2 {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
    }
    
    .input-group {
      display: flex;
      gap: 1rem;
      margin-bottom: 1rem;
    }
    
    .input-group input {
      flex: 1;
      padding: 1rem;
      border: none;
      background: #222;
      color: #fff;
      border-radius: 5px;
      font-size: 1rem;
    }
    
    .input-group button {
      padding: 1rem 2rem;
      border: none;
      background: linear-gradient(90deg, #ff0050, #00f2ea);
      color: #fff;
      font-weight: 600;
      border-radius: 5px;
      cursor: pointer;
      transition: opacity 0.2s;
    }
    
    .input-group button:hover {
      opacity: 0.9;
    }
    
    .input-group button:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
    
    .error-message {
      color: #ff0050;
      margin-top: 1rem;
      display: none;
    }
    
    .result-container {
      background: #111;
      border-radius: 10px;
      padding: 2rem;
      margin-bottom: 2rem;
      display: none;
    }
    
    .result-container h2 {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
    }
    
    .video-result {
      display: flex;
      gap: 2rem;
      flex-wrap: wrap;
    }
    
    .video-thumbnail {
      flex: 1;
      min-width: 280px;
    }
    
    .video-thumbnail img {
      width: 100%;
      border-radius: 8px;
      object-fit: cover;
    }
    
    .video-info {
      flex: 2;
      min-width: 300px;
    }
    
    .user-info {
      display: flex;
      align-items: center;
      margin-bottom: 1.5rem;
    }
    
    .user-avatar {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-right: 1rem;
    }
    
    .username {
      font-weight: 600;
      font-size: 1.2rem;
    }
    
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
      margin-bottom: 2rem;
    }
    
    .stat-item .stat-label {
      color: #888;
      margin-bottom: 0.3rem;
    }
    
    .stat-value {
      font-weight: 600;
      font-size: 1.1rem;
    }
    
    .download-buttons {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }
    
    .download-btn {
      padding: 0.8rem 1.5rem;
      text-decoration: none;
      color: #fff;
      font-weight: 600;
      border-radius: 5px;
      transition: opacity 0.2s;
    }
    
    .video-btn {
      background: linear-gradient(90deg, #ff0050, #8e2de2);
    }
    
    .audio-btn {
      background: linear-gradient(90deg, #00f2ea, #4facfe);
    }
    
    .download-btn:hover {
      opacity: 0.9;
    }
    
    footer {
      text-align: center;
      padding: 2rem 0;
      color: #888;
    }
    
    @media (max-width: 768px) {
      .input-group {
        flex-direction: column;
      }
      
      .input-group button {
        width: 100%;
      }
      
      .video-result {
        flex-direction: column;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <h1 class="logo">TikTok Downloader</h1>
      <p class="tagline">Download TikTok videos without watermark</p>
    </header>
    
    <div class="url-form">
      <div class="url-form-inner">
        <h2>Enter TikTok URL</h2>
        <div class="input-group">
          <input type="text" id="tiktok-url" placeholder="Paste TikTok URL here...">
          <button id="download-btn">Download</button>
        </div>
        <div id="error-message" class="error-message"></div>
      </div>
    </div>
    
    <div id="result-container" class="result-container">
      <h2>Download Ready</h2>
      <div class="video-result">
        <div class="video-thumbnail">
          <img id="video-thumbnail" src="" alt="Video thumbnail">
        </div>
        <div class="video-info">
          <div class="user-info">
            <img id="user-avatar" class="user-avatar" src="" alt="User avatar">
            <span id="username" class="username"></span>
          </div>
          
          <div class="stats-grid">
            <div class="stat-item">
              <div class="stat-label">Views</div>
              <div id="views" class="stat-value"></div>
            </div>
            <div class="stat-item">
              <div class="stat-label">Comments</div>
              <div id="comments" class="stat-value"></div>
            </div>
            <div class="stat-item">
              <div class="stat-label">Shares</div>
              <div id="shares" class="stat-value"></div>
            </div>
            <div class="stat-item">
              <div class="stat-label">Downloads</div>
              <div id="downloads" class="stat-value"></div>
            </div>
          </div>
          
          <div class="download-buttons">
            <a id="video-download" href="#" class="download-btn video-btn" target="_blank">Download Video</a>
            <a id="audio-download" href="#" class="download-btn audio-btn" target="_blank">Download Audio</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <footer>
    <p>&copy; 2023 TikTok Downloader. This tool is for educational purposes only.</p>
  </footer>

  <script>
    document.addEventListener('DOMContentLoaded', function() {
      const downloadBtn = document.getElementById('download-btn');
      const tiktokUrlInput = document.getElementById('tiktok-url');
      const errorMessage = document.getElementById('error-message');
      const resultContainer = document.getElementById('result-container');
      
      // Elements for displaying results
      const videoThumbnail = document.getElementById('video-thumbnail');
      const userAvatar = document.getElementById('user-avatar');
      const username = document.getElementById('username');
      const views = document.getElementById('views');
      const comments = document.getElementById('comments');
      const shares = document.getElementById('shares');
      const downloads = document.getElementById('downloads');
      const videoDownload = document.getElementById('video-download');
      const audioDownload = document.getElementById('audio-download');
      
      downloadBtn.addEventListener('click', function() {
        const url = tiktokUrlInput.value.trim();
        
        // Reset error message
        errorMessage.style.display = 'none';
        
        // Validate URL
        if (!url) {
          errorMessage.textContent = 'Please enter a TikTok URL';
          errorMessage.style.display = 'block';
          return;
        }
        
        if (!url.includes('tiktok.com')) {
          errorMessage.textContent = 'Not a valid TikTok URL';
          errorMessage.style.display = 'block';
          return;
        }
        
        // Change button state
        downloadBtn.textContent = 'Processing...';
        downloadBtn.disabled = true;
        
        // Call API
        fetch('/api/download', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ url })
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to process video');
          }
          return response.json();
        })
        .then(data => {
          // Update UI with results
          videoThumbnail.src = data.thumbnail || '';
          userAvatar.src = data.avatar || '';
          username.textContent = data.username || '@user';
          
          // Update stats
          views.textContent = data.stats?.views || '0';
          comments.textContent = data.stats?.comments || '0';
          shares.textContent = data.stats?.shares || '0';
          downloads.textContent = data.stats?.downloads || '0';
          
          // Set download links
          videoDownload.href = data.video_url || '#';
          audioDownload.href = data.audio_url || '#';
          
          // Show result container
          resultContainer.style.display = 'block';
          
          // Scroll to results
          resultContainer.scrollIntoView({ behavior: 'smooth' });
        })
        .catch(error => {
          errorMessage.textContent = error.message;
          errorMessage.style.display = 'block';
        })
        .finally(() => {
          // Reset button state
          downloadBtn.textContent = 'Download';
          downloadBtn.disabled = false;
        });
      });
    });
  </script>
</body>
</html>
  `);
});

// Catch-all route for any other requests
app.get('*', (req, res) => {
  res.redirect('/');
});

// Start server
const port = process.env.PORT || 5000;
app.listen(port, '0.0.0.0', () => {
  console.log(`TikTok Downloader server running on port ${port}`);
  console.log(`Visit http://localhost:${port} to use the app`);
});