jQuery(document).ready(function ($) {
	$('.loop').owlCarousel({
		center: true,
		loop: true,
		nav: false,
		dots: false,
		autoWidth: false,
		margin: 30,
		items: 1,
		//		autoplay: true,
		autoplayTimeout: 4000,
		responsive: {
			480: {
				items: 1.5
			},
			600: {
				items: 2
			},
			1200: {
				items: 3
			},
			1366: {
				items: 4
			},
		}
	});
});








//When the user click on the link and hide,scroll to the document

$(function () {
	var navMain = $(".navbar-collapse");

	navMain.on("click", "a", null, function () {
		navMain.collapse('hide');
	});
});


// header fixed on scroll

$(window).on("scroll", function () {
	if ($(window).scrollTop() > 50) {
		$("header").addClass("active");
	} else {
		//remove the background property so it comes transparent again (defined in your css)
		$("header").removeClass("active");
	}
});


//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
	scrollFunction()
};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

$(document).ready(function ($) {
	if (screen.width > 1024) {
		AOS.init({
			easing: 'ease-in-out-sine',
			once: true,
		});
	}
});



var siteIstotope = function () {
	var $container = $('#portfolio-grid').isotope({
		itemSelector: '.item',
		isFitWidth: true
	});

	$(window).resize(function () {
		$container.isotope({
			columnWidth: '.col-sm-3'
		});
	});

	$container.isotope({
		filter: '*'
	});

	$('#filters').on('click', 'a', function (e) {
		e.preventDefault();
		var filterValue = $(this).attr('data-filter');
		$container.isotope({
			filter: filterValue
		});
		$('#filters a').removeClass('active');
		$(this).addClass('active');
	});
}
$(window).on('load', function () {
	siteIstotope();
});
