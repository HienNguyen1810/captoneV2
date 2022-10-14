$(document).ready(function () {
	$(".popup-with-move-anim").magnificPopup({
		type: "inline",

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: "auto",

		closeBtnInside: true,
		preloader: false,

		midClick: true,
		removalDelay: 300,
		mainClass: "my-mfp-slide-bottom",
	});
	$(".slider").slick({
		dots: true,
		infinite: true,
		speed: 500,
		fade: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		cssEase: "linear",
		arrows: false,
		autoplaySpeed: 2000,
	});
	$(".slider__testimonial").slick({
		dots: true,
		speed: 500,
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		arrows: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: true,
					arrows: false,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
				},
			},
		],
	});

	const modeBtn = $(".header__mode");
	const moon = $(".mode__moon");
	const sun = $(".mode__sun");
	const header = $(".header__container");
	const dropdown = $(".dropdown");
	const dropdownMenu = $(".dropdown__menu");
	const navList = $(".nav__list");
	const hamburger = $(".hamburger-menu-container");

	function darkLightMode() {
		header.toggleClass("header__dark");
		$(document.body).toggleClass("dark__light");
		if ($(document.body).hasClass("dark__light")) {
			moon.css("display", "none");
			sun.css("display", "block");
		} else {
			moon.css("display", "block");
			sun.css("display", "none");
		}
	}

	modeBtn.click(darkLightMode);

	hamburger.click(function () {
		hamburger.toggleClass("show-nav");
		if (hamburger.hasClass("show-nav")) {
			if (dropdownMenu.hasClass("show")) {
				navList.css("height", "0px");
				dropdownMenu.css("position", "initial");
			} else {
				navList.css("height", "216px");
				dropdownMenu.css("position", "absolute");
			}
		} else {
			navList.css("height", "0px");
			dropdownMenu.css("position", "absolute");
		}
	});

	dropdown.click(function (e) {
		e.stopPropagation();
		dropdownMenu.toggleClass("show");
		if ($(document).width() > 1120) {
			navList.css("height", "");
			dropdownMenu.css("position", "absolute");
			return;
		}

		if (dropdownMenu.hasClass("show")) {
			navList.css("height", "auto");
			dropdownMenu.css("position", "initial");
		} else {
			navList.css("height", "216px");
			dropdownMenu.css("position", "absolute");
		}
	});

	$(document.body).click(function () {
		if (dropdownMenu && dropdownMenu.hasClass("show")) {
			dropdownMenu.removeClass("show");
		}
	});

	const backTop = $("#move_top");

	$(window).scroll(function () {
		backTop.css("display", $("html").scrollTop() > 20 ? "block" : "none");
	});

	backTop.click(function () {
		window.scrollTo(0, 0);
	});

	const counterUp = $(".count-number");
	if (counterUp.length > 0) counterUp.counterUp({ delay: 10, time: 1000 });
});
