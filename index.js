const childProcess = require('child_process');

module.exports = function process(startTime, endTime, filePath, gifPath) {
  return new Promise((resolve, reject) => {
    childProcess.execFile(
    'ffmpeg',
      [
        '-t', (endTime - startTime),
        '-ss', startTime,
        '-i', filePath,
        gifPath,
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
};
