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
document.getElementById('low').addEventListener('click',
function(){
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	});