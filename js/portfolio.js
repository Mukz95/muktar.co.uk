$(document).ready(function($){    
    $('div.filter div').click(function(){ 
        
      $("div.filter div").removeClass("active");
      $(this).addClass("active");        

        var selector = $(this).attr('data-filter'); 
        $(".all-portfolios").isotope({ 
            filter: selector, 
            animationOptions: { 
                duration: 750, 
                easing: 'linear', 
                queue: false, 
            } 
        }); 
      return false; 
    }); 

    $('.modal').modal();

    // start carrousel
   $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: false
 });


 // move next carousel
 $('.moveNextCarousel').click(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.carousel').carousel('next');
 });

 // move prev carousel
 $('.movePrevCarousel').click(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.carousel').carousel('prev');
 });

 $('.links > li').find("a").click(function(e){
    e.preventDefault();
    var section = $(this).attr("href");
    console.log(section)
    $("html, body").animate({
        scrollTop: $(section).offset().top - 100
    });

    
}); 
 

$.fn.slider = function ()
{
	var currentSlide = 1;
	var totalSlides = this.find(".slide").length;
	var container = this.find(".slide_container");
	var slider = this.find('.slider');

	slider.width(totalSlides * 100 + '%');
	slider.find('.slide').width(100 / totalSlides + '%');

	function updateSliderImage()
	{
		container.css("transform", "translateX(-" + (currentSlide - 1) / totalSlides * 100 + "%)");
		container.css("transform", "-webkit-translateX(-" + (currentSlide - 1) / totalSlides * 100 + "%)");
	}

	this.find(".slider-arrow-left").click(function ()
	{
		if (currentSlide == 1)
		{
			currentSlide = totalSlides;
		}
		else
		{
			currentSlide--;
		}

		updateSliderImage();
	});

	this.find(".slider-arrow-right").click(function ()
	{
		if (currentSlide >= totalSlides)
		{
			currentSlide = 1;
		}
		else
		{
			currentSlide++;
		}

		updateSliderImage();
	});

	return this;
};

// Init
$("#slider").slider();


$(".all-portfolios").isotope({
    itemSelector: '.single-portfolio',
    layoutMode: 'fitRows',
});



 /*
 $(".tabz").click(function(){
     $(".tabz").removeClass("bigger-active")
    $(this).addClass("bigger-active")
 })
 */    
});


