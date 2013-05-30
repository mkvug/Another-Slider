(function($) {

	var interval;
	var amount;
	var i;
	var timer;

	// Set Slider Height
	sliderHeight();

	// Set up active, previous, and next classes
	setSlides(1);

	// Make Slider responsive
	$(window).resize(function() {
		sliderHeight();
	});

	function init() {
		// hiding previous image and showing next
		i++

		if (i >= amount+1) i = 1;
		
		// Set the active, previous, and next slides
		setSlides(i);
		
		// Update counter
		if ($('.counter').length != 0) updateCounter(i);

		// loop
		timer = setTimeout(init, interval);
	}

	$.fn.anotherSlider = function( options ) {
		var settings = $.extend({
            counter: true,
            speed: null,
            delay: 5000
        }, options );
	
		amount = $('.slider').children('.slide').length;
		i = 1;
		interval = settings.delay;

		// Create counter
		if (settings.counter==true) {
			createCounter();
			$('.counter li').on('click',function() {
				clearTimeout(timer);
				i = $(this).data('slide');
				setSlides(i);
				updateCounter(i);
				timer = setTimeout(init, interval);
			});
		}

		// Set animation speed
		if (settings.speed!=null) setAnimation(settings.speed);

		timer = setTimeout(init, interval);
	};

} (jQuery));

// Set the height of the slider element based on the height of the slides
function sliderHeight() {
	var h = $('.slider .slide img').height();
	$('.slider, .slide').height(h);
}

// Set the active, previous, and next slides based on variable 'i'
function setSlides(i) {
	var s = $('.slider').children('.slide').length;

	$('.slide').removeClass('active');
	$('.slide').removeClass('next');
	$('.slide').removeClass('prev');

	if (s >= 3) {
		if (i==1) {
			$('.slide:nth-child(1)').addClass('active');
			$('.slide:nth-child('+(i+1)+')').addClass('next');
			$('.slide:nth-child('+s+')').addClass('prev');
		} else if (i==s) {
			$('.slide:nth-child('+i+')').addClass('active');
			$('.slide:nth-child(1)').addClass('next');
			$('.slide:nth-child('+(i-1)+')').addClass('prev');
		} else {
			$('.slide:nth-child('+i+')').addClass('active');
			$('.slide:nth-child('+(i+1)+')').addClass('next');
			$('.slide:nth-child('+(i-1)+')').addClass('prev');
		}
	}
}

// Set speed of animation
function setAnimation(s) {
	var slideSpeed = s;
	var captionSpeed = 4/3*s;
	$('.slider .slide').css({
		'-webkit-transition': 'left '+slideSpeed+'s ease',
		'-moz-transition': 'left '+slideSpeed+'s ease',
		'-o-transition': 'left '+slideSpeed+'s ease',
		'transition': 'left '+slideSpeed+'s ease'
	});
	$('.slider .slide .caption').css({
		'-webkit-transition': 'margin-left '+captionSpeed+'s ease',
		'-moz-transition': 'margin-left '+captionSpeed+'s ease',
		'-o-transition': 'margin-left '+captionSpeed+'s ease',
		'transition': 'margin-left '+captionSpeed+'s ease'
	});
}

// Create a counter
function createCounter() {
	var counter = '<ul class="counter">';
	
	$('.slide').each(function(i) {
		counter += '<li data-slide="'+(i+1)+'">'+(i+1)+'</li>';
	});

	counter += '</ul>';

	$('.slider').append(counter);
}

// Update counter based on current slide
function updateCounter(i) {
	$('.counter li').removeClass('active');
	$('.counter li[data-slide="'+i+'"]').addClass('active');
}
