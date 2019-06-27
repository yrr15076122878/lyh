$(document).ready(function(){
	var p=0,t=0;

	$(window).scroll(function(e){
			p = $(this).scrollTop();
			
			if(p>=t){
				$("#top_nav").addClass("top-nav-animate-s").removeClass("top-nav-animate-x")
				console.log(p)
			}
			else{//上滚
				$("#top_nav").addClass("top-nav-animate-x").removeClass("top-nav-animate-s")
				console.log("21212")
				console.log(p)
			}
			setTimeout(function(){t = p;},0);		
	});
});
