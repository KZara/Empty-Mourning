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
    var fadeElem = $("#wallpaper");
    var fadeElem2 = $("#wallpaper2");
    var currScrollPos = documentEl.scrollTop();
    // var albumPG = document.getElementById("albumID");
    // var albumPGOFF = $(".album-page").offset().top;
    // var colorValue = 0;
    


    var heightOfPage = fadeElem.height();
    var currPage = Math.floor((currScrollPos + (heightOfPage/2))  / heightOfPage);
    var oldPage = currPage;

    if (currScrollPos == 0) {
        fadeElem.hide(0);
    } else {
        fadeElem.show(0);
    }

    switch(currPage) {
        case 1:
            fadeElem.css('background-color', '#000');
            break;
        case 2:
            fadeElem.css('background-color', '#222');
            break;
        case 3:
            fadeElem.css('background-color', '#444');
            break;
    }

    if (currPage == 0) {
        fadeElem.css('background-color', 'black');

        var fadeStart = 0;
        var fadeUntil = fadeElem.height()/4;

        var offset = $(document).scrollTop()
        var opacity=0;
        
        if (offset <= fadeStart) {
            opacity = 0;
        } else if (offset <= fadeUntil) {
            opacity = offset / fadeUntil;
        } else {
            opacity = 1;
        }
        fadeElem.css('opacity',opacity).html(opacity);
    }

    
    // if (currScrollPos >= 321) {
    //  colorValue = 34;
    //  albumPG.style.background = "rgb(" + colorValue + "," + colorValue + "," + colorValue + ")";
    // }
    // console.log(currScrollPos);



    documentEl.on('scroll', function() {

        currScrollPos = documentEl.scrollTop();
        // fadeElem.css('opacity', 0 + currScrollPos/(fadeElem.height() - 100));
        // console.log("current scroll " + currScrollPos);

        // console.log("doc height " + fadeElem.height());

        currPage = Math.floor((currScrollPos + (heightOfPage/2)) / heightOfPage);
        console.log("which page am I on? page:" + currPage);

        if (currScrollPos == 0) {
            fadeElem.hide(0);
            console.log("i'm at the very top");
        } else {
            fadeElem.show(0);
        }

        if (currPage == 0) {
            fadeElem.css('background-color', 'black');

            var fadeStart = 0;
            var fadeUntil = fadeElem.height()/4;

            var offset = $(document).scrollTop()
            var opacity=0;
            
            if (offset <= fadeStart) {
                opacity = 0;
            } else if (offset <= fadeUntil) {
                opacity = offset / fadeUntil;
            } else {
                opacity = 1;
            }
            fadeElem.css('opacity',opacity).html(opacity);
            console.log(opacity);
        }

        if (currPage != oldPage) {
            oldPage = currPage;
            
            opacity = 1;
            fadeElem.css('opacity',opacity).html(opacity);
            if (currPage == 0) {
                // fadeElem.fadeTo(150, 0);
                // fadeElem.delay(150).hide(0);

                // fadeElem2.fadeTo(150, 0);
                // fadeElem2.delay(150).hide(0);

            } else {
                switch(currPage) {
                    case 1:
                        fadeElem.animate({backgroundColor: "#000"}, {queue: false}, 700);
                        break;
                    case 2:
                        fadeElem.animate({backgroundColor: "#222"}, {queue: false}, 700);
                        break;
                    case 3:
                        fadeElem.animate({backgroundColor: "#444"}, {queue: false}, 700);
                        break;
                }

            }
        }

    });
});

$("#shows-link").click(function() {
    var section = $(this).attr("href");
    $('html, body').animate({
        scrollTop: $(section).offset().top
    }, 500);
    return false;
    }
)
$("#album-link").click(function() {
    var section = $(this).attr("href");
    $('html, body').animate({
        scrollTop: $(section).offset().top
    }, 500);
    return false;
    }
)
$("#photos-link").click(function() {
    var section = $(this).attr("href");
    $('html, body').animate({
        scrollTop: $(section).offset().top
    }, 500);
    return false;
    }
)

$(window).scroll(function() {
    var fadeElem = $("#wallpaper");
    var pagePosition = $("#album-page").position().top
    var currScroll = $(window).scrollTop()
    var theta = currScroll -  pagePosition + fadeElem.height()/2;

    if (currScroll <= pagePosition + fadeElem.height()) {
        $('#album-cover').css("box-shadow", '0px 0px ' + theta * 0.05  + 'px #eac085' );
        console.log("YES");
    }
});

