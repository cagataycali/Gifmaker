import childProcess from 'child_process';

function process(startTime, endTime, filePath, gifPath) {
  return new Promise((resolve, reject) => {
    childProcess.execFile(
    'ffmpeg',
      [
        '-t', (endTime - startTime), // During time
        '-ss', startTime, // start time
        '-i', filePath,
        gifPath,
        // "-ps" , 200.000.000. // File size limit.
      ],
      (error/* , stdout, stderr */) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(gifPath);
      }
    );
  });
}
