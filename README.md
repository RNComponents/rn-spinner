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

Property          | Description | Type | Default | Note
------------------|-------------|------|---------|-------
max               | | number | 0  |
min               | | number | 99 |
default           | default number of the Spinner | number | 0 | You can define either `default` or `value`.
value             | controlled value of the Spinner | number | undefined | If `value` is defined, then the value can change only via the property. This means that `onNumChange` must be defined and change external state.
color             | custom color of the Spinner | string | '#33c9d6' |
numColor          | custom number color | string | '#333' |
numBgColor        | background color of number button | string | 'white' |
onNumChange       | get the number of the Spinner | func | |
showBorder        | show the border of the Spinner or not | bool | true |
disabled          | disable the Spinner or not | bool | false |
fontSize          | custom fontSize of the text input in the Spinner | number | 14 |
btnFontSize       | custom fontSize of buttons in the Spinner | number | 14 |
buttonTextColor   | custom color of the button in the Spinner | string | 'white' |
width             | custom width of the Spinner | number | 90 |
height            | custom height of the Spinner | number | 30 |

## Screenshot

<img width="50%" src="example.png" />

## Feedback

[Issues](https://github.com/RNComponents/rn-spinner/issues)

## License

The MIT License
