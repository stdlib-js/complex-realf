/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

var Complex64 = require( '@stdlib/complex-float32' );
var randu = require( '@stdlib/random-base-randu' );
var round = require( '@stdlib/math-base-special-round' );
var realf = require( './../lib' );

var re;
var im;
var z;
var i;

for ( i = 0; i < 100; i++ ) {
	re = round( (randu()*100.0) - 50.0 );
	im = round( (randu()*50.0) - 25.0 );
	z = new Complex64( re, im );
	console.log( 'realf(%s) = %d', z.toString(), realf( z ) );
}
