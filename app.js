jQuery( document ).ready( function( $ ) {
    if ( $( window ).width() >= 767 ) {
        $( '.navbar-nav > li.menu-item > a' ).click( function() {
            window.location = $( this ).attr( 'href' );
        } );
    }
} );