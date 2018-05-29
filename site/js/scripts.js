jQuery(document).ready(function() {
	$(document).on("click","a.portfolio-lightbox-link, div.video-portfolio-container", function(e) {
		//e.preventDefault();
		var image_url = $(this).attr("image-url");
		var image_client = $(this).attr("image-client");
		var image_logo = $(this).attr("image-logo");
		var image_description = $(this).attr("image-desc");
		
		if ($(this).hasClass("video-portfolio-container")) {
			var video_embed_code = $(this).attr("video-embed-code");
			$("div.portfolio-lightbox-image-block").html('<div align="center" style="background-color: white; width: 100%; height: 100%; background-image: url('+image_url+'); background-size: cover; background-position: 50% 50%; background-repeat: no-repeat;">' + video_embed_code + '</div>');
		} else {
			$("div.portfolio-lightbox-image-block").html('<div align="center" style="background-color: white; width: 100%; height: 100%; background-image: url('+image_url+'); background-size: cover; background-position: 50% 50%; background-repeat: no-repeat;"></div>');
		}
		
		
		$("div.portfolio-lightbox-text-block a.company-logo-block").css("background-image", "url("+image_logo+")").css("background-size", "cover").css("background-position", "50% 50%");
		
		$("div.portfolio-lightbox-text-block div.company-name").html( image_client );
		
		$("div.portfolio-lightbox-text-block div.portfolio-text-container div.slant.white em").html( image_description );
		
	});
	
	if ($("body").hasClass("first-landing")) {
		console.log("first-landing detected");
		$(".w-nav-button").trigger("tap");
		setTimeout( function(e) { $(".w-nav-button").trigger("tap"); }, 10000 );
	}
	
	$('.infinite-scroll').jscroll({
		loadingHtml: '<img class="infite-scroll-animation" src="/sites/all/themes/mojo/images/mojo_loader.gif" width="80px;" alt="Loading" />',
	});
	
	$(document).on("click", "div.lazy-loader-post-block", function(e) {
		var goto_page = $(this).attr("href");
		window.location.href = goto_page;
	});
	
	$(document).on("tap", ".w-nav-button", function(e) {
		$('.w-nav[data-animation="over-right"] .w--nav-menu-open').css("-webkit-transform","translate3d(0,0,0)");
	});
	
	/* close signup popup */
	$(document).on('click', '.closer a#closer', function() {
		$('a[data-ix="close-portfolio-2"]').trigger('click');
	});
});
