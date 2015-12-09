/**
 * apeman bud for LICENSE files.
 * @memberof module:apeman-bud-license/lib
 * @function setup
 * @param {object} params - Template params.
 * @returns {object} - Coz bud configuration.
 */

"use strict";

const argx = require('argx'),
    assert = require('assert'),
    _tmpl = require('./_tmpl');

/** @lends setup */
function setup(params) {
    var args = argx(arguments);
    params = args.shift('object');

    assert.ok(params.type, "params.type is required.");
    assert.ok(params.holder, "params.holder is required.");
    return {
        force: true,
        mode: '444',
        path: '',
        tmpl: _tmpl(params.type),
        data: {
            holder: params.holder,
            year: params.year || new Date().getFullYear()
        }
    }
}

module.exports = setup;
