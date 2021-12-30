let links = document.querySelectorAll(".nav-link");

const checkActive = () => {
    let active = document.querySelector(".active");
    if (active) {
        console.log(active);
        active.classList.remove("active");
    }
};

links.forEach((link) => {
    link.addEventListener("click", () => {
        checkActive();
        link.classList.add("active");
    });
});