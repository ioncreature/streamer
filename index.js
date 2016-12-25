/**
 * HTTP MPEG-DASH stream with ffmpeg
 */

let http = require( 'http' ),
    app = require( './app' );

http.createServer( app ).listen( 8080 );
