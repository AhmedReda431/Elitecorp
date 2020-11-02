$(document).ready(function(){
    'use strict';
   $('.featured-works ul li ').on('click',function() {
       $(this).addClass('active').siblings().removeClass('active');
       if ($(this).data('class') === 'all'){
           $('.shuffle-imgs .col-sm').css('opacity',1);
       } else{
           $('.shuffle-imgs .col-sm').css('opacity','.08');
           $($(this).data('class')).parent().css('opcity',1);
       }
   }); 
});


.testimonials .container .carousel-inner .carousel-item img
{
    display: block;
    margin-bottom: 17%;
    margin-left: 44%;
    margin-top: 10%;
}
.testimonials .container .carousel-inner .carousel-item p
{
    margin-top: 44px;
    margin-bottom: -44px;
}
.testimonials .container .carousel-indicators
{
    bottom: -18%;
}
