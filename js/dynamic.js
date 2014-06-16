/*$(window).scroll(function(){
	if ( $(window).scrollTop() > $('.header').height() ) {
		$('.menu').addClass('fixed');
		$('.header').css({'margin-bottom': '57px'});
		$('.header .basket').addClass('fixed');
		$('.header .basket').stop(true,true).animate({'margin-top': '0'}, 1000);
		$('.menu ul').stop(true,true).animate({'padding-left': '79px'}, 1000);
		$('.menu ul li a').stop(true,true).animate({'padding': '5px 3px 7px 2px'}, 500);
		$('.menu .logo').stop(true,true).animate({'left': '50%', 'margin-left': '-480px'}, 1000);
	}
	else {
		$('.menu').removeClass('fixed');
		$('.header').css({'margin-bottom': '0'});
		$('.header .basket').stop(true,true).animate({'margin-top': '-80px'}, 1000);     
		$('.header .basket').removeClass('fixed');
		$('.menu ul').stop(true,true).animate({'padding-left': '3px'}, 1000);
		$('.menu ul li a').stop(true,true).animate({'padding': '5px 18px 7px 17px'}, 500);
		$('.menu .logo').stop(true,true).animate({'left': '0', 'margin-left': '-39px'}, 1000);
	}
});*/

$(document).ready(function() {

	$('.slider > div').slides({
		generatePagination: false,
		generateNextPrev: true,
		container: 'container',
		effect: 'fade',
		fadeSpeed: 250,
		//slideEasing: 'easeInOutQuad',
		play: 0,
		pause: 2500
	});
	$('.slider .container > div > div div.picture').each(function() {
		var aw = $(this).width();
		var ah = $(this).height();
		var ar = aw/ah;
		var iw = $(this).find('img').width();
		var ih = $(this).find('img').height();
		var ir = iw/ih;
		if ( ar > ir ) {
			var nw = aw;
			var nh = nw/ir;
			var il = 0;
			var it = -(nh-ah)/2;
		}
		else {
			var nh = ah;
			var nw = ah*ir;
			var il = -(nw-aw)/2;
			var it = 0;
		}
		$(this).find('img').css({
			'left': il+'px',
			'top': it+'px',
			'width': nw+'px',
			'height': nh+'px'
		});
	});
	
	$('.catalog > div > div').append('<div class="hover"></div>');
	
	$('.events h3, .process h3, .delivery h3').each(function() {
		$(this).append('<em class="before" style="width:'+(960-$(this).find('span').width()-72)/2+'px">');
		$(this).append('<em class="after" style="width:'+(960-$(this).find('span').width()-72)/2+'px">');
	});

});