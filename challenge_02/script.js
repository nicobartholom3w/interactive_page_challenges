document.addEventListener("DOMContentLoaded", function(event){
	let tabsMenuNode = document.getElementsByClassName("tabs")[0];
	let tabsContent = Array.from(document.getElementsByClassName("tab__content"));
	// let 
	let tabs = Array.from(document.getElementsByClassName("tab"));


	function connectTabs (node){
		for(let t of tabs){
			t.addEventListener("click", () => tabClicked(t));
		}
	}


	function tabClicked (selectedTabObj){
		for(let tab of tabs){
			let selected = tab == selectedTabObj;
			if(selected){
				tab.classList.add("tab-active");
				// tab.node.classList.add("tab__content-active");
			}
			else {
				tab.classList.remove("tab-active");
			}
		}
	}

	connectTabs(tabsMenuNode);

});