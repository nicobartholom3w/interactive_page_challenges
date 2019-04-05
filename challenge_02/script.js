document.addEventListener("DOMContentLoaded", function(event){
	let tabsMenuNode = document.getElementsByClassName("tabs")[0];
	let tabsContents = Array.from(document.getElementsByClassName("tab__content"));
	let wholeTabs = [];
	let tabs = Array.from(document.getElementsByClassName("tab"));
	let submitButton = document.getElementsByClassName("submit__button")[0];
	let numInput = document.getElementById("numinput-value").value;

	function connectTabs (node){
		for(let i = 0; i < tabs.length; i++){
			let tab = tabs[i];
			let tabsContent = tabsContents[i];
			let wholeTab = {tabsContent, tab};
			wholeTabs.push(wholeTab);
			tab.addEventListener("click", () => tabClicked(wholeTab));
		}
	}


	function tabClicked (selectedTabObj){
		for(let wholeTab of wholeTabs){
			let selected = wholeTab == selectedTabObj;
			if(selected){
				wholeTab.tab.classList.add("tab-active");
				wholeTab.tabsContent.classList.add("tab__content-active");
			}
			else {
				wholeTab.tab.classList.remove("tab-active");
				wholeTab.tabsContent.classList.remove("tab__content-active");
			}
		}
	}

	function buttonClicked (currentNumInput) {
		if(currentNumInput > 3 || currentNumInput < 1) {
			alert("Index is invalid");
		}
		else {
			// make tabs equal to numbers
			// put tab that equals number into tabClicked()
			for (let tab of tabs){
				let selected = i + 1 == currentNumInput;
				if(selected) {
					tabClicked()
				}
			}
		}
	}

	submitButton.addEventListener("click", () => buttonClicked(numInput));


	connectTabs(tabsMenuNode);

});