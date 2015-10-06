

$('#chord').draggable({ 
	axis: "y", 
	revert: true,
	drag: function() {

		if($('body').hasClass('lightsOut') === false) {
			setTimeout(function() {
				$('body').addClass("lightsOut");
			}, 1000);
			
		} else {
			setTimeout(function() {
				$('body').removeClass("lightsOut");
			}, 1000);
		}
		
	}

});
