'use strict';

module.exports = function (str) {
    var index = 0;

    while (str[index] === ' ') {
        index++;
    }

    return str.substr(index, str.length);
};
