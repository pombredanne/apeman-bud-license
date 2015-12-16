/**
 * Test case for setup.
 * Runs with mocha.
 */
"use strict";

const setup = require('../lib/setup.js'),
    assert = require('assert'),
    coz = require('coz');

describe('setup', ()=> {

    it('Setup', (done) => {
        let bud = setup({
            type: 'MIT',
            holder: 'foo'
        });
        assert.ok(bud);
        assert.ok(bud.tmpl);
        bud.mkdirp = true;
        bud.path = __dirname + '/../tmp/foo/bar/baz.txt';
        coz.render(bud, (err) => {
            assert.ifError(err);
            done();
        });
    });

    it('Setup without type', (done) => {
        assert.throws(() => {
            setup({
                type: null,
                holder: 'foo'
            });
        });
        done();
    });
});

