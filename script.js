let page = -1;
let pages = document.getElementsByClassName("step-box");
next_page();

function next_page(){
	if(page == pages.length-1){
		alert("Thank you for yoir choise!");
		return;
	}
	page = (page + 1) % pages.length;
	for(let item of pages){
		item.style.display = "none";
	}
	pages[page].style.display = "";
}

function prev_page(){
	if(page != 0){
		page--;
		for(let item of pages){
			item.style.display = "none";
		}
		pages[page].style.display = "";
	}
}