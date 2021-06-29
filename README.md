# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@juliasut/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function head (...)`: returns the first item in the array
* `function tail(...)`: returns the "tail" of an array: everything except for the first item (head) of the provided array
* `function middle(...)`: returns an array one with either one middle element or two middle elements for a given array with odd or even number of elements accordingly
* `function assertArraysEqual (...)`: takes in two arrays and logs an appropriate message to the console
* `function assertEqual(...)`: compares the two values it takes in and print out a message telling us if they match or not
* `function assertObjectsEqual(...)`: takes in two objects and console.log an appropriate message to the console
* `function countLetters (...)`: takes in a string and returns a count of each of the letters in the string
* `function countOnly(...)`: takes in a collection of items and returns counts for a specific subset of those items
* `function eqArrays(...)`: takes in two arrays and returns true or false, based on a perfect match
* `function eqObjects (...)`: take in two objects and returns true or false, based on a perfect match (checks primitive return types only)
* `function findKey(...)`: takes in an object and a callback, scans the object and returns the first key for which the callback returns a truthy value
* `function findKeyByValue(...)`: searches for a key on an object where its value matches a given value
* `function letterPositions (...)`: returns all the indices in the string where each character is found
* `function map(...)`: takes an array and a callback function and returns a new array based on the results of the callback function
* `function takeUntil(...)`: collects items from a provided array until the callback provided returns a truthy value
* `function without(...)`: returns a subset of a given array, removing unwanted elements
