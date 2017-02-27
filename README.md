[![Build Status](https://travis-ci.org/subhojit777/react-style-converter.svg?branch=master)](https://travis-ci.org/subhojit777/react-style-converter)

[![Coverage Status](https://coveralls.io/repos/github/subhojit777/react-style-converter/badge.svg?branch=master)](https://coveralls.io/github/subhojit777/react-style-converter?branch=master)

# React style converter

Converts style properties into React format

## Installation

`npm install --save react-style-converter`

## How to use

```js
var convert = require('react-style-converter')
var reactStyle = convert('background-image') // Outputs: backgroundImage
```

```js
import convert from 'react-style-converter'

let reactStyle = convert('background-image') // Outputs: backgroundImage
```

This library is heavily inspired from [`react-attr-converter`](https://github.com/noraesae/react-attr-converter)

## Why this library is not incorporated to [`react-attr-converter`](https://github.com/noraesae/react-attr-converter)

[It is not possible](https://github.com/noraesae/react-attr-converter/issues/2)
