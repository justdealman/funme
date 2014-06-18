$(window).on('scroll', function(){
	if ( $(window).scrollTop() > $('.header').height() ) {
		$('.menu').addClass('fixed');
		$('.header').css({'margin-bottom': '57px'});
		$('.header .basket').addClass('fixed');
		$('.header .basket').css({'position': 'fixed', 'right': '50%', 'padding': '7px 0 1px', 'margin': '0 -480px 0 0'});
		$('.menu ul li').animate({'margin-left': '2px'}, {queue: false}, 750);
		$('.menu ul').animate({'padding-left': '62px'}, {queue: false}, 750);
		$('.menu .logo').animate({'left': '50%', 'margin-left': '-480px'}, {queue: false}, 750);
	}
	else {
		$('.menu').removeClass('fixed');
		$('.header').css({'margin-bottom': '0'});
		$('.header .basket').removeClass('fixed');
		$('.header .basket').css({'position': 'absolute', 'right': '0', 'padding': '66px 0 21px', 'margin': '0'});
		$('.menu ul li').animate({'margin-left': '39px'}, {queue: false}, 750);
		$('.menu ul').animate({'padding-left': '3px'}, {queue: false}, 750);
		$('.menu .logo').animate({'left': '0', 'margin-left': '-39px'}, {queue: false}, 750);
	}
});
function steps() {
	$('.steps ul li img').hide();
	$('.steps ul li img').css({'top': - ($(window).height()-62) + 'px'});
	$(window).scroll(function() {
		if ( $(window).scrollTop() > $('.steps').position().top - $(window).height() + 292 ) {
			$('.steps ul li img').show();
			$('.steps ul li:nth-child(1) img').animate({'top': '0'}, 750, 'easeOutQuart');
			$('.steps ul li:nth-child(2) img').delay(250).animate({'top': '0'}, 750, 'easeOutQuart');
			$('.steps ul li:nth-child(3) img').delay(500).animate({'top': '0'}, 750, 'easeOutQuart');
		}
	});
}
function process() {
	$('.process ul li img').hide();
	$('.process ul li img').css({'top': - ($(window).height()-106) + 'px'});
	$(window).scroll(function() {
		if ( $(window).scrollTop() > $('.process').position().top - $(window).height() + 336 ) {
			$('.process ul li img').show();
			$('.process ul li:nth-child(1) img').animate({'top': '0'}, 750, 'easeOutQuart');
			$('.process ul li:nth-child(2) img').delay(250).animate({'top': '0'}, 750, 'easeOutQuart');
			$('.process ul li:nth-child(3) img').delay(500).animate({'top': '0'}, 750, 'easeOutQuart');
			$('.process ul li:nth-child(4) img').delay(750).animate({'top': '0'}, 750, 'easeOutQuart');
		}
	});
}
function reasons() {
	$('.reasons .float').hide();
	$('.reasons .float').css({'margin-top': - ($(window).height()-300+$('.reasons .float').height()) + 'px'});
	$(window).scroll(function() {
		if ( $(window).scrollTop() > $('.reasons').position().top - $(window).height() + 300 ) {
			$('.reasons .float').show();
			$('.reasons .float').animate({'margin-top': '-87px'}, 1000, 'easeOutQuart');
		}
	});
}
$(document).ready(function() {
	reasons();
	process();
	steps();
	$('.slider > div').slides({
		generatePagination: false,
		generateNextPrev: true,
		container: 'container',
		effect: 'fade',
		fadeSpeed: 250,
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
	$('a.zoom').fancybox();
	$('.modal.call').each(function() {
		$(this).css({'margin-top': -$(this).innerHeight()/2+'px'});
	});
	$('.modal.fastorder').each(function() {
		$(this).css({'margin-top': -$(this).innerHeight()/2+'px'});
	});
	$('.modal').append('<span class="close"></span>');
	var bh = 0;
	$('.header .call button').bind('click', function() {
		$('.modal.call, .fade').fadeIn(250);
		bh = $('body').scrollTop();
		$('body').css({'position': 'fixed', 'top': -bh+'px', 'overflow-y': 'scroll'});
		return false;
	});
	$('.catalog > div > div .fast').bind('click', function() {
		$('.modal.fastorder, .fade').fadeIn(250);
		bh = $('body').scrollTop();
		$('body').css({'position': 'fixed', 'top': -bh+'px', 'overflow-y': 'scroll'});
		return false;
	});
	$('.modal .close').bind('click', function() {
		$(this).parent().fadeOut(250);
		$('.fade').fadeOut(250);
		$('body').css({'position': 'static', 'top': '0', 'overflow-y': 'auto'});
		$('body').scrollTop(bh);
		return false;
	});
	$('.fade').bind('click', function() {
		$(this).fadeOut(250);
		$('.modal').fadeOut(250);
		$('body').css({'position': 'static', 'top': '0', 'overflow-y': 'auto'});
		$('body').scrollTop(bh);
		return false;
	});
	$('input, textarea').each(function () {
		$(this).data('holder',$(this).attr('placeholder'));
		$(this).focusin(function(){
			$(this).attr('placeholder','');
		});
		$(this).focusout(function(){
			$(this).attr('placeholder',$(this).data('holder'));
		});
	});
	var color;
	$('.modal.fastorder .options div .color li').bind('click', function() {
		$(this).addClass('active').siblings().removeClass('active');
		color = $(this).attr('data-color');
		console.log('Выбран цвет: '+color);
		return false;
	});
	var size;
	$('.modal.fastorder .options div .size li').bind('click', function() {
		$(this).addClass('active').siblings().removeClass('active');
		size = $(this).attr('data-size');
		console.log('Выбран размер: '+size);
		return false;
	});
	var gift;
	$('.modal.fastorder .gift ul li').bind('click', function() {
		$(this).addClass('active').siblings().removeClass('active');
		gift = $(this).attr('data-gift');
		console.log('Выбран подарок: '+gift);
		return false;
	});
	$('.fastorder .pictures').slides({
		generatePagination: false,
		generateNextPrev: true,
		container: 'container',
		effect: 'fade',
		fadeSpeed: 250,
		play: 10000,
		pause: 2500
	});
	$('.countdown.num1').countdown({ until: new Date(2014, 7-1, 1)}); 
	$('.countdown.num2').countdown({ until: new Date(2014, 8-1, 1)}); 
});