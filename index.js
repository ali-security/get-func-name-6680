'use strict';

/* !
 * Chai - getFunctionName utility
 * Copyright(c) 2012-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/**
 * ### .getFunctionName(constructorFn)
 *
 * Returns the name of a function.
 * This also includes a polyfill function if `aFunc.name` is not defined.
 *
 * @name getFunctionName
 * @param {Function} funct
 * @namespace Utils
 * @api public
 */

var toString = Function.prototype.toString;
var functionNameMatch = /\s*function(?:\s|\s*\/\*[^(?:*\/)]+\*\/\s*)*([^\s\(\/]+)/;
function getFunctionName(aFunc) {
  var name = '';
  if (typeof Function.prototype.name === 'undefined' && typeof aFunc.name === 'undefined') {
    // Here we run a polyfill if Function does not support the `name` property and if aFunc.name is not defined
    var match = toString.call(aFunc).match(functionNameMatch);
    if (match) {
      name = match[1];
    }
  } else {
    // If we've got a `name` property we just use it
    name = aFunc.name;
  }

  return name;
}

module.exports = getFunctionName;
