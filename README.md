# Installing

```
npm i gifmaker --save
```


# Using

```
var gifmaker = require('gifmaker');

var startTime = 0;
var endTime = 5;
var targetVideo = 'targetVideo.mp4';
var output = 'output.gif';

gifmaker(startTime, endTime, targetVideo, output).then(function(output) {
  console.log('Output path: ', output);
});
```
