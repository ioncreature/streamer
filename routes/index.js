const
    router = require( 'express' ).Router(),
    fs = require( 'fs' );

let state = {};

module.exports = router;


router.get( '/', function( req, res, next ){
    fs.readdir( './content', function( error, files ){
        if ( error )
            return next( error );

        res.render( 'index', {files: files.map(f => ({name: f, state: state[f]}))} );
    });
});


router.get( '/play/:id', function( req, res ){
    state[req.params.id] = 'playing';
    res.redirect( '/' );
});


router.get( '/stop/:id', function( req, res ){
    state[req.params.id] = 'stopped';
    res.redirect( '/' );
});


router.get( '/stream/:id', function( req, res ){
    res.render( 'stream', {name: req.params.id} );
});


router.get( '/video/:id', function( req, res ){
    var path = './content/' + req.params.id;
    if ( fs.existsSync(path) )
        return fs.createReadStream(path).pipe( res ).on( 'end', () => res.end() );

    res.status( 404 );
    res.end();
});


router.get( '/capture', function( req, res ){
    res.render( 'capture' );
});
