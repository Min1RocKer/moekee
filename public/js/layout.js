//前端业务处理
(function(){
	$('#fullpage').fullpage({
		anchors: ['firstPage', 'secondPage','thirdPage', 'fourthPage', 'slide1' , 'slide2', 'slide3', 'slide4'],

        afterLoad: function(anchorLink,index){
            var loadedSection = $(this);
            //using anchorLink
            if(anchorLink == 'firstPage'){
                $('.banner img').animate({
					top:'50%'
				},1000,'swing');
            }
            if(anchorLink == 'secondPage'){
                $('.jjLogo .jjImg').animate({
					top:'-60px'
				},500,'linear');
            }
        },
        onLeave: function(index, nextIndex, direction){
            //it won't scroll if the destination is the 3rd section
            if(nextIndex == 1){
                $('.jjLogo .jjImg').animate({
					top:'-100px'
				},500,'linear');
            }
            if(nextIndex == 2){
                $('.banner img').animate({
					top:'40%'
				},1000,'swing');
            }
            if(nextIndex == 3){
                $('.jjLogo .jjImg').animate({
					top:'-100px'
				},500,'linear');
            }
        },
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
        	var loadedSlide = $(this);

            //first slide of the second section
            if(anchorLink == 'secondPage' && slideIndex == 0){
                $('.jjLogo .jjImg').animate({
					top:'-60px'
				},500,'linear');
            }

            //second slide of the second section (supposing #secondSlide is the
            //anchor for the second slide
            if(index == 2 && slideIndex == 'secondSlide'){
                alert("Second slide loaded");
            }
        },
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){
        	var leavingSlide = $(this);

            //leaving the first slide of the 2nd Section to the right
            if(index == 2 && slideIndex == 0){
                $('.jjLogo .jjImg').animate({
					top:'-100px'
				},500,'linear');
            }

            //leaving the 3rd slide of the 2nd Section to the left
            if(index == 2 && slideIndex == 2 && direction == 'left'){
                
            }
        }


	});	
	$(document).on('click', '#moveLeft', function(){
  		$.fn.fullpage.moveSlideRight();
	});
	$(document).on('click', '#moveRight', function(){
  		$.fn.fullpage.moveSlideLeft();
	});
    //Slide 自动轮播
    var t;
    function autoPlay(){
        $.fn.fullpage.moveSlideRight();
        t=setTimeout(autoPlay,5000);
    }
    setInterval(autoPlay(),5000);
})()