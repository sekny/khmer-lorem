# khmer-lorem

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/a0984231f0ac46efa617cf401964f8b6)](https://www.codacy.com/gh/knicklabs/khmer-lorem.js/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=knicklabs/khmer-lorem.js&amp;utm_campaign=Badge_Grade)
[![Coverage Status](https://coveralls.io/repos/github/knicklabs/khmer-lorem.js/badge.svg?branch=main)](https://coveralls.io/github/knicklabs/khmer-lorem.js?branch=main) [![npm version](https://badge.fury.io/js/khmer-lorem.svg)](https://badge.fury.io/js/khmer-lorem) ![node](https://img.shields.io/badge/node-8x-blue.svg) ![npm](https://img.shields.io/badge/npm-5x-blue.svg)

## Overview

`khmer-lorem` is a JavaScript module for generating passages of lorem
ipsum text. Lorem ipsum text is commonly used as placeholder text in
publishing, graphic design, and web development.

`khmer-lorem` is compatible with the browser, Node.JS, and React Native.

## Installation

```
npm i khmer-lorem
```

## Using the Class

The class is the recommended way to use `khmer-lorem` since version 2.
It makes it simpler to generate text using the same options.

```js
import { LoremIpsum } from "khmer-lorem";
// const LoremIpsum = require("khmer-lorem").LoremIpsum;

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

lorem.generateWords(1);
lorem.generateSentences(5);
lorem.generateParagraphs(7);
```

## Using the Function

`khmer-lorem` version 2 exports a function that is backwards-
compatible with the default function exported by `khmer-lorem` version
1. Users of version 1 should be able to upgrade to version 2 without 
any issue; they can just continue using this library as they did before.

```js
import { loremIpsum } from "khmer-lorem";
// const loremIpsum = require("khmer-lorem").loremIpsum;

loremIpsum(); // generates one sentence
```

Like before, you can pass in a number of options to customize the output.
The example below shows the default options.

```js
import { loremIpsum } from "khmer-lorem";

loremIpsum({
  count: 1,                // Number of "words", "sentences", or "paragraphs"
  format: "plain",         // "plain" or "html"
  paragraphLowerBound: 3,  // Min. number of sentences per paragraph.
  paragraphUpperBound: 7,  // Max. number of sentences per paragarph.
  random: Math.random,     // A PRNG function
  sentenceLowerBound: 5,   // Min. number of words per sentence.
  sentenceUpperBound: 15,  // Max. number of words per sentence.
  suffix: "\n",            // Line ending, defaults to "\n" or "\r\n" (win32)
  units: "sentences",      // paragraph(s), "sentence(s)", or "word(s)"
  words: ["ad", ...]       // Array of words to draw from
})
```

## Using the CLI

`khmer-lorem` includes a command line interface (CLI) program for generating 
passages of lorem ipsum text directly from your terminal. This CLI program 
is compatible with Mac OSX, Windows, and Linux. On Linux you will need to 
install xclip. On Ubuntu: `apt-get install xclip`.

Simply install the module globally to take advantage of this feature.

```
npm i -g khmer-lorem
```

Execute the statement `khmer-lorem [count] [units]` from your terminal to
generate a passage of lorem ipsum text. You can additional arguments to
the program.

```
khmer-lorem --version
# Displays the version number

khmer-lorem --help
# Displays the help documentation

khmer-lorem 1 word
# Prints one word

khmer-lorem 2 words
# Prints two words

khmer-lorem 1 sentence
# Prints one sentence

khmer-lorem 2 sentences
# Prints two sentences

khmer-lorem 1 paragraph
# Prints one paragraph

khmer-lorem 2 paragraphs
# Prints two paragraphs

khmer-lorem 2 paragraphs --copy
# Prints two pargraphs and copies it to your clipboard

khmer-lorem 2 paragraphs --format html
# Prints two paragraphs in HTML format

khmer-lorem 2 paragraphs --format html --copy
# Prints two paragraphs in HTML format and copies it to your clipboard.
```

Uprading from version 1.x? The `--count` and `--units` options have been 
dropped in favor of the natural language interface shown in the examples
above.

## Overview

`khmer-lorem` is inspire from `https://github.com/knicklabs/lorem-ipsum.js`