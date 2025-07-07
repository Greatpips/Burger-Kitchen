let hrs = document.getElementById("hrs")
let min = document.getElementById("min")
let sec = document.getElementById("sec")

setInterval(()=>{let currenTime = new Date();

hrs.innerHTML = (currenTime.getHours()<10?"0":"") + currenTime.getHours();
min.innerHTML =(currenTime.getMinutes()<10?"0":"") + currenTime.getMinutes();
sec.innerHTML =(currenTime.getSeconds()<10?"0":"") + currenTime.getSeconds();
},1000)




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

