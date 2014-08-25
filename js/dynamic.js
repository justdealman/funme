function fixedmenu() {
	$('.menu').addClass('fixed');
	$('.header').css({'margin-bottom': '57px'});
	$('.header .basket').addClass('fixed');
	$('.header .basket').css({'position': 'fixed', 'right': '50%', 'padding': '7px 0 1px', 'margin': '0 -480px 0 0'});
	$('.menu ul li').animate({'margin-left': '2px'}, {queue: false}, 750);
	$('.menu ul').animate({'padding-left': '62px'}, {queue: false}, 750);
	$('.menu .logo').animate({'left': '50%', 'margin-left': '-480px'}, {queue: false}, 750);
}
function staticmenu() {
	$('.menu').removeClass('fixed');
	$('.header').css({'margin-bottom': '0'});
	$('.header .basket').removeClass('fixed');
	$('.header .basket').css({'position': 'absolute', 'right': '0', 'padding': '66px 0 21px', 'margin': '0'});
	$('.menu ul li').animate({'margin-left': '39px'}, {queue: false}, 750);
	$('.menu ul').animate({'padding-left': '3px'}, {queue: false}, 750);
	$('.menu .logo').animate({'left': '0', 'margin-left': '-39px'}, {queue: false}, 750);
}
$(window).on('scroll', function(){
	if ( $(window).scrollTop() > $('.header').height() ) {
		fixedmenu();
	}
	else {
		staticmenu();
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
function foureasons() {
	$('.foureasons ul li img').hide();
	$('.foureasons ul li img').css({'top': - ($(window).height()-106) + 'px'});
	$(window).scroll(function() {
		if ( $(window).scrollTop() > $('.foureasons').position().top - $(window).height() + 336 ) {
			$('.foureasons ul li img').show();
			$('.foureasons ul li:nth-child(1) img').animate({'top': '0'}, 750, 'easeOutQuart');
			$('.foureasons ul li:nth-child(2) img').delay(250).animate({'top': '0'}, 750, 'easeOutQuart');
			$('.foureasons ul li:nth-child(3) img').delay(500).animate({'top': '0'}, 750, 'easeOutQuart');
			$('.foureasons ul li:nth-child(4) img').delay(750).animate({'top': '0'}, 750, 'easeOutQuart');
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
	if ( $('.reasons .float').length > 0 ) {
		reasons();
	}
	if ( $('.process').length > 0 ) {
		process();
	}
	if ( $('.foureasons').length > 0 ) {
		foureasons();
	}
	if ( $('.steps').length > 0 ) {
		steps();
	}
	$('.slider > div').slides({
		generatePagination: false,
		generateNextPrev: true,
		container: 'container',
		effect: 'fade',
		fadeSpeed: 250,
		play: 0,
		pause: 2500,
		animationComplete: function() {
			$('map[name="area"] area').attr('href', $('.slider .slides_control div:visible').attr('data-href'));
        }
	});
	$('map[name="area"] area').attr('href', $('.slider .slides_control div:first-child').attr('data-href'));
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
	$('.events h3, .process h3, .delivery h3, .catalog h2, .foureasons h3').each(function() {
		$(this).append('<em class="before" style="width:'+(960-$(this).find('span').width()-72)/2+'px">');
		$(this).append('<em class="after" style="width:'+(960-$(this).find('span').width()-72)/2+'px">');
	});
	$('a.zoom').fancybox();
	$('.modal').each(function() {
		$(this).css({'margin-top': -$(this).innerHeight()/2+'px'});
	});
	$('.modal').append('<span class="close"></span>');
	var bh = 0;
	$('.header .call button').bind('click', function() {
		$('.modal.call, .fade').fadeIn(250);
		bh = $(window).scrollTop();
		$('body').css({'position': 'fixed', 'top': -bh+'px', 'overflow-y': 'scroll'});
		return false;
	});
	$('.catalog > div > div .fast').bind('click', function() {
		$('.modal.fastorder, .fade').fadeIn(250);
		bh = $(window).scrollTop();
		console.log(bh);
		$('body').css({'position': 'fixed', 'top': -bh+'px', 'overflow-y': 'scroll'});
		if ( $('.modal.fastorder').outerHeight() > $(window).height() ) {
			$('.modal.fastorder').css({
				'position': 'relative',
				'left': 'auto',
				'top': 'auto',
				'margin': '0 auto'
			});
		}
		else {
			$('.modal.fastorder').css({
				'position': 'fixed',
				'left': '50%',
				'top': '50%',
				'margin': -$('.modal.fastorder').outerHeight()/2+'px 0 0 -480px'
			});
		}
		$('.modal.fastorder .options div .size li').each(function() {
			if ( $(this).offset().left+$(this).children('div').outerWidth() > $('.fastorder').offset().left+$('.fastorder').outerWidth() ) {
				$(this).children('div').css({'left': $('.fastorder').offset().left+$('.fastorder').outerWidth()-($(this).offset().left+$(this).children('div').outerWidth())-10+'px'});
			}
		});
		return false;
	});
	$('.modal .close').bind('click', function() {
		$(this).parent().fadeOut(250);
		$('.fade').fadeOut(250);
		$('body').css({'position': 'static', 'top': '0', 'overflow-y': 'auto'});
		$(window).scrollTop(bh);
		return false;
	});
	$('.fade').bind('click', function() {
		$(this).fadeOut(250);
		$('.modal').fadeOut(250);
		$('body').css({'position': 'static', 'top': '0', 'overflow-y': 'auto'});
		$(window).scrollTop(bh);
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
	$('.options div .color li').bind('click', function() {
		$(this).addClass('active').siblings().removeClass('active');
		color = $(this).attr('data-color');
		console.log('Выбран цвет: '+color);
		return false;
	});
	var size;
	$('.options div .size li').bind('click', function() {
		$(this).addClass('active').siblings().removeClass('active');
		size = $(this).attr('data-size');
		console.log('Выбран размер: '+size);
		return false;
	});
	var gift;
	$('.gift ul li').bind('click', function() {
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
	$('.countdown.num1').countdown({ until: new Date(2014, 9-1, 1)}); 
	$('.countdown.num2').countdown({ until: new Date(2014, 10-1, 1)});
	if ( $('.catalog').next('.reviews').length > 0 ) {
		$('.catalog').addClass('shadow');
	}
	if ( $('.reviews').next('.footer').length > 0 ) {
		$('.reviews > div').css({'background': '#ffffff'});
		$('.reviews > div > div').css({'padding-bottom': '42px'});
	}
	$('.minus').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.plus').click(function () {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});
	$('select').selectbox();
	$('.mainbasket > div > div button').bind('click', function() {
		$('.fade, .modal.payment').fadeIn(250);
		bh = $(window).scrollTop();
		$('body').css({'position': 'fixed', 'top': -bh+'px', 'overflow-y': 'scroll'});
		return false;
	});
	$('.modal.payment > div > div button').bind('click', function() {
		$('.modal.payment').fadeOut(250);
		$('.modal.message').fadeIn(250);
		return false;
	});
	$('.modal.message > div .back').bind('click', function() {
		$('.modal.message').fadeOut(250);
		$('.modal.payment').fadeIn(250);
		return false;
	});
	$('.pages ul li').append('<span>-</span>');
	$('.pages ul li.active').next().find('span').hide();
	$('.pages > div').each(function() {
		$(this).append('<em class="before" style="width:'+(960-$(this).find('div').width()-46)/2+'px">');
		$(this).append('<em class="after" style="width:'+(960-$(this).find('div').width()-46)/2+'px">');
	});
	if ( $('.reviews').next('.process').length > 0 ) {
		$('.reviews').css({'margin-bottom': '-5px'});
		$('.process').addClass('after');
	}
	if ( $('.process').next('.delivery').length > 0 ) {
		$('.delivery').addClass('nobg');
	}
	$('.fastordermodal').bind('click', function() {
		$('.modal.orderform.step1, .fade').fadeIn(250);
		bh = $(window).scrollTop();
		$('body').css({'position': 'fixed', 'top': -bh+'px', 'overflow-y': 'scroll'});
		return false;
	});
	$('.orderform.step1 .controls button').bind('click', function() {
		$('.modal.orderform.step1').fadeOut(250);
		$('.modal.orderform.step2').fadeIn(250).delay(1500).fadeOut(250, function() {
			$('.fade').fadeOut(0);
			$('body').css({'position': 'static', 'top': '0', 'overflow-y': 'auto'});
			$(window).scrollTop(bh);
		});
		return false;
	});
	$('.addbasket').bind('click', function() {
		$('.modal.orderform.tobasket, .fade').fadeIn(250);
		bh = $(window).scrollTop();
		$('body').css({'position': 'fixed', 'top': -bh+'px', 'overflow-y': 'scroll'});
		return false;
	});
	$('.modal.orderform.tobasket .controls button').bind('click', function() {
		$('.modal.orderform.tobasket, .fade').fadeOut(250);
		alert('Товар добавлен в корзину');
		$('body').css({'position': 'static', 'top': '0', 'overflow-y': 'auto'});
		$(window).scrollTop(bh);
		return false;
	});
	$('.modal.fastorder .options div .color li:nth-child(4n), .modal.fastorder .options div .size li:nth-child(4n), .modal.fastorder .gift ul li:nth-child(4n), .product .options div .color li:nth-child(4n), .product .options div .size li:nth-child(4n), .product .gift ul li:nth-child(4n)').css({'margin-right': '-3px'});
	$('.countdown-section:nth-child(3) .countdown-amount').css({'color': '#83b5e1'});
	$('.countdown-section:nth-child(4) .countdown-amount').css({'color': '#ffad03'});
	$('.content .description > div:last-child').css({'padding-bottom': '0', 'margin-bottom': '0', 'border-bottom-width': '0'});
});