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
    }, {
        "text": "folder",
        "iconName": "fa-folder",
        "color": "blue"
    },
    {
        "text": "folder",
        "iconName": "fa-folder",
        "color": "blue"
    }, 
    {
        "text": "folder",
        "iconName": "fa-folder",
        "color": "blue"
    },
    {
        "text": "folder",
        "iconName": "fa-folder",
        "color": "blue"
    },
    {
        "text": "folder",
        "iconName": "fa-folder",
        "color": "blue"
    },
    {
        "text": "folder",
        "iconName": "fa-folder",
        "color": "blue"
    },
    {
        "text": "folder",
        "iconName": "fa-folder",
        "color": "blue"
    }
];

let iconStylesArray = Object.values({
    outlined: "fa-regular", 
    solid: "fa-solid"
});

let navContainer = document.querySelector("nav");
let parentClass = "icon-div";

iconData.forEach((thisData) => {
    let newIconContainer, newIcon;
    let actualIconName = thisData.iconName;

    createDivContainer(parentClass); 
    createNewIcon(actualIconName); 
    appendChildToNavbar(navContainer); 

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

    addDataAttribute(thisIconDiv);
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
            allIconsDiv.forEach((thisDiv) => {
                let thisSolidIcon = thisDiv.querySelector(".icon");
                
                thisDiv.classList.remove("active");
                makeOutlined(thisSolidIcon);

                function makeOutlined(iconName) {
                    iconName.classList.remove(`${iconStylesArray[1]}`);
                    iconName.classList.add(`${iconStylesArray[0]}`);
                }
            });
    
            iconName.classList.add(`${iconStylesArray[1]}`);
            thisIconDiv.classList.add("active");
            navContainer.style.setProperty("--iconActiveIndex", `${index!=0 ? 2*(index+1)-1 : index+1}`);
            navContainer.style.setProperty("--posXindicator", `${index>2 ? (index-2)*10 : index!=2?1:2}`);
        }
    }

    function addDataAttribute(iconName) {
        let thisTitle = iconData[index].text;
        iconName.setAttribute("data-text", `${thisTitle}`);
    }
});