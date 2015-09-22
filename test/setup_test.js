/**
 * Test case for setup.
 * Runs with nodeunit.
 */

var setup = require('../lib/setup.js'),
    coz = require('coz');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Setup'] = function (test) {
    var bud = setup({
        type: 'MIT',
        holder:'foo'
    });
    test.ok(bud);
    test.ok(bud.tmpl);
    bud.mkdirp = true;
    bud.path = __dirname + '/../tmp/foo/bar/baz.txt';
    coz.render(bud, function (err) {
        test.ifError(err);
        test.done();
    });
};

