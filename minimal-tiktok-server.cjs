// Ultra-minimal Express server with no complex route patterns
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const FormData = require('form-data');

// Create Express app
const app = express();

// Essential middleware only
app.use(express.json());
app.use(cors());

// Helper function to extract data between two strings (like PHP's get_between)
function getBetween(string, start, end) {
  const startPos = string.indexOf(start);
  if (startPos === -1) return null;
  
  const endPos = string.indexOf(end, startPos + start.length);
  if (endPos === -1) return null;
  
  return string.substring(startPos + start.length, endPos).trim();
}

// Fixed API routes
app.get("/api/ping", (req, res) => {
  res.json({ message: "Server is running!" });
});

app.post("/api/download", async (req, res) => {
  try {
    const { url } = req.body;
    
    if (!url || typeof url !== 'string') {
      return res.status(400).json({ error: "Missing or invalid TikTok URL" });
    }
    
    if (!url.includes('tiktok.com')) {
      return res.status(400).json({ error: "Not a valid TikTok URL" });
    }
    
    console.log(`Processing TikTok URL: ${url}`);
    
    try {
      // Create form data
      const formData = new FormData();
      formData.append('video-full-url', url);
      
      // Make request to savetikk.com
      const response = await axios({
        method: 'post',
        url: 'https://savetikk.com/profile.php',
        headers: {
          'Origin': 'https://savetikk.com',
          'Referer': 'https://savetikk.com/ja',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
          'X-Requested-With': 'XMLHttpRequest',
          ...formData.getHeaders()
        },
        data: formData
      });
      
      // Log response status
      console.log(`Response received with status: ${response.status}`);
      
      // Extract data from HTML
      const html = response.data;
      
      const video_url_path = getBetween(html, 'href="api.php?url=', '&hd=1">Without Watermark');
      const video_url = video_url_path ? `https://savetikk.com/api.php?url=${video_url_path}&hd=1` : null;
      
      const audio_url_path = getBetween(html, 'href="', '.mp3&hd=1">Download MP3</a>');
      const audio_url = audio_url_path ? `${audio_url_path}.mp3&hd=1` : null;
      
      const thumb = getBetween(html, "background-image: url('", "');");
      const avatar = getBetween(html, '<img class="result_author" src="', '" alt=');
      const username = getBetween(html, '<h2 class="maintext">', '</h2>');
      
      const views = getBetween(html, '<div class="icon-result icon-play"><i class="icon play-icon"></i><span>', '</span>');
      const comments = getBetween(html, '<div class="icon-result icon-comment"><i class="icon comment-icon"></i><span>', '</span>');
      const shares = getBetween(html, '<div class="icon-result icon-share"><i class="icon share-icon"></i><span>', '</span>');
      const downloads = getBetween(html, '<div class="icon-result icon-download"><i class="icon download-icon"></i><span>', '</span>');
      
      // Create response object
      const result = {
        username: username || '@unknown',
        avatar: avatar || 'https://placehold.co/100x100',
        thumbnail: thumb || 'https://placehold.co/300x400',
        video_url: video_url,
        audio_url: audio_url,
        stats: {
          views: views || '0',
          comments: comments || '0',
          shares: shares || '0',
          downloads: downloads || '0'
        }
      };
      
      console.log('Successfully processed TikTok video');
      return res.status(200).json(result);
    } catch (apiError) {
      console.error("API error:", apiError.message);
      
      // Extract username if possible for fallback response
      const urlParts = url.split('/');
      let username = "@tiktok_user";
      
      for (let i = 0; i < urlParts.length; i++) {
        if (urlParts[i].startsWith('@')) {
          username = urlParts[i];
          break;
        }
      }
      
      // If the service failed, return an error
      return res.status(500).json({ 
        error: "Failed to process TikTok video. The download service might be unavailable.", 
        details: apiError.message 
      });
    }
  } catch (error) {
    console.error("Error processing request:", error);
    return res.status(500).json({ error: "Failed to process TikTok video" });
  }
});

