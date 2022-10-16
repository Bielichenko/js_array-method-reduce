'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(...args) {
    let prevResult = args[1];

    if (args.length < 2) {
      if (typeof this[0] === 'number') {
        prevResult = 0;
      }

      if (typeof this[0] === 'string') {
        prevResult = '';
      }
    }

    for (let i = 0; i < this.length; i++) {
      prevResult = args[0](prevResult, this[i], i, this);
    }

    return prevResult;
  };
}

module.exports = applyCustomReduce;
