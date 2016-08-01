# Installing

```
npm i gifmaker --save
```


# Using

```
var gifmaker = require('gifmaker');

gifmaker.process(0, 5, 'targetVideo.mp4', 'output.gif').then((output) => {
  console.log('Output path: ', output);
});
```
