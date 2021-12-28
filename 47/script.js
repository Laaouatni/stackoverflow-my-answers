let toogler = document.querySelector('.toggler');
let toogled = document.querySelector('.toggled');

function toggled() {
    toogler.addEventListener('click', function() {
        toogled.classList.toggle('visible');
        console.log('clicked');
    });
}
toggled();


/* function toggled() {
        document.getElementById('toggler').addEventListener('click', function() {
            document.getElementById("toggled").style.display = 'block';
        });
    }
    toggled() */