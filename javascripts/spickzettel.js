$(document).ready( function () {

    // toggle the bookshelf when someone click on it
    $(".sidebar.vertical button").click( function () {
        if ( ! $(".shelf").hasClass( "active" ) ) {

            $( ".shelf .picture" ).delay( 500 ).fadeIn( 200 );
            $( ".shelf" ).animate( { width: "100%" }, 500 );
            $( ".shelf" ).addClass( "active" );
        }
        else {
            $( ".shelf .picture" ).fadeOut( 200 );
            $( ".shelf" ).delay( 200 ).animate( {width: "0"}, 500 );
            $( ".shelf" ).removeClass( "active" );
        }
    });

    // add a headline to all magazines inside of the shelf
    $('.shelf img').each(function(n) {
        n += 1;
        $(this).wrap('<div class="tint t' + n + '"></div>');
        caption = $(this).attr("data-caption");
        $('<p class="caption">' + caption + '</p></div>').appendTo(".t" + n);
    });
    $(".tint").click(function () {
        window.location.href = $(this).children().attr("src");
    });

});
