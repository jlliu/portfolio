
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

	 // $(".link").hover(function(){
  //       $(this).css("color", "#767676")
  //       $(this).css("letter-spacing", "6px");
        
  //       }, function(){
  //       $(this).css("color", "#B4CBC5")
  //       $(this).css("letter-spacing", "0px");
  //   });

	$("#cv").click(function(){	  
			console.log("cv clicked");
			$("#gallery2").fadeOut(0);
			$("#thumbContainer").fadeOut(0);

			$("#bio").fadeOut(0);
			$("#sort").fadeOut(0);
			$("#resume").fadeIn(500);
			$("#sort").fadeOut();
			
			$("#about").css("color", "#B4CBC5");
			$("#cv").css("color", "#767676");
			$("#works").css("color", "#B4CBC5");
			$("#cv").css("letter-spacing", "6px");
			$("#about").css("letter-spacing", "0px");
			$("#works").css("letter-spacing", "0px");
	});
	$("#about").click(function(){	  
			console.log("bio clicked");
			$("#gallery2").fadeOut(0);
			$("#sort").fadeOut();
			$("#sort").fadeOut(0);
			$("#thumbContainer").fadeOut(0);
			$("#resume").fadeOut(0);
			$("#bio").fadeIn(500);
			
			$("#about").css("color", "#767676");
			$("#cv").css("color", "#B4CBC5");
			$("#works").css("color", "#B4CBC5");
			$("#cv").css("letter-spacing", "0px");
			$("#about").css("letter-spacing", "6px");
			$("#works").css("letter-spacing", "0px");
	});
	$("#works").click(function(){	  
			console.log("bio clicked");
			$("#gallery2").fadeOut();
			$(".type").css("color", "#839C97");
			$(".type").css("letter-spacing", "0px");
			$("#resume").fadeOut(0);
			$("#bio").fadeOut(0);
			$("#thumbs").fadeOut(100);
			$(".thumb").show().delay(100);
			$("#thumbs").fadeIn(510);
			$("#thumbContainer").fadeIn(510);
			$("#sort").fadeIn(510);
			
			$("#about").css("color", "#B4CBC5");
			$("#cv").css("color", "#B4CBC5");
			$("#works").css("color", "#767676");
			$("#cv").css("letter-spacing", "0px");
			$("#about").css("letter-spacing", "0px");
			$("#works").css("letter-spacing", "6px");
	});


	$("#next").click(function(){	  
			
		
			// n = next_n;
			// Get the next and previous n's for the current n
			navigate(n);
			// console.log("n: ".concat(n));
			// console.log("prev n: ".concat(prev_n));
			// console.log("nxt n: ".concat(next_n));
			// n = next_n
			// Get the dictionary key for the next n
			chosenThumb = order[next_n];
			n = next_n;
			// console.log("current n:".concat(n));
			// console.log(chosenThumb);
			// navigate(n);
			$("#galleryContent").hide("slide", { direction: "left" },500);
		
			setTimeout(function(){$("#galleryContent").html(content[chosenThumb])},500);
			setTimeout(function(){$("#galleryContent").show("slide", { direction: "right" }, 500)},500);
		
			$("#projTitle").html(title[chosenThumb]);


		});  
		$("#prev").click(function(){	  
			// n = prev_n;
			navigate(n);
			n = prev_n;
			// console.log("current n:".concat(n));
			// n = current_n;
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
 	$(".thumb").click(function(){	  
		

		chosenThumb = "";
		chosenThumb = (this.id);
		$("#sort").fadeOut();
		$("#projTitle").html(title[chosenThumb]);
		$("#galleryContent").html(content[chosenThumb]);
		n = order.indexOf(chosenThumb);
		$("#thumbs").slideToggle(1500,"easeOutExpo");
		$("#gallery2").slideToggle();
		$("#back").click(function(){	  
			$("#thumbs").slideDown(1500,"easeOutExpo");
			$("#gallery2").slideUp();
			$("#sort").fadeIn();
		});
		//fix problem by putting next/prev/back buttons outside of galleryContent...
		
 	 	



	});

	$(".type").click(function(){
		// console.log("type clicked");
		chosenType = "";
		chosenType = this.id;
		// console.log(chosenType);
		type = ["digital","physical","web","paint","light"];
		$(".thumb").fadeOut();
		//For each chosen type, make type grey and spaced out, make rest of types green and nrmal
		chosenClass = "."+ chosenType;
		$(chosenClass).fadeIn();
		chosenID = "#" + chosenType;
		for (i in type) {
			t = type[i];
			// console.log(t);
			if (t != chosenType){
				tID= "#" + t;
				$(tID).css("color", "#839C97");
				$(tID).css("letter-spacing", "0px");
			}
			$(chosenID).css("color", "#767676");
			$(chosenID).css("letter-spacing", "6px");
		}
			
			


		// if(chosenType == "digital"){
		// 	$(".digital").fadeIn();
		// } else if (chosenType == "physical"){
		// 	$(".physical").fadeIn();
		// }else if (chosenType == "web"){
		// 	$(".web").fadeIn();
		// }else if (chosenType =="paint"){
		// 	$(".paint").fadeIn();
		// }else if (chosenType == "light"){
		// 	$(".light").fadeIn();
		// }

		// 	$(".digital").css("color", "#B4CBC5");
		// 	$(".").css("color", "#B4CBC5");
		// 	$("#works").css("color", "#767676");
		// 	$("#cv").css("letter-spacing", "0px");
		// 	$("#about").css("letter-spacing", "0px");
		// 	$("#works").css("letter-spacing", "6px");
		
	});

 

 }); 