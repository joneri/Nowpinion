import { exec, ExecException } from 'child_process';
import http from 'http';

const SERVER_START_TIMEOUT = 30000; // Timeout after 30 seconds

const checkServerHealth = async (url: string) => {
  return new Promise<void>((resolve, reject) => {
    const request = http.get(url, (res) => {
      if (res.statusCode === 200) {
        resolve();
      } else {
        reject(new Error(`Server health check failed with status code: ${res.statusCode}`));
      }
    });

    request.on('error', reject);
  });
};

const startServer = () => {
  return new Promise<void>((resolve, reject) => {
    const server = exec('npx nx serve frontend', (error: ExecException | null, stdout: string, stderr: string) => {
      if (error) {
        console.error(`Error: ${error.message}`);
        reject(error);
      }
      if (stderr) {
        console.error(`stderr: ${stderr}`);
      }
      console.log(`stdout: ${stdout}`);
    });

    let serverReady = false;

    server.stdout?.on('data', (data) => {
      console.log(`stdout: ${data}`);
      if (data.includes('Local:')) {
        serverReady = true;
        resolve();
      }
    });

    server.stderr?.on('data', (data) => {
      console.error(`stderr: ${data}`);
    });

    server.on('close', (code) => {
      console.log(`Server process exited with code ${code}`);
      if (!serverReady) {
        reject(new Error('Server process exited prematurely'));
      }
    });

    setTimeout(() => {
      if (!serverReady) {
        console.error('Server did not start within the timeout period');
        reject(new Error('Server start timed out'));
      }
    }, SERVER_START_TIMEOUT);
  });
};

const runTests = () => {
  return new Promise<void>((resolve, reject) => {
    const tests = exec('npx playwright test', (error: ExecException | null, stdout: string, stderr: string) => {
      if (error) {
        console.error(`Error: ${error.message}`);
        reject(error);
      }
      if (stderr) {
        console.error(`stderr: ${stderr}`);
      }
      console.log(`stdout: ${stdout}`);
      resolve();
    });
  });
};

(async () => {
  try {
    await startServer();
    await checkServerHealth('http://localhost:3000/health'); // Replace with your server's health check endpoint
    await runTests();
  } catch (error) {
    console.error('Error during E2E test run:', error);
    process.exit(1); // Exit with error code 1 if something goes wrong
  }
})();
