/**
 * @function _tmpl
 * @private
 */

"use strict";

const fs = require('fs'),
    stringcase = require('stringcase'),
    assert = require('assert'),
    _types = require('./_types');

let assetDir = __dirname + '/../';

/** @lends _tmpl */
function _tmpl(type) {
    let filename = _types[stringcase.camelcase(type)];
    assert.ok('filename', "Unknown type: " + type);
    return fs.readFileSync(assetDir + filename).toString();
}

module.exports = _tmpl;
