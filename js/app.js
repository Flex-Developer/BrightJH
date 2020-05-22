$(function(){

	// Fixed Header
	let header = $("#header");
	let home = $("#home");
	let homeH = home.innerHeight();
	let scrollPos = $(window).scrollTop();

	checkScroll(scrollPos,homeH);

	$(window).on("scroll load resize", function(){
		homeH = home.innerHeight();
		scrollPos=$(this).scrollTop();

		checkScroll(scrollPos,homeH);
	});

	function checkScroll(scrollPos,homeH){
		if (scrollPos>homeH){
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	}


	/*Smooth Scroll*/
	$("[data-scroll]").on("click", function(event){
		event.preventDefault();

		let elementId=$(this).data('scroll');
		let elementOffset=$(elementId).offset().top;

		// console.log(elementOffset);

		$("html, body").animate({
			scrollTop:elementOffset
		}, 700);
	});


	/*Nav Toggle*/
	let nav=$("#nav");
	let navToggle=$("#navToggle");

	navToggle.on("click",function(event){
		event.preventDefault();

		nav.toggleClass("show");

	})

});