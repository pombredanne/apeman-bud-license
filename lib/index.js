/**
 * apeman bud for LICENSE files.
 * @module apeman-bud-license
 * @version 1.0.1
 */

"use strict";

var setup = require('./setup'),
    pkg = require('../package.json');

var lib = setup.bind(this);
lib.setup = setup;
lib.version = pkg.version;

module.exports = lib;
