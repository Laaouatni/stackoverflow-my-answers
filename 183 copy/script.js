let navItems = document.querySelectorAll(".nav-item");
let sections = document.querySelectorAll("#container > *");

// adding a css variable that count how many items there is, to make the logic.
document.body.style.setProperty("--total-nav-items", `${navItems.length}`);

navItems.forEach((item, index) => {
	item.addEventListener("click", () => {
		// changing a css variable, and all the logic is in CSS
		document.body.style.setProperty("--index", `${index}`);
		toogleActive();
		disactivateScroll();

		function toogleActive() {
			// for setting opacity low to other not clicked icons
			navItems.forEach((itemWithClass) => {
				itemWithClass.classList.remove("active");
			});

			// making visible the active clicked item
			item.classList.add("active");
		}

		function disactivateScroll() {
			let navHeight = document.querySelector("nav").offsetHeight;
			let minHeightSection = window.innerHeight - (navHeight * 2);

			if(sections[index].offsetHeight > minHeightSection) {
				document.body.style.overflowY = "auto";
				sections[index].style.paddingRight = "2rem";
			} else {
				document.body.style.overflowY = "hidden";
				sections[index].style.paddingRight = "";
			}
		}

	});
});