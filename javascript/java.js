$(document).ready(function(){
    $('.imgslide a:gt(0)').hide();
    
    setInterval(function(){
       
      
        $('.imgslide a:first-child').fadeOut()
     
        .next('a').fadeIn()
        
        .end().appendTo('.imgslide');}, 3000);

        $('.main_menu').mouseover(function(){
            $(this).find("#sub_menu").addClass(".active").stop().slideDown(500);
            
        }).mouseout(function(){
            $(this).find("#sub_menu").stop().slideUp(500);
        })

        $('.mapxy').mouseover(function(){
            $(this).find("#seoul").addClass(".on").stop().fadeIn(500);
        }).mouseout(function(){
            $(this).find('#seoul').stop().fadeOut(500);
        })
        
        
        


});
