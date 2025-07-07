// CALCULATOR PROGRAM 

const display = document.getElementById("display")
const buttons = document.querySelectorAll("button");
let justCalculated = false;

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const input = button.textContent;

    if (input === "=") {
      try {
        display.value = eval(display.value);
        justCalculated = true;
      } catch (error) {
        display.value = "Error";
      }
    } else if (input === "C") {
      display.value = "";
    } else {
      if (justCalculated && !isNaN(input)) {
        if (input === "0" && input === "00") {
          display.value = input;
        } else {
          display.value = input;
        }
        justCalculated = false;
      } else {
        if (display.value === "0" || display.value ==="00" && !isNaN(input)) {
          display.value = input;
        } else if (!(display.value === "0" && input === "0" )) {
          display.value += input;
        }
        if (isNaN(input)) justCalculated = false;
      }
    }
  });
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
