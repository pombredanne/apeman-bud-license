/**
 * apeman bud for LICENSE files.
 * @module apeman-bud-license
 * @version 2.1.0
 */

"use strict";

const setup = require('./setup'),
    pkg = require('../package.json');

let lib = setup.bind(this);
lib.setup = setup;
lib.version = pkg.version;

module.exports = lib;
