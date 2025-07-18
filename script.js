
let getbars = document.getElementById("bars");
let getNavlist = document.getElementById("nav-list");

getbars.addEventListener("click", () => {
  getNavlist.classList.toggle("show");
});


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

// FAST-FOOD-ACCORDION 

 const items = document.querySelectorAll(".accordion-item");

        items.forEach(item => {
            const header = item.querySelector(".accordion-header");
            header.addEventListener("click", () => {
                item.classList.toggle("active");
            });
        });
