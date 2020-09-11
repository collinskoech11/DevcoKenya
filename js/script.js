window.addEventListener('scroll',
	function(){
		const title = document.querySelector('#title');
		title.classList.toggle("diss", window.scrollY > 80);
		title.removeClass("diss",window.scrollY<60);
	});
window.addEventListener('scroll',
	function(){
		const logoarea = document.querySelector('.logoarea');
		logoarea.classList.toggle("logo",window.scrollY > 80);
	})
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
	});
window.addEventListener('scroll',
	function(){
		const topcontainer = document.querySelector('.topcontainer');
		topcontainer.classList.toggle("trans",window.scrollY > 40);
	});
window.addEventListener('scroll',
	function(){
		const prodcon = document.querySelector('.prodcon');
		prodcon.classList.toggle("tool",window.scrollY > 250);
	});
window.addEventListener('scroll',
	function(){
		const hire = document.querySelector('.hire');
		hire.classList.toggle("exp",window.scrollY > 500);
	});
window.addEventListener('scroll',
	function(){
		const burger = document.querySelector('.burger');
		burger.classList.toggle("top",window.scrollY>60);
		burger.removeClass("top",window.scrollY<40);
	});
window.onload=function(){setTimeout(showPopup,50000)};
	function showPopup(){
		const pop = document.querySelector('.pop');
		pop.classList.toggle("popup");
	};
document.getElementById('close').addEventListener('click',
	function(){
		document.querySelector('.popup').style.display = 'none';
	});
document.getElementById('dev').addEventListener('click',
	function(){
		document.querySelector('.popup').style.display = 'none';
	});
document.getElementById('burger').addEventListener('click',
	function(){
	const sidebar = document.querySelector('.sidebar');
	sidebar.classList.toggle('slide');
	sidebar.removeClass('slide');
});
document.getElementById('burger').addEventListener('click',
	function(){
		const burger = document.querySelector('.burger');
		burger.classList.toggle('trip');
		burger.removeClass('trip');
	});
window.addEventListener("scroll", 
	function() {
		var button = document.querySelector("#low");
		low.classList.toggle("show", window.scrollY > 100);
		});
document.getElementById('low').addEventListener('click',
	function(){
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	});
	document.querySelector('.up').addEventListener('click',
	function(){
		const chatimg = document.querySelector('.up');
		chatimg.classList.toggle('spin');
		chatimg.removeClass('spin');
	});
document.querySelector('.up').addEventListener('click',
	function(){
		const chat = document.querySelector('.chatBox');
		chat.classList.toggle('text');
		chat.removeClass('text');
	})