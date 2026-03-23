const TAB_LINK_CLASS="kdg-tab-link";
const TAB_CONTENT_CLASS="kdg-tab-content";

function selectLink(href: string | null | undefined) {
	for (let link of document.querySelectorAll("." + TAB_LINK_CLASS)) {
		if (link.getAttribute("href") === href) {
			link.classList.add("active")
		} else {
			link.classList.remove("active");
		}
	}
}

function selectPane(href: string | null | undefined) {
	let tabId: string;
	if (href?.startsWith("#") && href.length > 1) {
		tabId = href?.substring(1)
	} else {
		console.warn("Tab link needs href attribute starting with #")
		return;
	}
	for (let pane of document.querySelectorAll("." + TAB_CONTENT_CLASS)) {
		if (pane.id === tabId) {
			pane.classList.add("active")
		} else {
			pane.classList.remove("active");
		}
	}
}

function selectTab(e:Event) {
	e.preventDefault();
	const selected = e.target as HTMLElement;
	const href = selected?.getAttribute("href");
	selectLink(href);
	selectPane(href);
}

function init() {
	console.info("Running tab content selector");
	 document.querySelectorAll("." + TAB_LINK_CLASS)
		 .forEach(el => el.addEventListener("click",selectTab));
}

init();

