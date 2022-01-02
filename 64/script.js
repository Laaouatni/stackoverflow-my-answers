var review = new Array();
review.push("Text1");
review.push("Text2");
review.push("Text3");

var clientlogo = new Array();
clientlogo.push("");
clientlogo.push("");
clientlogo.push("");

var point = 0;

function changeText() {
    $('.progress-bar').css('width', '0');
    $('.review').fadeOut(500, function() {
        $('.review').fadeIn(500).html(review[point])
    });
    $('.client-logo').fadeOut(500, function() {
        $('.client-logo').fadeIn(500).attr('src', clientlogo[point])
    });
    if (point < (review.length - 1)) {
        point++;
    } else {
        point = 0;
    }
    $(".progress-bar").animate({
        width: "+=100%"
    }, 6500);
}

setInterval(changeText, 7000);
changeText();