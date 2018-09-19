// Function and variable to check if the user 
// has scrolled. Set to true if scrolled and
// checks every 200ms for additional scrolls. 
var hasScrolled;
var lst = 0; //Initial scroll position

//Remove navbar on startup
var $nav = $('#dark-navbar');
$nav.removeClass('dark-navbar-down').addClass('dark-navbar-up');

$(window).scroll(function(event){
  hasScrolled = true;
});

setInterval(function() {
  if (hasScrolled) {
    navbarMovement();
   // wallpaperScroll();
    didScroll = false;
  }
}, 200);

function navbarMovement() {
	var thresh = 5; //Threshold for navbar to appear
	var st = $(this).scrollTop(); //Current position
	var $nav = $('#dark-navbar'); //Navbar	

	if (st <= thresh){
		$nav.removeClass('dark-navbar-down').addClass('dark-navbar-up');
	}

	if(st > lst && st > thresh) {
		$nav.removeClass('dark-navbar-down').addClass('dark-navbar-up');
		
	} 

	else {
		
		if (lst > st && st + $(window).height() < $(document).height()) { 	
			$nav.removeClass('dark-navbar-up').addClass('dark-navbar-down');
		}
	} 
	lst = st;
}

$(function () {
	
	var documentEl = $(document);
	var	fadeElem = $("#wallpaper");
	var	fadeElem2 = $("#wallpaper2");
	var currScrollPos = documentEl.scrollTop();
	// var albumPG = document.getElementById("albumID");
	// var albumPGOFF = $(".album-page").offset().top;
	// var colorValue = 0;
	


	var heightOfPage = fadeElem.height();
	var currPage = Math.floor((currScrollPos + (heightOfPage/2))  / heightOfPage);
	var oldPage = currPage;

	if (currPage == 0) {
		fadeElem.hide();
		fadeElem2.hide();
	}
	
	console.log(heightOfPage);

	
	// if (currScrollPos >= 321) {
	// 	colorValue = 34;
	// 	albumPG.style.background = "rgb(" + colorValue + "," + colorValue + "," + colorValue + ")";
	// }
	// console.log(currScrollPos);



	documentEl.on('scroll', function() {

		currScrollPos = documentEl.scrollTop();
		// fadeElem.css('opacity', 0 + currScrollPos/(fadeElem.height() - 100));
		// console.log("current scroll " + currScrollPos);

		// console.log("doc height " + fadeElem.height());

		currPage = Math.floor((currScrollPos + (heightOfPage/2))  / heightOfPage);
		console.log("which page am I on? page:" + currPage);

		if (currPage != oldPage) {
			oldPage = currPage;
			if (currPage == 0) {
				fadeElem.fadeTo(150, 0);
				fadeElem.delay(150).hide(0);

				fadeElem2.fadeTo(150, 0);
				fadeElem2.delay(150).hide(0);
			} else {
				switch(currPage) {
					case 1:
						fadeElem.fadeTo(150, 1);
						// fadeElem.delay(600).show(0);

						fadeElem2.fadeTo(150, 1);
						// fadeElem2.delay(600).show(0);
						break;
					case 2:
						fadeElem.fadeTo(150, 1);
						// fadeElem.delay(600).show(0);

						fadeElem2.fadeTo(150, 0.5);
						// fadeElem2.delay(600).show(0);
						break;
					case 3:
						fadeElem.fadeTo(150, 1);
						// fadeElem.delay(600).show(0);

						fadeElem2.fadeTo(150, 0);
						// fadeElem2.delay(600).show(0);
						break;
				}

			}
		}

		// if (currScrollPos == 0) {
		// 	colorValue = 0;
		// }
		// if (colorValue < 34) {
		// 	if (newScroll < currScrollPos) {
		// 		colorValue += .3;
		// 		albumPG.style.background = "rgb(" + colorValue + "," + colorValue + "," + colorValue + ")";
		// 	}
		// }
		// if(colorValue > 0) {
		// 	if (newScroll > currScrollPos) {
		// 		colorValue -= .3;
		// 		albumPG.style.background = "rgb(" + colorValue + "," + colorValue + "," + colorValue + ")";
		// 	}
		// }
		// if(albumPGOFF <= currScrollPos) {
		// 	colorValue = 34;
		// 	albumPG.style.background = "rgb(" + colorValue + "," + colorValue + "," + colorValue + ")";
		// }

		// 	// console.log(colorValue);

		// 	newScroll = currScrollPos;

	});
});
