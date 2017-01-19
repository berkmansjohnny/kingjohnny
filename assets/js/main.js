;(function () {

	'use strict';

	// iPad and iPod detection
	var isiPad = function(){
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
			(navigator.platform.indexOf("iPhone") != -1) ||
			(navigator.platform.indexOf("iPod") != -1)
	    );
	};

	// Parallax
	var parallax = function() {
		$(window).stellar();
	};

	// Dribbble
	$.jribbble.setToken('4655f9e2640560e7e2fc7b6672d918eb4119bb496d6cf75dfce01ed178fe7738');
	$.jribbble.users('kingjohnny').shots({
				'per_page': 3,
				'sort': 'views'
			}).then(function(res) {
				var html = [];
				res.forEach(function(shot) {
					html.push('<div class="card inset-s column-4 shots--shot">');
					html.push('<div class="king-blog">');
					html.push('<a href="' + shot.html_url + '" target="_blank">');
					html.push('<img class="img-responsive" src="' + shot.images.normal + '">');
					html.push('</a></div></div>');
				});

				$('.shots').html(html.join(''));
			});

	// Animations

	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated') ) {

				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							el.addClass('fadeInUp animated');
							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});

				}, 100);

			}

		} , { offset: '85%' } );
	};


	// Document on load.
	$(function(){
		parallax();
		contentWayPoint();
	});


}());
