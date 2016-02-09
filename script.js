
function navigate(cur_n) {
	if (cur_n == order.length - 1){
			next_n=0;
			prev_n = cur_n-1;
	} else if (cur_n==0){
			prev_n = order.length-1;
			next_n= cur_n+1;
	} else {
			prev_n = cur_n-1;
			next_n = cur_n+1;
	}
}

		

$(document).ready(function(){
	$("#bio").hide();
	$("h1").click(function(){	  
			console.log("h1 clicked");
	});

	$( ".selector" ).loader({
  			disabled: true
	});



	$("#cv").click(function(){	  
			console.log("cv clicked");
			$("#gallery2").fadeOut(0);
			$("#thumbContainer").fadeOut(0);

			$("#bio").fadeOut(0);
			$("#sort").fadeOut(0);
			$("#resume").fadeIn(500);
			$("#sort").fadeOut();
			
			$(".link").css("color", "#B4CBC5");
			$("#cv").css("color", "#767676");
			$(".link").css("letter-spacing", "0px");
			$("#cv").css("letter-spacing", "6px");
	});
	$("#about").click(function(){	  
			console.log("bio clicked");
			$("#gallery2").fadeOut(0);
			$("#sort").fadeOut();
			$("#sort").fadeOut(0);
			$("#thumbContainer").fadeOut(0);
			$("#resume").fadeOut(0);
			$("#bio").fadeIn(500);
			
			$(".link").css("color", "#B4CBC5");
			$("#about").css("color", "#767676");
			$(".link").css("letter-spacing", "0px");
			$("#about").css("letter-spacing", "6px");
	});
	$("#works").click(function(){	  
			console.log("bio clicked");
			$("#gallery2").fadeOut();
			$(".type").css("color", "#839C97");
			$(".type").css("letter-spacing", "0px");
			$(".thumbnailsportfolio").fadeOut();
			$("#resume").fadeOut(0);
			$("#bio").fadeOut(0);
			$("#thumbs").fadeOut(100);
			$(".works").css("display","inline-block");
			$(".thumbnailsworks").fadeIn().delay(100);
			$("#thumbs").fadeIn(510);
			$("#thumbContainer").fadeIn(510);
			
			$("#sortContainer").fadeIn(600);
			
			$(".link").css("color", "#B4CBC5");
			$("#works").css("color", "#767676");
			$(".link").css("letter-spacing", "0px");
			$("#works").css("letter-spacing", "6px");
	});

	$("#portfolio").click(function(){	  
			console.log("bio clicked");
			$("#gallery2").fadeOut();
			$(".type").css("color", "#839C97");
			$(".type").css("letter-spacing", "0px");
			$("#sortContainer").fadeOut(500);
			$("#resume").fadeOut(0);
			$("#bio").fadeOut(0);
			$("#thumbs").fadeOut(100);
			$(".thumbnailsworks").fadeOut();
			$(".thumbnailsportfolio").fadeIn().delay(100);
			$("#thumbContainer").fadeIn(510);
			
			$(".link").css("color", "#B4CBC5");
			$("#portfolio").css("color", "#767676");
			$(".link").css("letter-spacing", "0px");
			$("#portfolio").css("letter-spacing", "6px");
	});

	$("#next").click(function(){	  

			navigate(n);

			chosenThumb = order[next_n];
			n = next_n;
			$("#galleryContent").hide("slide", { direction: "left" },500);
			setTimeout(function(){$("#galleryContent").html(content[chosenThumb])},500);
			setTimeout(function(){$("#galleryContent").show("slide", { direction: "right" }, 500)},500);
			$("#projTitle").html(title[chosenThumb]);


		});  
		$("#prev").click(function(){	  
			navigate(n);
			n = prev_n;
			chosenThumb = order[prev_n];
			 $("#galleryContent").hide("slide", { direction: "right" }, 500);
			setTimeout(function(){$("#galleryContent").html(content[chosenThumb])},500);
			setTimeout(function(){$("#galleryContent").show("slide", { direction: "left" }, 500)},500);
			$("#projTitle").html(title[chosenThumb]);

		});  
	$("#gallery2").hide();

//Slide gallery using left and right keys
	$("body").keydown(function(e) {
  if(e.keyCode == 37) { // left
    		navigate(n);
			n = prev_n;
			chosenThumb = order[prev_n];
			 $("#galleryContent").hide("slide", { direction: "right" }, 500);
			setTimeout(function(){$("#galleryContent").html(content[chosenThumb])},500);
			setTimeout(function(){$("#galleryContent").show("slide", { direction: "left" }, 500)},500);
			$("#projTitle").html(title[chosenThumb]);
  }
  else if(e.keyCode == 39) { // right
    navigate(n);
			chosenThumb = order[next_n];
			n = next_n;
			$("#galleryContent").hide("slide", { direction: "left" },500);
			setTimeout(function(){$("#galleryContent").html(content[chosenThumb])},500);
			setTimeout(function(){$("#galleryContent").show("slide", { direction: "right" }, 500)},500);
		
			$("#projTitle").html(title[chosenThumb]);
  }
});

//Swipe the gallery to the right
$("#gallery2").on("swipeleft",function(){
     navigate(n);
			chosenThumb = order[next_n];
			n = next_n;
			$("#galleryContent").hide("slide", { direction: "left" },500);
			setTimeout(function(){$("#galleryContent").html(content[chosenThumb])},500);
			setTimeout(function(){$("#galleryContent").show("slide", { direction: "right" }, 500)},500);
		
			$("#projTitle").html(title[chosenThumb]);
  });    
$("#gallery2").on("swiperight",function(){
  navigate(n);
			n = prev_n;
			chosenThumb = order[prev_n];
			 $("#galleryContent").hide("slide", { direction: "right" }, 500);
			setTimeout(function(){$("#galleryContent").html(content[chosenThumb])},500);
			setTimeout(function(){$("#galleryContent").show("slide", { direction: "left" }, 500)},500);
			$("#projTitle").html(title[chosenThumb]);
});

// Slide the menu categories upon click	
//Anything you want to do while the gallery content is loaded you should put in here
 	$(".portfolio").click(function(){	  
		// console.log("PORTFOLIO CLASS CLICKED");

		chosenThumb = "";
		chosenThumb = (this.id);
		$("#projTitle").html(title[chosenThumb]);
		$("#galleryContent").html(content[chosenThumb]);
		// If thumb chosen is a portfolio one set order to portfolio order
		order = portfolioOrder;
		$(".thumbnailsworks").hide();
		$("#thumbContainer").slideUp(1500,"easeOutExpo");
		$("#gallery2").slideDown();
		$("#headContainer").fadeIn();


		n = order.indexOf(chosenThumb);

	});



 	$(".works").click(function(){	  
		

		chosenThumb = "";
		chosenThumb = (this.id);
		$("#sortContainer").fadeOut();

		$("#projTitle").html(title[chosenThumb]);
		$("#galleryContent").html(content[chosenThumb]);
		
		order = worksOrder;
		$(".thumbnailsportfolio").hide();
		$("#thumbContainer").slideUp(1500,"easeOutExpo");		
		$("#gallery2").slideDown();
		$("#headContainer").fadeIn();

		n = order.indexOf(chosenThumb);

});


	$("#back").click(function(){	  
		$("#headContainer").hide();
		$("#gallery2").slideUp(500);
		$("#thumbContainer").slideDown(1500,"easeOutExpo");
		$("#sortContainer").fadeIn(500);

		
	});

	$(".thumbtitle").click(function(){	  
		

		chosenThumb = "";
		chosenThumb = $(this).attr("name");
		$("#sort").fadeOut();

		$("#projTitle").html(title[chosenThumb]);
		$("#galleryContent").html(content[chosenThumb]);

		order = portfolioOrder;
		$(".thumbnailsworks").hide();
		$("#thumbContainer").slideUp(1500,"easeOutExpo");
		$("#gallery2").slideDown();
		$("#headContainer").fadeIn();


		n = order.indexOf(chosenThumb);


	});

	$(".type").click(function(){

		chosenType = "";
		chosenType = this.id;
		type = ["digital","physical","web","paint","light"];
		$(".thumb").fadeOut();
		//For each chosen type, make type grey and spaced out, make rest of types green and nrmal
		chosenClass = "."+ chosenType;
		$(chosenClass).fadeIn();
		chosenID = "#" + chosenType;
		for (i in type) {
			t = type[i];
			if (t != chosenType){
				tID= "#" + t;
				$(tID).css("color", "#839C97");
				$(tID).css("letter-spacing", "0px");
			}
			$(chosenID).css("color", "#767676");
			$(chosenID).css("letter-spacing", "6px");
		}
			
			


		
	});

	

 }); 