let page = 0;
let pages = document.getElementsByClassName("step-box");

function next_page(){
	page = (page + 1) % pages.length;
	pages.forEach(function(item, i, arr){
		item.style.display = "none";
	});
	pages[page].style.display = "";
}