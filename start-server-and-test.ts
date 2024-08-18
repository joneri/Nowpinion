import { exec, ExecException } from 'child_process';

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

    server.stdout?.on('data', (data) => {
      console.log(`stdout: ${data}`);
      if (data.includes('Local:')) {
        resolve(); // Resolve when the server is ready
      }
    });

    server.stderr?.on('data', (data) => {
      console.error(`stderr: ${data}`);
    });

    server.on('close', (code) => {
      console.log(`Server process exited with code ${code}`);
      reject(new Error('Server process exited prematurely'));
    });
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
    await runTests();
  } catch (error) {
    console.error('Error during E2E test run:', error);
    process.exit(1); // Exit with error code 1 if something goes wrong
  }
})();
