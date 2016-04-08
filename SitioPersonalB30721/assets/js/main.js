$(function(){
	$(".main-navigation li").click(function(){
	  $(".main-navigation li.active").removeClass("active");  
	  $(this).addClass("active");
	})

	var str=location.href.toLowerCase();
	$(".main-navigation li a").each(function() {
	  if(str.indexOf(this.href.toLowerCase())>-1){
	    $('.main-navigation li.active').removeClass("active");
	    $(this).parent("li").addClass("active");
	  }
	});


})