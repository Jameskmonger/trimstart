'use strict';

const test = require('modunit');
const trimstart = require('./index');

test('it returns a string with the start trimmed', (t, input, expected) => {
    t.assert.equal(expected, trimstart(input));
}, [
    ['there was nothing at the start of this', 'there was nothing at the start of this'],
    ['    five spaces', 'five spaces'],
    [' a   bit of padding', 'a   bit of padding'],
    ['                   ', '']
]);
