$(document).ready(function () {

	$('.reviews__slider').slick({
		dots: true,
		arrows: false,
	});

	$('.questions__question').click(function (event) {
		if ($('.questions__body').hasClass('one')) {
			$('.questions__question').not($(this)).removeClass('active');
			$('.questions__answer').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});

})
