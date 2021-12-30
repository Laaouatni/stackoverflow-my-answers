let option = document.querySelectorAll(".option");
let ul = document.querySelectorAll("ul");


console.log("start");

for (var i = 0; i < option.length; i++) {
    option[i].addEventListener("click", function() {

        switch (this.value) {
            case "test":
                ul[0].classList.add("red");
                ul[1].classList.remove("red");
                break;
            case "test1":
                ul[1].classList.add("red");
                ul[0].classList.remove("red");
                break;
            default:
                alert("error");
                break;
        }

    });
}