// Modern CEO-standard HTML page
app.get("/", (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TikSave Pro | Premium TikTok Video Downloader</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <style>
    :root {
      --primary-color: #4361ee;
      --primary-gradient: linear-gradient(135deg, #4361ee, #7209b7);
      --secondary-color: #f72585;
      --secondary-gradient: linear-gradient(135deg, #f72585, #7209b7);
      --accent-color: #4cc9f0;
      --dark-bg: #0f172a;
      --darker-bg: #060b18;
      --card-bg: #1e293b;
      --light-text: #e2e8f0;
      --muted-text: #94a3b8;
      --success-color: #10b981;
      --warning-color: #f59e0b;
      --font-primary: 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
    }
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: var(--font-primary);
      background-color: var(--dark-bg);
      color: var(--light-text);
      line-height: 1.5;
      font-size: 15px;
    }
    
    a {
      text-decoration: none;
      color: inherit;
      transition: all 0.3s ease;
    }
    
    .container {
      width: 100%;
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 1rem;
    }
    
    /* Navigation */
    .navbar {
      background-color: rgba(15, 23, 42, 0.92);
      backdrop-filter: blur(10px);
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 100;
      border-bottom: 1px solid rgba(148, 163, 184, 0.1);
    }
    
    .nav-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 70px;
      padding: 0 2rem;
    }
    
    .nav-logo {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-weight: 700;
      font-size: 1.3rem;
    }
    
    .logo-gradient {
      background: var(--primary-gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    
    .nav-links {
      display: flex;
      gap: 2rem;
      align-items: center;
    }
    
    .nav-link {
      font-size: 0.9rem;
      font-weight: 500;
      padding: 0.5rem 0;
      color: var(--muted-text);
      position: relative;
    }
    
    .nav-link:hover {
      color: var(--light-text);
    }
    
    .nav-link::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--primary-gradient);
      transition: width 0.3s ease;
    }
    
    .nav-link:hover::after {
      width: 100%;
    }
    
    .nav-link.active {
      color: var(--light-text);
    }
    
    .nav-link.active::after {
      width: 100%;
    }
    
    .cta-button {
      background: var(--primary-gradient);
      color: white;
      padding: 0.6rem 1.2rem;
      border-radius: 30px;
      font-weight: 600;
      font-size: 0.85rem;
      letter-spacing: 0.3px;
      border: none;
      cursor: pointer;
      transition: all 0.3s ease;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      box-shadow: 0 4px 12px rgba(67, 97, 238, 0.3);
    }
    
    .cta-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 16px rgba(67, 97, 238, 0.4);
    }
    
    .mobile-menu-toggle {
      display: none;
      background: none;
      border: none;
      color: var(--light-text);
      font-size: 1.5rem;
      cursor: pointer;
    }
    
    /* Hero Section */
    .hero {
      padding: 120px 0 80px;
      background: var(--darker-bg);
      position: relative;
      overflow: hidden;
    }
    
    .hero::before {
      content: '';
      position: absolute;
      top: -100px;
      right: -100px;
      width: 400px;
      height: 400px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(76, 201, 240, 0.1) 0%, rgba(67, 97, 238, 0.05) 50%, rgba(15, 23, 42, 0) 70%);
      z-index: 1;
    }
    
    .hero::after {
      content: '';
      position: absolute;
      bottom: -150px;
      left: -150px;
      width: 500px;
      height: 500px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(247, 37, 133, 0.08) 0%, rgba(114, 9, 183, 0.05) 50%, rgba(15, 23, 42, 0) 70%);
      z-index: 1;
    }
    
    .hero-content {
      position: relative;
      z-index: 2;
      text-align: center;
      max-width: 800px;
      margin: 0 auto;
    }
    
    .hero-badge {
      display: inline-flex;
      align-items: center;
      background-color: rgba(76, 201, 240, 0.1);
      color: var(--accent-color);
      padding: 0.4rem 1rem;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 600;
      margin-bottom: 1.5rem;
    }
    
    .hero-badge i {
      margin-right: 0.4rem;
    }
    
    .hero-title {
      font-size: 2.75rem;
      font-weight: 800;
      line-height: 1.2;
      margin-bottom: 1.5rem;
      background: linear-gradient(to right, #e2e8f0, #ffffff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    
    .hero-title span {
      display: inline-block;
      background: var(--primary-gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    
    .hero-description {
      font-size: 1.1rem;
      color: var(--muted-text);
      margin-bottom: 2rem;
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
      line-height: 1.6;
    }
    
    /* Downloader Form */
    .downloader-card {
      background: var(--card-bg);
      border-radius: 16px;
      padding: 2rem;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
      margin-top: 2rem;
      position: relative;
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
      border: 1px solid rgba(255, 255, 255, 0.05);
    }
    
    .downloader-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 5px;
      background: var(--primary-gradient);
      border-radius: 16px 16px 0 0;
    }
    
    .form-title {
      font-size: 1.2rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
      color: white;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    
    .url-form-group {
      display: flex;
      gap: 1rem;
      position: relative;
      margin-bottom: 1rem;
    }
    
    .url-input-container {
      flex: 1;
      position: relative;
    }
    
    .url-input-icon {
      position: absolute;
      left: 15px;
      top: 50%;
      transform: translateY(-50%);
      color: var(--muted-text);
      pointer-events: none;
    }
    
    .url-input {
      width: 100%;
      padding: 0.85rem 1rem 0.85rem 2.5rem;
      border: 1px solid rgba(148, 163, 184, 0.2);
      background-color: rgba(255, 255, 255, 0.03);
      border-radius: 6px;
      font-size: 0.95rem;
      color: white;
      transition: all 0.3s ease;
    }
    
    .url-input:focus {
      outline: none;
      border-color: var(--primary-color);
      box-shadow: 0 0 0 3px rgba(67, 97, 238, 0.15);
    }
    
    .url-input::placeholder {
      color: var(--muted-text);
      font-size: 0.9rem;
    }
    
    .download-btn {
      padding: 0 1.5rem;
      background: var(--primary-gradient);
      color: white;
      border: none;
      border-radius: 6px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      min-width: 140px;
      height: 48px;
      font-size: 0.9rem;
      box-shadow: 0 4px 10px rgba(67, 97, 238, 0.25);
    }
    
    .download-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 15px rgba(67, 97, 238, 0.35);
    }
    
    .download-btn:disabled {
      opacity: 0.7;
      cursor: not-allowed;
      transform: none;
    }
    
    .download-btn i {
      font-size: 0.9rem;
    }
    
    .supported-platforms {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1.5rem;
      margin-top: 1.5rem;
    }
    
    .platform {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: var(--muted-text);
      font-size: 0.85rem;
    }
    
    .platform i {
      font-size: 1.2rem;
    }
    
    .error-message {
      background-color: rgba(247, 37, 133, 0.1);
      color: var(--secondary-color);
      border-left: 3px solid var(--secondary-color);
      padding: 0.8rem 1rem;
      border-radius: 4px;
      margin-top: 1rem;
      font-size: 0.9rem;
      display: none;
    }
    
    /* Results Section */
    .results-section {
      padding: 3rem 0;
    }
    
    .results-container {
      background: var(--card-bg);
      border-radius: 16px;
      border: 1px solid rgba(255, 255, 255, 0.05);
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
      display: none;
      margin-bottom: 3rem;
    }
    
    .results-header {
      background-color: rgba(67, 97, 238, 0.1);
      padding: 1.2rem 1.5rem;
      border-bottom: 1px solid rgba(67, 97, 238, 0.2);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    
    .results-title {
      font-size: 1.1rem;
      font-weight: 700;
      color: white;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    
    .results-title i {
      color: var(--primary-color);
    }
    
    .results-content {
      padding: 1.5rem;
    }
    
    .video-preview {
      display: grid;
      grid-template-columns: 1fr 1.5fr;
      gap: 2rem;
    }
    
    .thumbnail-container {
      position: relative;
      border-radius: 10px;
      overflow: hidden;
      background-color: rgba(0, 0, 0, 0.2);
      aspect-ratio: 9/16;
    }
    
    .thumbnail {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .play-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    
    .play-button {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(5px);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
    }
    
    .play-button i {
      color: white;
      font-size: 1.5rem;
    }
    
    .thumbnail-container:hover .play-overlay {
      opacity: 1;
    }
    
    .thumbnail-container:hover .play-button {
      transform: scale(1.1);
    }
    
    .video-details {
      display: flex;
      flex-direction: column;
    }
    
    .video-author {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1.5rem;
      padding-bottom: 1.5rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .author-avatar {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      object-fit: cover;
      border: 2px solid var(--primary-color);
    }
    
    .author-info {
      display: flex;
      flex-direction: column;
    }
    
    .author-username {
      font-weight: 700;
      font-size: 1.1rem;
      color: white;
    }
    
    .verified-badge {
      color: var(--primary-color);
      margin-left: 0.3rem;
      font-size: 0.9rem;
    }
    
    .author-follower-count {
      color: var(--muted-text);
      font-size: 0.85rem;
      margin-top: 0.2rem;
    }
    
    .video-stats {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
      margin-bottom: 1.5rem;
    }
    
    .stat-card {
      background-color: rgba(255, 255, 255, 0.03);
      border-radius: 8px;
      padding: 1rem;
      display: flex;
      flex-direction: column;
    }
    
    .stat-label {
      color: var(--muted-text);
      font-size: 0.8rem;
      margin-bottom: 0.5rem;
      display: flex;
      align-items: center;
      gap: 0.3rem;
    }
    
    .stat-label i {
      color: var(--primary-color);
    }
    
    .stat-value {
      font-weight: 700;
      font-size: 1.2rem;
      color: white;
    }
    
    .download-options {
      margin-top: auto;
    }
    
    .options-title {
      font-weight: 600;
      font-size: 0.9rem;
      color: var(--muted-text);
      margin-bottom: 1rem;
    }
    
    .download-buttons-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
    
    .download-option {
      padding: 0.8rem;
      text-align: center;
      border-radius: 8px;
      transition: all 0.3s ease;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
    }
    
    .download-option-label {
      font-size: 0.85rem;
      font-weight: 600;
    }
    
    .video-download-option {
      color: white;
      background: var(--primary-gradient);
      box-shadow: 0 4px 12px rgba(67, 97, 238, 0.25);
    }
    
    .audio-download-option {
      color: white;
      background: var(--secondary-gradient);
      box-shadow: 0 4px 12px rgba(247, 37, 133, 0.25);
    }
    
    .download-option:hover {
      transform: translateY(-3px);
    }
    
    .video-download-option:hover {
      box-shadow: 0 6px 15px rgba(67, 97, 238, 0.35);
    }
    
    .audio-download-option:hover {
      box-shadow: 0 6px 15px rgba(247, 37, 133, 0.35);
    }
    
    /* Features Section */
    .features-section {
      padding: 5rem 0;
      position: relative;
      background-color: var(--darker-bg);
    }
    
    .section-title {
      text-align: center;
      margin-bottom: 3rem;
    }
    
    .section-subtitle {
      font-size: 0.9rem;
      color: var(--primary-color);
      font-weight: 600;
      margin-bottom: 0.5rem;
      letter-spacing: 1px;
      text-transform: uppercase;
    }
    
    .section-heading {
      font-size: 2rem;
      font-weight: 800;
      color: white;
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
    }
    
    .features-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
      margin-top: 2rem;
    }
    
    .feature-card {
      background-color: var(--card-bg);
      border-radius: 12px;
      padding: 1.5rem;
      position: relative;
      overflow: hidden;
      transition: all 0.3s ease;
      border: 1px solid rgba(255, 255, 255, 0.03);
    }
    
    .feature-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
      border-color: rgba(67, 97, 238, 0.2);
    }
    
    .feature-icon {
      width: 50px;
      height: 50px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      margin-bottom: 1.2rem;
    }
    
    .feature-icon.purple {
      background: rgba(114, 9, 183, 0.15);
      color: #7209b7;
    }
    
    .feature-icon.blue {
      background: rgba(67, 97, 238, 0.15);
      color: #4361ee;
    }
    
    .feature-icon.pink {
      background: rgba(247, 37, 133, 0.15);
      color: #f72585;
    }
    
    .feature-title {
      font-size: 1.1rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
      color: white;
    }
    
    .feature-description {
      color: var(--muted-text);
      font-size: 0.9rem;
      line-height: 1.6;
    }
    
    /* Footer */
    .footer {
      background-color: var(--darker-bg);
      padding: 3rem 0 1.5rem;
      position: relative;
      overflow: hidden;
      border-top: 1px solid rgba(255, 255, 255, 0.05);
    }
    
    .footer-content {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1fr;
      gap: 3rem;
    }
    
    .footer-brand {
      display: flex;
      flex-direction: column;
    }
    
    .footer-logo {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 1rem;
      font-size: 1.4rem;
      font-weight: 700;
    }
    
    .footer-description {
      color: var(--muted-text);
      font-size: 0.9rem;
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }
    
    .footer-social {
      display: flex;
      gap: 1rem;
      margin-top: 1rem;
    }
    
    .social-icon {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.05);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--muted-text);
      transition: all 0.3s ease;
    }
    
    .social-icon:hover {
      background: var(--primary-gradient);
      color: white;
      transform: translateY(-3px);
    }
    
    .footer-column h3 {
      font-size: 1rem;
      font-weight: 700;
      margin-bottom: 1.2rem;
      color: white;
    }
    
    .footer-links {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
    }
    
    .footer-link {
      color: var(--muted-text);
      font-size: 0.9rem;
      transition: all 0.3s ease;
    }
    
    .footer-link:hover {
      color: white;
      transform: translateX(3px);
    }
    
    .copyright {
      text-align: center;
      color: var(--muted-text);
      font-size: 0.85rem;
      margin-top: 3rem;
      padding-top: 1.5rem;
      border-top: 1px solid rgba(255, 255, 255, 0.05);
    }
    
    /* Responsive Styles */
    @media (max-width: 1200px) {
      .features-grid {
        grid-template-columns: repeat(2, 1fr);
      }
      
      .footer-content {
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
      }
    }
    
    @media (max-width: 992px) {
      .nav-links {
        display: none;
      }
      
      .mobile-menu-toggle {
        display: block;
      }
      
      .hero-title {
        font-size: 2.2rem;
      }
      
      .video-preview {
        grid-template-columns: 1fr;
      }
      
      .thumbnail-container {
        max-width: 350px;
        margin: 0 auto;
      }
    }
    
    @media (max-width: 768px) {
      .nav-container {
        padding: 0 1rem;
      }
      
      .hero {
        padding-top: 100px;
      }
      
      .hero-title {
        font-size: 1.8rem;
      }
      
      .hero-description {
        font-size: 1rem;
      }
      
      .features-grid {
        grid-template-columns: 1fr;
      }
      
      .url-form-group {
        flex-direction: column;
      }
      
      .download-btn {
        width: 100%;
      }
      
      .footer-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
    }
  </style>
</head>
<body>
  <!-- Navigation -->
  <nav class="navbar">
    <div class="container nav-container">
      <a href="/" class="nav-logo">
        <i class="fa-solid fa-bolt logo-gradient"></i>
        <span class="logo-gradient">TikSave Pro</span>
      </a>
      
      <div class="nav-links">
        <a href="#" class="nav-link active">Home</a>
        <a href="#features" class="nav-link">Features</a>
        <a href="#how-it-works" class="nav-link">How It Works</a>
        <a href="#faq" class="nav-link">FAQ</a>
        <button class="cta-button">
          <i class="fa-solid fa-crown"></i>
          Upgrade to Pro
        </button>
      </div>
      
      <button class="mobile-menu-toggle">
        <i class="fa-solid fa-bars"></i>
      </button>
    </div>
  </nav>
  
  <!-- Hero Section -->
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <div class="hero-badge">
          <i class="fa-solid fa-wand-magic-sparkles"></i>
          No Watermark TikTok Downloader
        </div>
        <h1 class="hero-title">Download TikTok Videos <span>Without Watermark</span> in HD Quality</h1>
        <p class="hero-description">
          The fastest and most reliable tool to download high-quality TikTok videos without watermarks. 
          Save your favorite TikTok content in seconds.
        </p>
        
        <!-- Downloader Form -->
        <div class="downloader-card">
          <h3 class="form-title">
            <i class="fa-solid fa-link" style="color: var(--primary-color);"></i>
            Enter TikTok URL
          </h3>
          
          <div class="url-form-group">
            <div class="url-input-container">
              <i class="fa-brands fa-tiktok url-input-icon"></i>
              <input 
                type="text" 
                id="tiktok-url" 
                class="url-input" 
                placeholder="Paste TikTok video link here (e.g., https://www.tiktok.com/@username/video/1234567890)" 
              />
            </div>
            
            <button id="download-btn" class="download-btn">
              <i class="fa-solid fa-bolt"></i>
              Download Now
            </button>
          </div>
          
          <div id="error-message" class="error-message"></div>
          
          <div class="supported-platforms">
            <div class="platform">
              <i class="fa-solid fa-check-circle" style="color: var(--success-color);"></i>
              <span>No Watermark</span>
            </div>
            <div class="platform">
              <i class="fa-solid fa-check-circle" style="color: var(--success-color);"></i>
              <span>HD Quality</span>
            </div>
            <div class="platform">
              <i class="fa-solid fa-check-circle" style="color: var(--success-color);"></i>
              <span>MP3 Audio</span>
            </div>
            <div class="platform">
              <i class="fa-solid fa-check-circle" style="color: var(--success-color);"></i>
              <span>Unlimited Downloads</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Results Section -->
  <section class="results-section">
    <div class="container">
      <div id="result-container" class="results-container">
        <div class="results-header">
          <h3 class="results-title">
            <i class="fa-solid fa-circle-check"></i>
            Download Ready
          </h3>
        </div>
        
        <div class="results-content">
          <div class="video-preview">
            <div class="thumbnail-container">
              <img id="video-thumbnail" class="thumbnail" src="" alt="Video thumbnail">
              <div class="play-overlay">
                <div class="play-button">
                  <i class="fa-solid fa-play"></i>
                </div>
              </div>
            </div>
            
            <div class="video-details">
              <div class="video-author">
                <img id="user-avatar" class="author-avatar" src="" alt="User avatar">
                <div class="author-info">
                  <div>
                    <span id="username" class="author-username"></span>
                    <i class="fa-solid fa-circle-check verified-badge"></i>
                  </div>
                  <span class="author-follower-count">TikTok Creator</span>
                </div>
              </div>
              
              <div class="video-stats">
                <div class="stat-card">
                  <div class="stat-label">
                    <i class="fa-solid fa-eye"></i>
                    Views
                  </div>
                  <div id="views" class="stat-value"></div>
                </div>
                <div class="stat-card">
                  <div class="stat-label">
                    <i class="fa-solid fa-comment"></i>
                    Comments
                  </div>
                  <div id="comments" class="stat-value"></div>
                </div>
                <div class="stat-card">
                  <div class="stat-label">
                    <i class="fa-solid fa-share-nodes"></i>
                    Shares
                  </div>
                  <div id="shares" class="stat-value"></div>
                </div>
                <div class="stat-card">
                  <div class="stat-label">
                    <i class="fa-solid fa-download"></i>
                    Downloads
                  </div>
                  <div id="downloads" class="stat-value"></div>
                </div>
              </div>
              
              <div class="download-options">
                <div class="options-title">Download Options:</div>
                <div class="download-buttons-grid">
                  <a id="video-download" href="#" class="download-option video-download-option" target="_blank">
                    <i class="fa-solid fa-video"></i>
                    <span class="download-option-label">MP4 Video</span>
                  </a>
                  <a id="audio-download" href="#" class="download-option audio-download-option" target="_blank">
                    <i class="fa-solid fa-music"></i>
                    <span class="download-option-label">MP3 Audio</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Features Section -->
  <section id="features" class="features-section">
    <div class="container">
      <div class="section-title">
        <div class="section-subtitle">Why Choose Us</div>
        <h2 class="section-heading">Premium Features for TikTok Video Download</h2>
      </div>
      
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon blue">
            <i class="fa-solid fa-bolt"></i>
          </div>
          <h3 class="feature-title">Lightning Fast Downloads</h3>
          <p class="feature-description">
            Our servers process your TikTok videos at lightning speed, allowing you to download content within seconds, not minutes.
          </p>
        </div>
        
        <div class="feature-card">
          <div class="feature-icon pink">
            <i class="fa-solid fa-ban"></i>
          </div>
          <h3 class="feature-title">No Watermark</h3>
          <p class="feature-description">
            Download TikTok videos without the annoying watermark, preserving the original quality for your personal use.
          </p>
        </div>
        
        <div class="feature-card">
          <div class="feature-icon purple">
            <i class="fa-solid fa-music"></i>
          </div>
          <h3 class="feature-title">Audio Extraction</h3>
          <p class="feature-description">
            Extract MP3 audio from any TikTok video to save your favorite sounds, music, and voice clips.
          </p>
        </div>
        
        <div class="feature-card">
          <div class="feature-icon blue">
            <i class="fa-solid fa-shield-halved"></i>
          </div>
          <h3 class="feature-title">Safe & Secure</h3>
          <p class="feature-description">
            We don't store your videos or personal information. Your data remains private and secure at all times.
          </p>
        </div>
        
        <div class="feature-card">
          <div class="feature-icon pink">
            <i class="fa-solid fa-palette"></i>
          </div>
          <h3 class="feature-title">HD Quality</h3>
          <p class="feature-description">
            Download videos in the highest quality available, preserving the original resolution and clarity.
          </p>
        </div>
        
        <div class="feature-card">
          <div class="feature-icon purple">
            <i class="fa-solid fa-infinity"></i>
          </div>
          <h3 class="feature-title">Unlimited Downloads</h3>
          <p class="feature-description">
            No daily limits or restrictions. Download as many TikTok videos as you want, whenever you want.
          </p>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Footer -->
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <div class="footer-logo">
            <i class="fa-solid fa-bolt logo-gradient"></i>
            <span class="logo-gradient">TikSave Pro</span>
          </div>
          <p class="footer-description">
            The most advanced TikTok video downloader on the web. Save high-quality videos without watermarks in just a few clicks.
          </p>
          <div class="footer-social">
            <a href="#" class="social-icon"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="#" class="social-icon"><i class="fa-brands fa-twitter"></i></a>
            <a href="#" class="social-icon"><i class="fa-brands fa-instagram"></i></a>
            <a href="#" class="social-icon"><i class="fa-brands fa-youtube"></i></a>
          </div>
        </div>
        
        <div class="footer-column">
          <h3>Quick Links</h3>
          <div class="footer-links">
            <a href="#" class="footer-link">Home</a>
            <a href="#features" class="footer-link">Features</a>
            <a href="#how-it-works" class="footer-link">How It Works</a>
            <a href="#faq" class="footer-link">FAQ</a>
          </div>
        </div>
        
        <div class="footer-column">
          <h3>Legal</h3>
          <div class="footer-links">
            <a href="#" class="footer-link">Privacy Policy</a>
            <a href="#" class="footer-link">Terms of Service</a>
            <a href="#" class="footer-link">DMCA</a>
            <a href="#" class="footer-link">Contact Us</a>
          </div>
        </div>
        
        <div class="footer-column">
          <h3>Support</h3>
          <div class="footer-links">
            <a href="#" class="footer-link">Help Center</a>
            <a href="#" class="footer-link">Community</a>
            <a href="#" class="footer-link">Feedback</a>
            <a href="#" class="footer-link">Report Bug</a>
          </div>
        </div>
      </div>
      
      <div class="copyright">
        <p>© 2025 TikSave Pro. All rights reserved. This website is not affiliated with TikTok.</p>
      </div>
    </div>
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
      
      // Smooth scroll for navigation links
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          if(targetId === '#') return;
          
          const targetElement = document.querySelector(targetId);
          if(targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
          }
        });
      });
      
      // Process download
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
          errorMessage.textContent = 'Not a valid TikTok URL. Please enter a valid TikTok video link.';
          errorMessage.style.display = 'block';
          return;
        }
        
        // Change button state
        downloadBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Processing...';
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
            throw new Error('Failed to process video. The service might be temporarily unavailable.');
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
          downloadBtn.innerHTML = '<i class="fa-solid fa-bolt"></i> Download Now';
          downloadBtn.disabled = false;
        });
      });
      
      // Enter key handler for URL input
      tiktokUrlInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && !downloadBtn.disabled) {
          downloadBtn.click();
        }
      });
    });
  </script>
</body>
</html>
  `);
});

// Start server
const port = process.env.PORT || 5000;
app.listen(port, '0.0.0.0', () => {
  console.log(`TikTok Downloader server running on port ${port}`);
  console.log(`Visit http://localhost:${port} to use the app`);
});