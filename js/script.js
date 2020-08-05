window.addEventListener('scroll',
	function(){
		const title = document.querySelector('#title');
		title.classList.toggle("diss", window.scrollY > 80);
		title.removeClass("diss",window.scrollY<60);
	});
window.addEventListener('scroll',
	function(){
		const myHeader = document.querySelector('#myHeader');
		myHeader.classList.toggle("style",window.scrollY > 300);
	});
window.addEventListener('scroll',
	function(){
		const learn = document.querySelector('.learn');
		learn.classList.toggle("margone",window.scrollY > 60);
		learn.removeClass("margone",window.scrollY<40);
	});
window.addEventListener('scroll',
	function(){
		const join = document.querySelector('.join');
		join.classList.toggle("margtwo",window.scrollY > 60);
		join.removeClass("margtwo",window.scrollY < 40);
	});
window.addEventListener('scroll',
	function(){
		const topcontent = document.querySelector('.topcontent');
		topcontent.classList.toggle("transition",window.scrollY > 30)
	})
$(document).ready(function(){
var refreshId;
var restartAnimation = function() {
    clearInterval(refreshId);
    refreshId = setInterval( function() 
    {    
        $('.box').each(function() {
            if ($(this).offset().left < 0) {
                $(this).css("left", "150%");
            } else if ($(this).offset().left > $('#container').width()) {
                $(this).animate({
                    left: '50%'
                }, 500 );
            } else {
                $(this).animate({
                    left: '-150%'
                }, 500 );
            }
        });
    },1000);
}

restartAnimation()


});