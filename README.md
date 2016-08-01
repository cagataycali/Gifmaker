Your 📽 turn to gif!



# Installing

```
npm i gifmaker --save
```


[![Code Climate](https://codeclimate.com/github/ccali14/Gifmaker/badges/gpa.svg)](https://codeclimate.com/github/ccali14/Gifmaker)

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

Maintenance & Development [Çağatay Çalı](http://github.com/ccali14)
