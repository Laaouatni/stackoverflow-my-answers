let unfilledAds = document.querySelectorAll(`.adsbygoogle[data-ad-status="unfilled"]`);
let successAds = document.querySelectorAll(`.adsbygoogle[data-ad-status="success"]`);;

/* not success */
unfilledAds.forEach((adElement) => {
    /* your logic */
    console.log(`❌ this Ad is not filled`, adElement);
});

/* success */
successAds.forEach((adElement) => {
    console.log(`✅ this ad is visible to the user`, adElement);
});