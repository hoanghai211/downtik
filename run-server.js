import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Run tsx to execute TypeScript directly
const tsx = spawn('node_modules/.bin/tsx', ['server/index.ts'], {
  stdio: 'inherit',
  env: { ...process.env, NODE_ENV: 'development' }
});

tsx.on('error', (err) => {
  console.error('Failed to start server:', err);
});

tsx.on('close', (code) => {
  console.log(`Server process exited with code ${code}`);
});