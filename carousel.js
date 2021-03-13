
$(document).ready(function(){
	$('#carouselExampleControls').carousel();
	$('#carouselExampleControls-2"').carousel();
})

$(document).ready(function(){
	$('#carouselExampleControls, #carouselExampleControls-2').carousel();
})

$(document).ready(function(){
	$('#carouselExampleControls').carousel({
		interval: 2000,
		keyboard: false,
		pause: hover
	});
})
