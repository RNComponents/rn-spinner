rn-spinner
---

Number Spinner component for react-native.

## Install

```
npm install rn-spinner --save
```

## Usage

```
// Require
var Spinner = require('rn-spinner');

// Use
<Spinner max={10}
         min={2}
         default={5}
         color="#f60"
         onNumChange={(num)=>{console.log(num)}}
```

## Props

- max
- min
- default: default number of the Spinner
- onNumChange: get the number of the Spinner
- color: custom color of the Spinner

## Screenshot

![example](example.png)

## License

The MIT License
