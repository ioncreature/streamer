/**
 * HTTP MPEG-DASH stream with ffmpeg
 */

var http = require( 'http' ),
    app = require( './app' );

http.createServer( app ).listen( 80 );
