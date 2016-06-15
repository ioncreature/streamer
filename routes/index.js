var router = require( 'express' ).Router(),
    fs = require( 'fs' );

router.get( '/', function ( req, res, next ){
    fs.readdir( './content', function( error, files ){
        if ( error )
            return next( error );

        res.render( 'index', {files: files} );
    });
});

module.exports = router;
