$j=jQuery.noConflict(),$j(window).scroll(function(){$j(window).scrollTop()>900&&(console.log("this is 900!"),$j("#nav").addClass("nav-sticky")),$j(window).scrollTop()<=900&&$j("#nav").removeClass("nav-sticky")});