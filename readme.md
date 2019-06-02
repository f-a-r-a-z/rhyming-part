# rhyming-part [![Build Status](https://travis-ci.com/f-a-r-a-z/rhyming-part.svg?branch=master)](https://travis-ci.com/f-a-r-a-z/rhyming-part)

> Get the part of a word that rhymes with other words

Uses the CMU Pronouncing Dictionary (2MB) to get the rhyming part of a word's pronounciation. This can be used to check if words rhyme with each other, or group together words that rhyme.


## Install

```
$ npm install rhyming-part
```


## Usage

```js
const rhymingPart = require('rhyming-part');

rhymingPart('Hello');
//=> 'OW1'

rhymingPart('Below');
//=> 'OW1'
```


## API

### rhymingPart(input, [options])

#### input

Type: `string`

The word to get the rhyming part from.


## License

MIT © [Faraz](https://github.com/f-a-r-a-z)
