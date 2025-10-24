let elementsArray = document.getElementsByClassName("with-fadein-animation");
window.addEventListener('scroll', fadeIn, {passive: true} );

function fadeIn() {
    console.log("Fade!")
    for (let i = 0; i < elementsArray.length; i++) {
        var elem = elementsArray[i]
        var distInView = elem.getBoundingClientRect().top - window.innerHeight + 20;
        if (distInView < 0) {
            elem.classList.add("inView");
        } else {
            elem.classList.remove("inView");
        }
    }
}

function initialFadeInAndRetry() {
    fadeIn();
    setTimeout(fadeIn, 50);
}

initialFadeInAndRetry();