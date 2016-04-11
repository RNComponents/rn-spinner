rn-spinner
---

[![NPM version][npm-image]][npm-url]
[![npm download][download-image]][download-url]
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

[npm-image]: http://img.shields.io/npm/v/rn-spinner.svg?style=flat-square
[npm-url]: http://npmjs.org/package/rn-spinner
[download-image]: https://img.shields.io/npm/dm/rn-spinner.svg?style=flat-square
[download-url]: https://npmjs.org/package/rn-spinner

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
         numColor="#f60"
         onNumChange={(num)=>{console.log(num)}}
```

## Props

- max
- min
- default: default number of the Spinner
- color: custom color of the Spinner
- numColor: custom number color
- numBgColor: background color of number button
- onNumChange: get the number of the Spinner
- showBorder: show the border of the Spinner
- disabled: disable the Spinner
- fontSize: custom fontSize of the text input in the Spinner
- btnFontSize: custom fontSize of buttons in the Spinner
- buttonTextColor: custom color of the button in the Spinner
- width: custom width of the spinner
- height: custom height of the spinner

## Screenshot

<img width="50%" src="example.png" />

## Feedback

[Issues](https://github.com/RNComponents/rn-spinner/issues)

## License

The MIT License
