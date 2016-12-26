/**
 * HTTP MPEG-DASH stream with ffmpeg
 */

'use strict';

let http = require( 'http' ),
    app = require( './app' );

http.createServer( app ).listen( 8080 );
