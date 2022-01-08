let AnimationDuration = 30; // seconds

function TimeRemained() {
    if (AnimationDuration > 0) {
        AnimationDuration--;
        document.getElementById("time").innerHTML = AnimationDuration;
        setTimeout(TimeRemained, 1000);
    } else {
        clearInterval(TimeRemained);
        console.log("30 second is finished");
    }
}

TimeRemained();