(function($) {
  
	function init(){
		var winHeight = $(window).height();
		$('.repeat').height(winHeight * 2);
		
		var docHeight = $(document).height();
		var fullScroll = docHeight - winHeight;
		
		$(window).scroll(function () {
	  	var scrollPos = $(window).scrollTop();

	  	if (scrollPos >= (fullScroll)) {
	  		$('.work').css('margin-top', (winHeight * 1.5) + 'px');
	  		$(document).scrollTop(0);
	  	}
		});
	};

	$(window).bind("load", function() {
		init();
	});

})(jQuery);