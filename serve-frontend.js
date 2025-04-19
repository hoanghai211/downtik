// This script starts a development server for the frontend only
import { createServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startFrontendServer() {
  try {
    // Configuration for the Vite server
    const viteServer = await createServer({
      root: path.join(__dirname, 'client'),
      server: {
        port: 3000, // Different port to avoid conflicts with the API
        // Proxy API requests to our backend server
        proxy: {
          '/api': {
            target: 'http://localhost:5000',
            changeOrigin: true
          }
        }
      }
    });
    
    await viteServer.listen();
    
    viteServer.printUrls(); // Print server URLs
    
    console.log('Frontend server running. Backend API available at http://localhost:5000/api');
  } catch (error) {
    console.error('Error starting frontend server:', error);
  }
}

startFrontendServer();