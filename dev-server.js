import { createServer } from 'vite';
import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  
  // Create Vite server in middleware mode
  const vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom'
  });
  
  // Use Vite's middleware
  app.use(vite.middlewares);
  
  // Serve HTML
  app.use('*', async (req, res, next) => {
    try {
      const clientTemplate = path.resolve(__dirname, 'client', 'index.html');
      
      if (!fs.existsSync(clientTemplate)) {
        return res.status(404).send('Client index.html not found');
      }
      
      let template = fs.readFileSync(clientTemplate, 'utf-8');
      template = await vite.transformIndexHtml(req.originalUrl, template);
      
      res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
    } catch (e) {
      console.error('Error processing request:', e);
      next(e);
    }
  });
  
  // Start the server
  const port = 3000;
  app.listen(port, '0.0.0.0', () => {
    console.log(`Development server running at http://localhost:${port}`);
  });
}

startServer();