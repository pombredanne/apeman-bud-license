/**
 * A bud file to render with coz.
 */
"use strict";

const apemanBudLicense = require('apeman-bud-license');

module.exports = apemanBudLicense({
    type: 'MIT'
});

if (!module.parent) {
    require('coz').render(__filename);
}