<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# instanceOf

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Test whether a value has in its prototype chain a specified constructor as a prototype property.

<section class="intro">

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/assert-instance-of
```

</section>

<section class="usage">

## Usage

```javascript
var instanceOf = require( '@stdlib/assert-instance-of' );
```

#### instanceOf( value, constructor )

Tests whether a `value` has in its prototype chain a specified `constructor` as a `prototype` property.

```javascript
var inherit = require( '@stdlib/utils-inherit' );

function Foo() {
    return this;
}

function Bar() {
    return this;
}
inherit( Bar, Foo );

var bar = new Bar();

var bool = instanceOf( bar, Foo );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function throws a `TypeError` if provided a `constructor` argument which is not callable.

    ```javascript
    var bool = instanceOf( {}, null );
    // throws <TypeError>
    ```

-   While the prototype of an `object` created using object literal notion is `undefined`, the function returns `true` when provided an `object` literal and the `Object` constructor. This maintains consistent behavior with the `instanceof` operator.

    ```javascript
    var bool = ( {} instanceof Object );
    // returns true

    bool = instanceOf( {}, Object );
    // returns true
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Number = require( '@stdlib/number-ctor' );
var instanceOf = require( '@stdlib/assert-instance-of' );

var bool = instanceOf( [], Array );
// returns true

bool = instanceOf( [], Object );
// returns true

bool = instanceOf( {}, Object );
// returns true

bool = instanceOf( new Date(), Date );
// returns true

bool = instanceOf( /.*/, RegExp );
// returns true

bool = instanceOf( instanceOf, Function );
// returns true

bool = instanceOf( null, Object );
// returns false

bool = instanceOf( 5, Number );
// returns false

bool = instanceOf( '5', String );
// returns false

bool = instanceOf( void 0, Object );
// returns false

bool = instanceOf( {}, Array );
// returns false

bool = instanceOf( {}, Function );
// returns false
```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-instance-of.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-instance-of

[test-image]: https://github.com/stdlib-js/assert-instance-of/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/assert-instance-of/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-instance-of/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-instance-of?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-instance-of
[dependencies-url]: https://david-dm.org/stdlib-js/assert-instance-of/main

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-instance-of/main/LICENSE

</section>

<!-- /.links -->
