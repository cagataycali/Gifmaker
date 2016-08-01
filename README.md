# Installing

```
npm i gifmaker --save
```


# Using

```
var gifmaker = require('gifmaker');

gifmaker(0, 5, 'targetVideo.mp4', 'output.gif').then(function(output) {
  console.log('Output path: ', output);
});
```
