let bodyElement = document.querySelector("body");
let navItems = document.querySelectorAll(".nav-item");

bodyElement.style.setProperty("--total-nav-items", `${navItems.length}`);

navItems.forEach((item, index) => {
	item.addEventListener("click", () => {
		bodyElement.style.setProperty("--index", `${index}`);
	});
});
