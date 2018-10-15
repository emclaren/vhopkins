var d3 = require("d3");

// const p5sketch = require('./sketch.js');

// $(document).ready(function() {
//   var scene = new p5(p5sketch); 




  // // For desktop display
  // if($(window).width()>900){
  //   $('html, body, *').mousewheel(function(e, delta) {
  //     this.scrollLeft -= (delta);
  //     e.preventDefault();
      
      
  //     // change the size of the emoji
  //     if($(this).scrollLeft() != 0){
  //       current = $(this).scrollLeft()/50 +10;
  //       $('.intro-emoji').css("font-size" , (current) +"px");
  //     }
      
      
  //     // freeze intro text with emoji
  //     if($(this).scrollLeft() >  $(window).width() ){
  //       $(".intro-block").addClass("fix-position").removeClass("unfix-position")  
  //     } else if ($(this).scrollLeft() < $(window).width() && $(this).scrollLeft() != 0){
  //       $(".intro-block").removeClass("fix-position" ).addClass("unfix-position")  
  //     }
      
      
  //     if($(this).scrollLeft() >  $(window).width()*1.7){
  //       $(".intro-block").removeClass("fix-position").addClass("unfix-position")  ;
        
  //     } else if ($(this).scrollLeft() < $(window).width() && $(this).scrollLeft() != 0){
  //       $(".main-list").removeClass("fix-position").addClass("unfix-position")  
        
  //     }
      
  //     // freeze sideways text & unfreeze intro text
  //     if($(this).scrollLeft() >  $(window).width()*2){
  //       $(".intro-block").removeClass("fix-position").addClass("unfix-position")  ;
  //       $(".main-list").addClass("fix-position").removeClass("unfix-position")  
  //     } else if ($(this).scrollLeft() < $(window).width()*2 && $(this).scrollLeft() != 0){
  //       $(".main-list").removeClass("fix-position").addClass("unfix-position")  
        
  //     }
      
  //     // make sideways text scroll after main section
  //     if($(this).scrollLeft() >  $(window).width()*4.3){
  //       document.getElementById("main-list").style.left  =  $(window).width()*4.3 - $(this).scrollLeft() + "px";
  //     } else if ($(this).scrollLeft() < $(window).width()*4.3 && $(this).scrollLeft() != 0){
  //       document.getElementById("main-list").style.left  =  0 + "px";
        
  //     }
      
  //     // freeze art-funding copy
  //     if($(this).scrollLeft() >  $(window).width()*4.9){
  //       $(".art-funding-title").addClass("fix-position").removeClass("unfix-position")  
  //       $(".art-funding-copy").addClass("fix-position").removeClass("unfix-position")  
  //       $(".art-funding-copy2").addClass("fix-position").removeClass("unfix-position")  
  //     } else if ($(this).scrollLeft() < $(window).width()*4.9 && $(this).scrollLeft() != 0){
  //       $(".art-funding-title").removeClass("fix-position").addClass("unfix-position")  
  //       $(".art-funding-copy").removeClass("fix-position").addClass("unfix-position")  
  //       $(".art-funding-copy2").removeClass("fix-position").addClass("unfix-position")  
  //     }  
      
  //     // freeze the image after the art-funding copy
  //     if($(this).scrollLeft() >  $(window).width()*5.3){
  //       $(".canada-council-image").addClass("fix-position").removeClass("unfix-position")  
  //       window.firstSketch=false;
  //     } else if ($(this).scrollLeft() < $(window).width()*5.3 && $(this).scrollLeft() != 0){
  //       $(".canada-council-image").removeClass("fix-position").addClass("unfix-position")     
  //       window.firstSketch=true;
  //     }
      
  //     // freeze the programming copy
  //     if($(this).scrollLeft() >  $(window).width()*6.60){ 
  //       $(".programming-title").addClass("fix-position").removeClass("unfix-position")  
  //       $(".programming-copy").addClass("fix-position").removeClass("unfix-position")  
  //       $(".programming-copy2").addClass("fix-position").removeClass("unfix-position")  
  //       $(".canada-council-image").removeClass("fix-position").addClass("unfix-position")  
        
  //     } else if ($(this).scrollLeft() < $(window).width()*6.60 && $(this).scrollLeft() != 0){
  //       $(".programming-title").removeClass("fix-position").addClass("unfix-position")  
  //       $(".programming-copy").removeClass("fix-position").addClass("unfix-position")  
  //       $(".programming-copy2").removeClass("fix-position").addClass("unfix-position")  
  //     }
      
  //     // freeze the image after the programming copy
  //     if($(this).scrollLeft() >  $(window).width()*6.9){
  //       $(".programming-image").addClass("fix-position").removeClass("unfix-position") 
  //     } else if ($(this).scrollLeft() < $(window).width()*6.9 && $(this).scrollLeft() != 0){
  //       $(".programming-image").removeClass("fix-position").addClass("unfix-position")  
  //     }
      
  //     // freeze the seeking copy
  //     if($(this).scrollLeft() >  $(window).width()*7.91){
  //       $(".programming-title").removeClass("fix-position").addClass("unfix-position")  
  //       $(".programming-copy").removeClass("fix-position").addClass("unfix-position")  
  //       $(".programming-copy2").removeClass("fix-position").addClass("unfix-position")  
  //       $(".programming-image").removeClass("fix-position").addClass("unfix-position") 
  //       $(".seeking-title").addClass("fix-position").removeClass("unfix-position")  
  //       $(".seeking-copy").addClass("fix-position").removeClass("unfix-position")    
  //       $(".seeking-copy2").addClass("fix-position").removeClass("unfix-position") 
  //     } else if ($(this).scrollLeft() < $(window).width()*7.91 && $(this).scrollLeft() != 0){
  //       $(".seeking-title").removeClass("fix-position").addClass("unfix-position")  
  //       $(".seeking-copy").removeClass("fix-position").addClass("unfix-position") 
  //       $(".seeking-copy2").removeClass("fix-position").addClass("unfix-position") 
  //     }
  //     // freeze image after the seeking copy
  //     if($(this).scrollLeft() >  $(window).width()*8.2){
  //       $(".seeking-image").addClass("fix-position").removeClass("unfix-position")  
  //     } else if ($(this).scrollLeft() < $(window).width()*8.2 && $(this).scrollLeft() != 0){
  //       $(".seeking-image").removeClass("fix-position").addClass("unfix-position")  
        
  //     }
      
  //     // freeze contact section
  //     if($(this).scrollLeft() >  $(window).width()*9.2){
  //       $(".seeking-image").removeClass("fix-position").addClass("unfix-position") 
  //       $(".contact-title").addClass("fix-position").removeClass("unfix-position")  
  //       $(".contact-copy").addClass("fix-position").removeClass("unfix-position")  
  //       $(".contact-copy2").addClass("fix-position").removeClass("unfix-position")  
  //       $("canvas").addClass("fix-position").removeClass("unfix-position")  
  //     } else if ($(this).scrollLeft() < $(window).width()*9.2 && $(this).scrollLeft() != 0){
        
  //       $(".contact-title").removeClass("fix-position").addClass("unfix-position")  
  //       $(".contact-copy").removeClass("fix-position").addClass("unfix-position") 
  //       $(".contact-copy2").removeClass("fix-position").addClass("unfix-position")   
  //       $("canvas").removeClass("fix-position").addClass("unfix-position")  
  //     }
      
  //   });
    
    
    
  // }
  
  // // For mobile display
  // else{
  //   $(window).scroll(function (event) {
  //     console.log($(".intro-block").offset().top)
      
      
  //     // change the size of the emoji
  //     if($(this).scrollTop() != 0){
  //       current = $(this).scrollTop()/20 +10;
  //       $('.intro-emoji').css("font-size" , (current) +"px");
  //     }
      
      
  //     // freeze intro text with emoji
  //     if( $(window).scrollTop() > $(".header-desc-links").offset().top){
  //       $(".intro-block").addClass("fix-position").removeClass("unfix-position")  
  //     } else if ($(window).scrollTop() < $(".header-desc-links" ).offset().top ){
  //       $(".intro-block").removeClass("fix-position" ).addClass("unfix-position")  
  //     }
      
      
  //     // freeze sideways text & unfreeze intro text
  //     if($(window).scrollTop() > $(".main-list-container").offset().top){
  //       $(".intro-block").removeClass("fix-position").addClass("unfix-position");
  //       $(".main-list").addClass("fix-position").removeClass("unfix-position")  
  //     } else if ($(window).scrollTop() < $(".main-list-spacer").offset().top ){
  //       $(".main-list").removeClass("fix-position").addClass("unfix-position")  
        
  //     }
      
      
  //     // freeze art-funding copy
  //     if($(this).scrollTop() >  $( ".art-funding-block" ).offset().top){
  //       $(".art-funding-title").addClass("fix-position").removeClass("unfix-position")  
  //       $(".art-funding-copy").addClass("fix-position").removeClass("unfix-position")  
  //       $(".art-funding-copy2").addClass("fix-position").removeClass("unfix-position")  
  //     } else if ($(this).scrollTop() < $( ".art-funding-block" ).offset().top){
  //       $(".art-funding-title").removeClass("fix-position").addClass("unfix-position")  
  //       $(".art-funding-copy").removeClass("fix-position").addClass("unfix-position")  
  //       $(".art-funding-copy2").removeClass("fix-position").addClass("unfix-position")  
  //     }  
      
  //     // freeze the image after the art-funding copy
  //     if($(this).scrollTop() > $( ".canada-council-image" ).offset().top){
  //       $(".art-funding-title").removeClass("fix-position").addClass("unfix-position")  
  //       $(".art-funding-copy").removeClass("fix-position").addClass("unfix-position")  
  //       $(".art-funding-copy2").removeClass("fix-position").addClass("unfix-position") 
  //       $(".main-list").removeClass("fix-position").addClass("unfix-position") 
        
  //     } 
  //     // freeze the programming copy
  //     if($(this).scrollTop() > $( ".programming-block" ).offset().top){ 
  //       $(".programming-title").addClass("fix-position").removeClass("unfix-position")  
  //       $(".programming-copy").addClass("fix-position").removeClass("unfix-position")  
  //       $(".programming-copy2").addClass("fix-position").removeClass("unfix-position")  
  //       $(".canada-council-image").removeClass("fix-position").addClass("unfix-position")  
        
  //     } else if ($(this).scrollTop() < $( ".programming-block" ).offset().top){
  //       $(".programming-title").removeClass("fix-position").addClass("unfix-position")  
  //       $(".programming-copy").removeClass("fix-position").addClass("unfix-position")  
  //       $(".programming-copy2").removeClass("fix-position").addClass("unfix-position")  
  //     }
      
  //     // unfreeze the programming copy after image
  //     if($(this).scrollTop() > $( ".programming-image" ).offset().top){
  //       $(".programming-title").removeClass("fix-position").addClass("unfix-position")  
  //       $(".programming-copy").removeClass("fix-position").addClass("unfix-position")  
  //       $(".programming-copy2").removeClass("fix-position").addClass("unfix-position")  
  //     } 

      
  //     // freeze the seeking copy
  //     if($(this).scrollTop() >   $( ".seeking-block" ).offset().top ){
        
  //       $(".seeking-title").addClass("fix-position").removeClass("unfix-position")  
  //       $(".seeking-copy").addClass("fix-position").removeClass("unfix-position")    
  //       $(".seeking-copy2").addClass("fix-position").removeClass("unfix-position") 
  //     } else if ($(this).scrollTop() <  $( ".seeking-block" ).offset().top ){
  //       $(".seeking-title").removeClass("fix-position").addClass("unfix-position")  
  //       $(".seeking-copy").removeClass("fix-position").addClass("unfix-position") 
  //       $(".seeking-copy2").removeClass("fix-position").addClass("unfix-position") 
  //     }
  //     // // freeze image after the seeking copy
      
      
      
      
      
  //     // freeze image after the seeking copy
  //     if($(this).scrollTop() >  $( ".seeking-image" ).offset().top ){
  //       $(".seeking-title").removeClass("fix-position").addClass("unfix-position")  
  //       $(".seeking-copy").removeClass("fix-position").addClass("unfix-position") 
  //       $(".seeking-copy2").removeClass("fix-position").addClass("unfix-position") 
  //     } 
      
  //     // // freeze contact section
  //     if($(this).scrollTop() > $( ".contact-block" ).offset().top ){
  //       $(".seeking-image").removeClass("fix-position").addClass("unfix-position") 
  //       $(".contact-title").addClass("fix-position").removeClass("unfix-position")  
  //       $(".contact-copy").addClass("fix-position").removeClass("unfix-position")  
  //       $(".contact-copy2").addClass("fix-position").removeClass("unfix-position")  
  //       $("canvas").addClass("fix-position").removeClass("unfix-position")  
        
  //     } else if ($(this).scrollTop() < $( ".contact-block" ).offset().top ){
        
  //       $(".contact-title").removeClass("fix-position").addClass("unfix-position")  
  //       $(".contact-copy").removeClass("fix-position").addClass("unfix-position") 
  //       $(".contact-copy2").removeClass("fix-position").addClass("unfix-position")   
  //       $("canvas").removeClass("fix-position").addClass("unfix-position")  
  //     }
      
  //   });
    
  // }
  
  
// });


// $(window).bind('resize', function(e)
// {
//   window.scrollTo(0, 0);
//   if (window.RT) clearTimeout(window.RT);
//   window.RT = setTimeout(function()
//   {
//     this.location.reload(false); /* false to get page from cache */
//   }, 100);
// });