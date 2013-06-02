# Another Slider

Another Slider is a Yahoo Weather App inspired jQuery slider plugin. Unlike many slider plugins Another Slider relies on CSS transitions to animate the between slides.

## Usage

Basic Setup
	
	```html
	<!-- Add CSS inside the head of your document -->
	<link rel="stylesheet" href="css/another-slider.min.css">
	
	<!-- Add Javascripts just before the closing body tag -->
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
	<script src="js/another-slider.min.js"></script>
	<script>
		$(".slider").anotherSlider();
	</script>
	```

HTML

	```html
	<div class="slider">
		<div class="slide">
			<div class="caption">
				<h2><!-- Title --></h2>
				<p><!-- Description --></p>
			</div>
			<img src="images/slide-1.jpg" alt="slide-1" />
		</div>
		<div class="slide">
			<div class="caption">
				<h2><!-- Title --></h2>
				<p><!-- Description --></p>
			</div>
			<img src="images/slide-2.jpg" alt="slide-2" />
		</div>
		<div class="slide">
			<div class="caption">
				<h2><!-- Title --></h2>
				<p><!-- Description --></p>
			</div>
			<img src="images/slide-3.jpg" alt="slide-3" />
		</div>
	</div>
	```

## Options

* **counter** defaults to `true`
	* Boolean value
* **speed** defaults to `null`
	* If speed is null animation speed is 1.5 seconds, else the animation speed is the user defined value. This number is the number of seconds that would be specified using CSS3 transitions
* **delay** defaults to `5000`
	* Length of time between slide transitions (in milliseconds)