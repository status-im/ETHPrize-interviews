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
        $('body').animate({
            scrollTop: eval($('#' + $(this).attr('target')).offset().top - 270)
        }, 1000);
    });

    // Also can pass in optional settings block
    var rellax = new Rellax('.rellax', {
        speed: -2,
        center: false,
        round: true,
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
                    $('.navbar[color-on-scroll]').addClass('light');
                }
            } else {
                if( !transparent ) {
                    transparent = true;
                    $('.navbar[color-on-scroll]').removeClass('light');
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