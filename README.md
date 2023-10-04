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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# instanceOf

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test whether a value has in its prototype chain a specified constructor as a prototype property.

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

To use in Observable,

```javascript
instanceOf = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-instance-of@v0.1.1-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var instanceOf = require( 'path/to/vendor/umd/assert-instance-of/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/assert-instance-of@v0.1.1-umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.instanceOf;
})();
</script>
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

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/number-ctor@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/assert-instance-of@v0.1.1-umd/browser.js"></script>
<script type="text/javascript">
(function () {

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

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert-is-prototype-of`][@stdlib/assert/is-prototype-of]</span><span class="delimiter">: </span><span class="description">test if an object's prototype chain contains a provided prototype.</span>
-   <span class="package-name">[`@stdlib/utils-constructor-name`][@stdlib/utils/constructor-name]</span><span class="delimiter">: </span><span class="description">determine the name of a value's constructor.</span>
-   <span class="package-name">[`@stdlib/utils-inherit`][@stdlib/utils/inherit]</span><span class="delimiter">: </span><span class="description">implement prototypical inheritance by replacing the prototype of one constructor with the prototype of another constructor.</span>
-   <span class="package-name">[`@stdlib/utils-type-of`][@stdlib/utils/type-of]</span><span class="delimiter">: </span><span class="description">determine a value's type.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-instance-of.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-instance-of

[test-image]: https://github.com/stdlib-js/assert-instance-of/actions/workflows/test.yml/badge.svg?branch=v0.1.1
[test-url]: https://github.com/stdlib-js/assert-instance-of/actions/workflows/test.yml?query=branch:v0.1.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-instance-of/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-instance-of?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-instance-of.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-instance-of/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/assert-instance-of/tree/deno
[umd-url]: https://github.com/stdlib-js/assert-instance-of/tree/umd
[esm-url]: https://github.com/stdlib-js/assert-instance-of/tree/esm
[branches-url]: https://github.com/stdlib-js/assert-instance-of/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-instance-of/main/LICENSE

<!-- <related-links> -->

[@stdlib/assert/is-prototype-of]: https://github.com/stdlib-js/assert-is-prototype-of/tree/umd

[@stdlib/utils/constructor-name]: https://github.com/stdlib-js/utils-constructor-name/tree/umd

[@stdlib/utils/inherit]: https://github.com/stdlib-js/utils-inherit/tree/umd

[@stdlib/utils/type-of]: https://github.com/stdlib-js/utils-type-of/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
