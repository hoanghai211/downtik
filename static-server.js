import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import { createProxyMiddleware } from 'http-proxy-middleware';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Proxy API requests to the backend server
app.use('/api', createProxyMiddleware({ 
  target: 'http://localhost:5000',
  changeOrigin: true,
  logLevel: 'debug' 
}));

// Serve frontend files from the dist directory
const distPath = path.join(__dirname, 'client');
app.use(express.static(distPath));

// For all other routes, serve index.html for client-side routing
app.get('*', (req, res) => {
  const indexPath = path.join(distPath, 'index.html');
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).send('Client index.html not found.');
  }
});

// Start server on port 3000 (different from the API)
const port = 3000;
app.listen(port, '0.0.0.0', () => {
  console.log(`Frontend server running on port ${port}`);
  console.log(`API requests will be proxied to http://localhost:5000`);
});