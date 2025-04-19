const { spawn } = require('child_process');
const path = require('path');

// Start the Express API server
console.log('Starting Express API server...');
const apiServer = spawn('node', ['minimal-tiktok-server.cjs'], {
  stdio: 'inherit'
});

// Start the Next.js development server
console.log('Starting Next.js development server...');
const nextApp = spawn('npx', ['next', 'dev', '-p', '3000'], {
  stdio: 'inherit'
});

// Handle process termination
process.on('SIGINT', () => {
  console.log('Shutting down servers...');
  apiServer.kill();
  nextApp.kill();
  process.exit(0);
});

// Log any errors
apiServer.on('error', (err) => {
  console.error('API server error:', err);
});

nextApp.on('error', (err) => {
  console.error('Next.js server error:', err);
});

// Handle process exit
apiServer.on('close', (code) => {
  console.log(`API server exited with code ${code}`);
});

nextApp.on('close', (code) => {
  console.log(`Next.js server exited with code ${code}`);
});