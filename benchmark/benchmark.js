/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var bench = require( '@stdlib/bench' );
var isBoolean = require( '@stdlib/assert-is-boolean' ).isPrimitive;
var Object = require( '@stdlib/object-ctor' );
var pkg = require( './../package.json' ).name;
var instanceOf = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var bool;
	var vals;
	var i;

	vals = [
		new Date(),
		new RegExp( '.*' ), // eslint-disable-line prefer-regex-literals
		new Array( 10 ),
		{},
		'5',
		5,
		null,
		void 0
	];
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = instanceOf( vals[ i%vals.length ], Object );
		if ( typeof bool !== 'boolean' ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( !isBoolean( bool ) ) {
		b.fail( 'should return a boolean' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::built-in', function benchmark( b ) {
	var bool;
	var vals;
	var i;

	vals = [
		new Date(),
		new RegExp( '.*' ), // eslint-disable-line prefer-regex-literals
		new Array( 10 ),
		{},
		'5',
		5,
		null,
		void 0
	];
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = ( vals[ i%vals.length ] instanceof Object );
		if ( typeof bool !== 'boolean' ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( !isBoolean( bool ) ) {
		b.fail( 'should return a boolean' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
