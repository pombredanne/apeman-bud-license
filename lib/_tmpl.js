/**
 * @function _tmpl
 * @private
 */

"use strict";

const fs = require('fs'),
    stringcase = require('stringcase'),
    assert = require('assert'),
    pkg = require('../package.json'),
    types = require('./types');

let assetDir = __dirname + '/../';

/** @lends _tmpl */
function _tmpl(type) {
    let filename = types[stringcase.camelcase(type)];
    assert.ok('filename', `[${pkg.name}] Unknown type: ${type}` );
    return fs.readFileSync(assetDir + filename).toString();
}

module.exports = _tmpl;
