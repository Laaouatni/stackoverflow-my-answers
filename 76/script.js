let myInput = document.querySelectorAll('input');

myInput.forEach(input => {
    input.addEventListener('keydown', function() {
        result.innerHTML += "TEXT ";
    });
})