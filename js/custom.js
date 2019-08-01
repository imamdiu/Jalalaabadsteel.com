/*######################################
				SERVICES
#######################################*/
$(function () {

    // animate on scroll
    new WOW().init();

});
/*######################################
				WORK
#######################################*/

$(function () {

    $("#work").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    })

});

/*######################################
				TEAM
#######################################*/
$(function () {
    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSeed: 700,
        loop: true,
        autoplayHoverPause: true
    });

});

/*######################################
				TESTIMONIALS
#######################################*/
$(function () {
    $("#cutomers-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});

/*######################################
				CLIENS
#######################################*/
$(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});

/*######################################
				NAVIGATION
#######################################*/
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() < 50) {
            //hide nav
            $("nav").removeClass("vesco-top-nav");
            $("back-to-top").fadeOut();
        } else {
            //show nav
            $("nav").addClass("vesco-top-nav");
            $("back-to-top").fadeIn();
        }

    });
});

/*######################################
			Smooth scrolling
#######################################*/
// $(function () {
//     $("a.smooth-scroll").click(function (event) {

//         event.preventDefault();

//         var section = $(this).attr("href");
//         $('html, body').animate({
//             scrollTop: $(section).offset.top
//         }, 1250);
//     });
// });

/// Default ////
// $(function () {

// });