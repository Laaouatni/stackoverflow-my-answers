let navItems = document.querySelectorAll(".nav-item");

document.body.style.setProperty("--total-nav-items", `${navItems.length}`);

navItems.forEach((item, index) => {
	item.addEventListener("click", () => {
    document.body.style.setProperty("--index", `${index}`);
	});
});
