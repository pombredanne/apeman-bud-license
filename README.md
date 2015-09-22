apeman-bud-license
==========

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![Code Climate][bd_codeclimate_shield_url]][bd_codeclimate_url]
[![Code Coverage][bd_codeclimate_coverage_shield_url]][bd_codeclimate_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]

[bd_repo_url]: https://github.com/apeman-bud-labo/apeman-bud-license
[bd_travis_url]: http://travis-ci.org/apeman-bud-labo/apeman-bud-license
[bd_travis_shield_url]: http://img.shields.io/travis/apeman-bud-labo/apeman-bud-license.svg?style=flat
[bd_license_url]: https://github.com/apeman-bud-labo/apeman-bud-license/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/apeman-bud-labo/apeman-bud-license
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/apeman-bud-labo/apeman-bud-license.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/apeman-bud-labo/apeman-bud-license.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/apeman-bud-labo/apeman-bud-license
[bd_gemnasium_shield_url]: https://gemnasium.com/apeman-bud-labo/apeman-bud-license.svg
[bd_npm_url]: http://www.npmjs.org/package/apeman-bud-license
[bd_npm_shield_url]: http://img.shields.io/npm/v/apeman-bud-license.svg?style=flat
[bd_bower_badge_url]: https://img.shields.io/bower/v/apeman-bud-license.svg?style=flat

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

apeman bud for LICENSE files.

<!-- Description End -->


<!-- Overview Start -->
<a name="overview"></a>


<!-- Overview End -->


<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/readme/01.Installation.md.hbs" Start -->

<a name="section-doc-readme-01-installation-md"></a>
Installation
-----

```bash
$ npm install apeman-bud-license --save-dev
```

<!-- Section from "doc/readme/01.Installation.md.hbs" End -->

<!-- Section from "doc/readme/02.Usage.md.hbs" Start -->

<a name="section-doc-readme-02-usage-md"></a>
Usage
---------

```javascript
/**
 * A bud file to render with coz.
 */
"use strict";

var apemanBudLicense = require('apeman-bud-license');

module.exports = apemanBudLicense({
    type: 'MIT'
});

if (!module.parent) {
    require('coz').render(__filename);
}
```

<!-- Section from "doc/readme/02.Usage.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/apeman-bud-labo/apeman-bud-license/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------

+ [apeman](https://github.com/apeman-labo/apeman)
+ [coz](https://github.com/coz-repo/coz)

<!-- Links End -->
