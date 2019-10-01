;(function () {
	var greeting;
	var time = new Date().getHours();
		if (time < 11) {
				greeting = "Good morning";
		} else if (time < 18) {
				greeting = "Good day";
		} else {
				greeting = "Good evening";
		};
		$('title').append(greeting);
});
