let TextArray = ["the", "dev", "ninja"];
createNavWA();

function createNavWA() {
    let navContainer = document.querySelector("nav");
    let bodyElement = document.querySelector("body");
    
    bodyElement.style.setProperty("--total-nav-items", `${TextArray.length}`);
    
    createUiWithForLoop();
    makeDefaultActiveItem();
    
    function createUiWithForLoop() {
        TextArray.forEach((thisText, index) => {
            let thisNavItem;
            createNavItem();
            appendChildToNav();
            
            thisNavItem.addEventListener("click", changeActiveIndex);
        
            function changeActiveIndex() {
                bodyElement.style.setProperty("--active-index", `${index}`);
                addActiveClassToItem();
        
                function addActiveClassToItem() {
                    let allNavItems = document.querySelectorAll(".nav-item");
        
                    allNavItems.forEach((item) => {
                        item.classList.remove("active");
                    });
        
                    thisNavItem.classList.add("active");
                }
            }
        
            function createNavItem() {
                thisNavItem = document.createElement("div");
                thisNavItem.classList.add("nav-item");
                thisNavItem.textContent = `${thisText}`;
            }
        
            function appendChildToNav() {
                navContainer.appendChild(thisNavItem);
            }
        });
    }
    
    function makeDefaultActiveItem() {
        let allNavItems = document.querySelectorAll(".nav-item");
        let indexActiveNow = getComputedStyle(bodyElement).getPropertyValue("--active-index").replace(" ", "");
    
        allNavItems[indexActiveNow].classList.add("active");
    }
}
