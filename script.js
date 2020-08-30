$(window).on("load",function() {
	$(window).scroll(function() {
		  var windowBottom= $(this).scrollTop() + $(this).innerHeight();
		  $(".fade").each(function() {
				/* Check the location of each desired element */
				var objectTop = $(this).offset().top+$(this).outerHeight()/10;
				/* If the element is completely within bounds of the window, fade it in */
				if (objectTop < windowBottom) { //object comes into view (scrolling down)
				if (objectTop < windowBottom) { //object comes into view (scrolling down)
					  if ($(this).css("opacity")==0) {$(this).fadeTo(1000,1);}
				} else { //object goes out of view (scrolling up)
					  if ($(this).css("opacity")==1) {$(this).fadeTo(1000,0);}
				}
		  }
		  });
		  if($(this).scrollTop()>$(this).innerHeight()-70){
				$(".navbar").css("background-color","rgb(50,50,50)");
				$(".navbar-brand .img-fluid").css("max-height","55px");
		  }
		  else{
				$(".navbar").css("background-color","rgba(0,0,0,0)");
				$(".navbar-brand .img-fluid").css("max-height","80px");
		  }
	}).scroll(); //invoke scroll-handler on page-load
	});