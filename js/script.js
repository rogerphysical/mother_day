function what_happen() {
	$('html, body').animate({scrollTop: 0}, 1000);
	$('#star').animate({top: 800, right: 280}, 2000);
	$('#star').fadeOut(100);
	$('html, body').animate({scrollTop: $('#cakes').offset().top}, 4000);
	$('#cake').fadeIn(4000);
	$('#star').animate({top: -220, right: 0}, 100);
	$('#star').fadeIn(100);
}