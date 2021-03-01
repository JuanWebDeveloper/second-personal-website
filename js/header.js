/*--=====================================================
|-Typewriter Effect                                     |
=======================================================--*/
const typed = new Typed('.typed', {
    strings: [
        'Hello World',
        'my name is Juan',
        'I am a web developer',
        'I am eager to meet you',
        'I hope you contact me soon',
        '¡welcome!'
    ],

	typeSpeed: 50, 
	startDelay: 300, 
    backSpeed: 40,
    smartBackspace: true,
	shuffle: false,
	backDelay: 1600, 
	loop: true, 
	loopCount: false, 
	showCursor: true, 
	cursorChar: '|', 
	contentType: 'html', 

});

/*--=====================================================
|-Navbar Effect                                         |
=======================================================--*/
$(window).scroll(function(){

	if ($(window).scrollTop() >= 20) {

		$('.containerNavbar').addClass('containerNavbar-scroll');

	}else{

		$('.containerNavbar').removeClass('containerNavbar-scroll');

	}

});

/*--=====================================================
|-Navbar Responsive                                      |
=======================================================--*/
$("#bars").click(function(){

	$("#bars").after($(".containerNavbar nav").slideToggle("slow"));

});

