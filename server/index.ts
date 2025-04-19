// We're going to use the child_process module to run our minimal server
import { exec } from 'child_process';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(fileURLToPath(new URL('.', import.meta.url)));
const rootDir = resolve(__dirname, '..');

// Log message
console.log("Starting TikTok Downloader with minimal-tiktok-server.cjs");
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
  console.log(`${data.toString().trim()}`);
});

serverProcess.stderr?.on('data', (data) => {
  console.error(`${data.toString().trim()}`);
});

// Keep the main process alive
process.on('SIGINT', () => {
  console.log('Shutting down TikTok Downloader...');
  
  // Kill the child process
  if (serverProcess) {
    serverProcess.kill();
  }
  
  // Exit the main process
  process.exit(0);
});
