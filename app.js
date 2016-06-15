var express = require( 'express' ),
    path = require( 'path' ),
    favicon = require( 'serve-favicon' ),
    logger = require( 'morgan' ),
    cookieParser = require( 'cookie-parser' ),
    bodyParser = require( 'body-parser' );

var app = express();

app.locals.title = 'Streamer';

app.set( 'views', path.join(__dirname, 'views') );
app.set( 'view engine', 'jade' );
app.set( 'view engine', 'jade' );
app.disable( 'x-powered-by' );

app.use( favicon(path.join(__dirname, 'public', 'favicon.png')) );
app.use( logger('dev') );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({extended: false}) );
app.use( cookieParser() );
app.use( express.static(path.join(__dirname, 'public')) );

app.use( '/', require('./routes/index') );

app.use( function( req, res, next ){
    var err = new Error( 'Not Found' );
    err.status = 404;
    next( err );
});

app.use( function ( err, req, res, next ){
    res.status( err.status || 500 );
    res.render( 'error', {
        message: err.message,
        error: err
    });
});

module.exports = app;
