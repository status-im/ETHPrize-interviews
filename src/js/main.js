import "./imports";

var transparent = true;

var scroll_distance = 0;

$(document).ready(function(){
    var $navbar = $('.navbar[color-on-scroll]');
    scroll_distance = $navbar.attr('color-on-scroll') || 500;

    if($('.navbar[color-on-scroll]').length != 0){
        webApp.checkScrollForTransparentNavbar();
        $(window).on('scroll', webApp.checkScrollForTransparentNavbar)
    }

    $('.scroll').click(function() {
        var hash = $(this).attr('target');
        $('html, body').animate({
            scrollTop: $('#' + hash).offset().top - 50
        }, 1300);
    });

});

var webApp = {
    misc:{
        navbar_menu_visible: 0
    },

    checkScrollForTransparentNavbar: debounce(function() {
            if($(document).scrollTop() > scroll_distance ) {
                if(transparent) {
                    transparent = false;
                    $('header').addClass('op0');
                    $('.overlay').addClass('screen');
                }
            } else {
                if( !transparent ) {
                    transparent = true;
                    $('.overlay').removeClass('screen');
                    $('header').removeClass('op0');
                }
            }
    }, 17),

}

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		clearTimeout(timeout);
		timeout = setTimeout(function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		}, wait);
		if (immediate && !timeout) func.apply(context, args);
	};
};