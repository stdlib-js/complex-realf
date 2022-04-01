/*
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

// TypeScript Version: 2.0

/// <reference types="https://cdn.jsdelivr.net/gh/stdlib-js/types@esm/index.d.ts"/>

import { Complex64 } from '@stdlib/types/object';

/**
* Returns the real component of a single-precision complex floating-point number.
*
* @param z - complex number
* @returns real component
*
* @example
* var Complex64 = require( `@stdlib/complex/float32` );
*
* var z = new Complex64( 5.0, 3.0 );
*
* var re = realf( z );
* // returns 5.0
*/
declare function realf( z: Complex64 ): number;


// EXPORTS //

export = realf;
