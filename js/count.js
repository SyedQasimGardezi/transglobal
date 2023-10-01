let valueDisplays = document.querySelectorAll(".status-numbers");
let triggerCount = document.querySelector(".why-choose-section");
let interval = 2000;
const count = () => {
  valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
      startValue += 1;
      valueDisplay.textContent = startValue;
      if (startValue == endValue) {
        clearInterval(counter);
      }
    }, duration);
  });
};

// triggerCount.addEventListener("mouseover", count);
var tlSideimg = gsap.timeline({
  scrollTrigger: {
    trigger: ".why-choose-us",
    start: "top center",
    end: "bottom center",
    scrub: true,
    markers: true,
  },
});

tlHeader.to(".why-choose-section", { count });
