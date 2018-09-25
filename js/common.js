$(document).ready(function(){

	/*----------------------------
				PRELOADER
  -----------------------------*/
  
  setTimeout(function() {	
		$('#preloader').fadeOut(); 
	}, 1000);

	/*----------------------------
	 SMOOTH SCROLL
	-----------------------------*/

	$("a").on('click', function(event) {
		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();

			// Store hash
			var hash = this.hash;

			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function(){
	
				// Add hash (#) to URL when done scrolling (default click behavior)
				window.location.hash = hash;
			});
		} // End if
	});
	
	/*----------------------------
				OWL-CAROUSEL INIT
  -----------------------------*/

		$(".owl-carousel").owlCarousel({
			loop: true,
			items: 1,
			dots: true,
			autoplay: true,
			autoplayHoverPause: true,
			dotsContainer: ".owl-buttons"
		});

	/*----------------------------
			HAMBURGER TOGGLE
	-----------------------------*/

		$(".hamburger, .anchor").click(function() {
			$(".hamburger").toggleClass(" is-active");
			$("body").toggleClass(" noflow");
			$(".hamburger-inner").toggleClass(" is-black");
			$(".main-nav").toggleClass(" show");
		});

	/*----------------------------
		OWL-CAROUSEL INIT CLIENTS
	-----------------------------*/

		$(".clients-carousel").owlCarousel({
			loop: true,
			items: 5,
			nav: false,
			dots: false,
			center: false,
			autoWidth: true,
			margin: 0,
			center: true,
			responsive: {
				1150: {
					items: 1
				}
			}
		});

	/*----------------------------
	 OWL-CAROUSEL BLOG
	-----------------------------*/
		
		$(".blog-section__blogpost-carousel").owlCarousel({
			loop: false,
			items: 3,
			dots: true,
			autoplay: true,
			autoplayHoverPause: true,
			center: false,
			autoWidth: false,
			dotsContainer: ".blogpost-carousel_owl-buttons",
			responsive: {
				0: {
					items: 1,
					loop: false
				},
				851: {
					items: 2
				},
				1151: {
					items: 3
				}
			}
		});
});
