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
	})
