$j=jQuery.noConflict(),$j("#hamburger").on("click",function(o){o.preventDefault(),$j("#fullmenu").fadeIn(500,function(){})}),$j("#close-menu").on("click",function(o){o.preventDefault(),$j("#fullmenu").fadeOut(500,function(){})}),window.screen.width<850&&$j(".fullmenu").on("click",function(){$j("#fullmenu").fadeOut(1e3,function(){})}),$j(window).scroll(function(){console.log("window scroll: ",$j(window).scrollTop(),"window width: ",$j(window).width()),$j(window).scrollTop()>900&&$j("#nav").addClass("nav-sticky"),$j(window).scrollTop()<=900&&$j("#nav").removeClass("nav-sticky"),$j(window).scrollTop()>296&&$j(window).scrollTop()<=3385?$j("#menu-01").css("color","rgba(193, 74, 54, 0.5)"):$j("#menu-01").css("color","#EC5A4F"),$j(window).scrollTop()>3385&&$j(window).scrollTop()<=5080?$j("#menu-02").css("color","rgba(193, 74, 54, 0.5)"):$j("#menu-02").css("color","#EC5A4F"),$j(window).scrollTop()>5080&&$j(window).scrollTop()<=5504?$j("#menu-03").css("color","rgba(193, 74, 54, 0.5)"):$j("#menu-03").css("color","#EC5A4F"),$j(window).scrollTop()>5504?$j("#menu-04").css("color","rgba(193, 74, 54, 0.5)"):$j("#menu-04").css("color","#EC5A4F")}),$j("#nav-about").on("click",function(o){o.preventDefault(),$j("html,body").animate({scrollTop:900},"slow","swing")}),$j("#nav-press").on("click",function(o){o.preventDefault(),$j("html,body").animate({scrollTop:3831},"slow","swing")}),$j("#nav-leasing").on("click",function(o){o.preventDefault(),$j("html,body").animate({scrollTop:5350},"slow","swing")}),$j("#nav-connect").on("click",function(o){o.preventDefault(),$j("html,body").animate({scrollTop:5777},"slow","swing")});var aboutSlider={};aboutSlider.counter=1,aboutSlider.slideFxn=function(o,n){var e=$j("#about-slider-01").children().length,l=$j("#about-01").position().left;if(aboutSlider.counter<=e&&aboutSlider.counter>0){console.log("triggers on normal: ",aboutSlider.counter);var t=$j("#about-0"+aboutSlider.counter),c=t.position().left,i=c-l;$j("#about-slider-01").animate({scrollLeft:i},o/2)}else if(aboutSlider.counter<1){aboutSlider.counter=e,console.log("triggers on 0: ",aboutSlider.counter);var t=$j("#about-0"+aboutSlider.counter),c=t.position().left,i=c-l;$j("#about-slider-01").animate({scrollLeft:i},o)}else aboutSlider.counter=1,console.log("triggers on else: ",aboutSlider.counter),$j("#about-slider-01").animate({scrollLeft:0},o)},$j("#next").on("click",function(){aboutSlider.counter++,aboutSlider.slideFxn(2e3)}),$j("#prev").on("click",function(){aboutSlider.counter--,aboutSlider.slideFxn(2e3)}),$j("#watch").on("click",function(){$j("#popup-video").fadeIn(500,function(){$j(".head-text").fadeOut("fast",function(){var o=document.getElementById("full-video");o.play()})})}),$j("#close-popup").on("click",function(){$j("#popup-video").fadeOut(500,function(){$j(".head-text").fadeIn("fast",function(){var o=document.getElementById("full-video");o.pause()})})});