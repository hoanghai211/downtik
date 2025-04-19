// We're going to use the child_process module to run both our minimal server and Next.js app
import { spawn, exec } from 'child_process';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(fileURLToPath(new URL('.', import.meta.url)));
const rootDir = resolve(__dirname, '..');

// Log message
console.log("Starting TikTok Downloader with Next.js and Express API");
console.log(`Root directory: ${rootDir}`);

// Run our minimal server that works reliably
const minimalServerPath = resolve(rootDir, 'minimal-tiktok-server.cjs');
console.log(`Running minimal server from: ${minimalServerPath}`);

// Execute the minimal server
const serverProcess = exec(`node ${minimalServerPath}`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing minimal server: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Minimal server stderr: ${stderr}`);
  }
  console.log(`Minimal server stdout: ${stdout}`);
});

// Forward output to main console
serverProcess.stdout?.on('data', (data) => {
  console.log(`API Server: ${data.toString().trim()}`);
});

serverProcess.stderr?.on('data', (data) => {
  console.error(`API Server Error: ${data.toString().trim()}`);
});

// Start Next.js in a separate process
console.log("Starting Next.js development server...");
const nextProcess = spawn('npx', ['next', 'dev', '-p', '3000'], {
  cwd: rootDir,
  shell: true
});

// Forward Next.js output
nextProcess.stdout?.on('data', (data) => {
  console.log(`Next.js: ${data.toString().trim()}`);
});

nextProcess.stderr?.on('data', (data) => {
  console.error(`Next.js Error: ${data.toString().trim()}`);
});

// Keep the main process alive
process.on('SIGINT', () => {
  console.log('Shutting down TikTok Downloader...');
  
  // Kill the child processes
  if (serverProcess) {
    serverProcess.kill();
  }
  
  if (nextProcess) {
    nextProcess.kill();
  }
  
  // Exit the main process
  process.exit(0);
});
