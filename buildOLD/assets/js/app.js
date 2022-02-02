
(function () {

    var bLazy = new Blazy();

    // document.addEventListener('DOMContentLoaded', function () {
    //     new Splide('.splide').mount();
    // });

    var elms = document.getElementsByClassName( 'splide' );
    for ( var i = 0, len = elms.length; i < len; i++ ) {
        new Splide( elms[ i ], {
            // autoplay: true
        } ).mount();
    }


})();

