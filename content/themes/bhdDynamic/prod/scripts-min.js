function onYouTubeIframeAPIReady(){player=new YT.Player("ytplayer",{events:{onReady:onPlayerReady}})}function onPlayerReady(o){player.mute(),player.playVideo()}$j=jQuery.noConflict(),$j(window).scroll(function(){$j(window).scrollTop()>900&&$j("#nav").addClass("nav-sticky"),$j(window).scrollTop()<=900&&$j("#nav").removeClass("nav-sticky"),$j(window).scrollTop()>900&&$j(window).scrollTop()<=4170?$j("#menu-01").css("color","rgba(193, 74, 54, 0.5)"):$j("#menu-01").css("color","#EC5A4F"),$j(window).scrollTop()>4170&&$j(window).scrollTop()<=6252?$j("#menu-02").css("color","rgba(193, 74, 54, 0.5)"):$j("#menu-02").css("color","#EC5A4F"),$j(window).scrollTop()>6252&&$j(window).scrollTop()<=6710?$j("#menu-03").css("color","rgba(193, 74, 54, 0.5)"):$j("#menu-03").css("color","#EC5A4F"),$j(window).scrollTop()>6710?$j("#menu-04").css("color","rgba(193, 74, 54, 0.5)"):$j("#menu-04").css("color","#EC5A4F")});var aboutSlider={};aboutSlider.counter=1,aboutSlider.slideFxn=function(o,e){var l=$j("#about-slider-01").children().length,r=$j("#about-01").position().left;if(aboutSlider.counter<=l&&aboutSlider.counter>0){console.log("triggers on normal: ",aboutSlider.counter);var n=$j("#about-0"+aboutSlider.counter),t=n.position().left,i=t-r;$j("#about-slider-01").animate({scrollLeft:i},o/2)}else if(aboutSlider.counter<1){aboutSlider.counter=l,console.log("triggers on 0: ",aboutSlider.counter);var n=$j("#about-0"+aboutSlider.counter),t=n.position().left,i=t-r;$j("#about-slider-01").animate({scrollLeft:i},o)}else aboutSlider.counter=1,console.log("triggers on else: ",aboutSlider.counter),$j("#about-slider-01").animate({scrollLeft:0},o)},$j("#next").on("click",function(){aboutSlider.counter++,aboutSlider.slideFxn(2e3)}),$j("#prev").on("click",function(){aboutSlider.counter--,aboutSlider.slideFxn(2e3)}),$j("#watch").on("click",function(){$j("#video-box").html('<iframe id="ytplayer" type="text/html" width="1529px" height="860px" src="https://www.youtube.com/embed/NDQCxIrADZc?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=0&autoplay=1&enablejsapi=1" frameborder="0" allowfullscreen></iframe>'),$j("#popup-video").fadeIn(500,function(){$j("#loading").fadeOut(2200,function(){})})}),$j("#close-popup").on("click",function(){$j("#popup-video").fadeOut(500,function(){$j("#ytplayer").remove()})});var player;