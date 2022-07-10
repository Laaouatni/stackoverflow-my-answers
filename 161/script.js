let iconData = [{
        "text": "home",
        "iconName": "fa-building",
        "color": "red"
    }, {
        "text": "file",
        "iconName": "fa-file-code",
        "color": "orange"
    }, {
        "text": "profile",
        "iconName": "fa-user",
        "color": "yellow"
    }
];

let iconStylesArray = Object.values({
    outlined: "fa-regular", 
    solid: "fa-solid"
});

let navContainer = document.querySelector("nav");
let parentClass = "icon-div";

// generating the icon in html
iconData.forEach((thisData) => {
    let newIconContainer, newIcon;
    let actualIconName = thisData.iconName;

    createDivContainer(parentClass); // this class, will be the parent div
    createNewIcon(actualIconName); // this create the icon inside the parent class
    appendChildToNavbar(navContainer); // this add the icon generated to navbar

    function createDivContainer(className) {
        newIconContainer = document.createElement("div");
        newIconContainer.classList.add(className);
    }

    function createNewIcon(iconName) {
        newIcon = document.createElement("i");
        newIcon.classList.add(`${iconName}`);
        newIcon.classList.add(`${iconStylesArray[0]}`);
        newIcon.classList.add(`icon`);
        newIconContainer.appendChild(newIcon);
    }

    function appendChildToNavbar(navName) {
        navName.appendChild(newIconContainer);
    }
});

let allIconsDiv = document.querySelectorAll(`.${parentClass}`);

allIconsDiv.forEach((thisIconDiv, index) => {
    let thisIcon = thisIconDiv.querySelector(".icon");

    addTitleAttribute(thisIconDiv);
    thisIconDiv.addEventListener("click", styleIcon);


    function styleIcon() {
        makeIconSolid(thisIcon);
        changeBgColor();

        function changeBgColor() {
            let thisIconColor = iconData[index].color;
            let bodyElement = document.querySelector("body");
            
            bodyElement.style.setProperty("--bg", `${thisIconColor}`);
        }

        function makeIconSolid(iconName) { 
            iconName.classList.remove(`${iconStylesArray[0]}`);
            iconName.classList.add(`${iconStylesArray[1]}`);
        }
    }

    function addTitleAttribute(iconName) {
        let thisTitle = iconData[index].text;
        iconName.setAttribute("title", `${thisTitle}`);
    }
});