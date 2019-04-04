document.addEventListener("DOMContentLoaded", function(event){
	let tabsMenuNode = document.getElementsByClassName("tabs")[0];
	let tabsContents = Array.from(document.getElementsByClassName("tab__content"));
	let wholeTabs = [];
	let tabs = Array.from(document.getElementsByClassName("tab"));


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

	connectTabs(tabsMenuNode);

});