const secondHand = document.getElementById("second-hand");
const minuteHand = document.getElementById("minute-hand");
const hourHand = document.getElementById("hour-hand");

function clockTick() {
    const date = new Date();
    const seconds = date.getSeconds() / 60;
    const minutes = (seconds + date.getMinutes()) / 60;
    const hours = (minutes + date.getHours()) / 12;

    rotateClockHand(secondHand, seconds);
    rotateClockHand(minuteHand, minutes);
    rotateClockHand(hourHand, hours);
}

function rotateClockHand(element, rotation) {
    element.style.setProperty('--rotate', rotation * 360);
}

setInterval(clockTick, 1000);



const preLoader = document.querySelector('.preloader')

const mininumDisplayDuration = 2000; 

let pageLoaded = false;
let minimumTimePassed = false;

window.addEventListener('load', function() {
    console.log("window.onload event fired");
    pageLoaded = true
    checkAndHidePreloader();
});

setTimeout(function() {
    console.log("Minimum display time passed.")

    minimumTimePassed = true
    checkAndHidePreloader();
    
},mininumDisplayDuration);

function checkAndHidePreloader() {
    if (pageLoaded && minimumTimePassed) {
        console.log("Both condition met: Starting preloader fade-out.")

        preLoader.classList.add('hidden')
    }

    
}

preLoader.addEventListener('transitionend', function() {
        console.log("Preloader fade-out transition ended. Removing preloader.")
        preLoader.remove();
        document.body.style.overflow = 'auto'
}, {once:true})
