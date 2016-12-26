'use strict';

const
    express = require( 'express' ),
    path = require( 'path' ),
    favicon = require( 'serve-favicon' ),
    logger = require( 'morgan' ),
    cookieParser = require( 'cookie-parser' ),
    bodyParser = require( 'body-parser' ),
    NotFound = require('yahel').NotFound;

let app = express();

app.locals.title = 'Streamer';

app.set( 'views', path.join(__dirname, 'views') );
app.set( 'view engine', 'jade' );
app.disable( 'x-powered-by' );

app.use( logger('dev') );
app.use( '/public', express.static(path.join(__dirname, 'public')) );
app.use( favicon(path.join(__dirname, 'public', 'favicon.png')) );
app.use( cookieParser() );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({extended: false}) );

app.use( '/', require('./routes/index') );

app.use( function( req, res, next ){
    next( NotFound() );
});

app.use( function( err, req, res, next ){
    res.status( err.status || 500 );
    res.render( 'error', {
        message: err.message,
        error: err
    });
});

module.exports = app;
