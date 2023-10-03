gsap.registerPlugin(ScrollTrigger);

//header section
gsap.fromTo(
  ".logo",
  { y: -100, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.5 }
);
gsap.fromTo(
  "#burger-menu",
  { y: -100, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.5 }
);

//hero section
var tlHero = gsap.timeline();

tlHero.fromTo(
  ".hero-heading",
  { x: -100, opacity: 0 },
  { duration: 1, x: 0, opacity: 1 }
);
tlHero.fromTo(".hero-text", { opacity: 0 }, { duration: 0.5, opacity: 1 });
tlHero.fromTo(".hero-btn", { opacity: 0 }, { duration: 0.5, opacity: 1 });
//status bar

var tlStatus = gsap.timeline({
  scrollTrigger: {
    trigger: ".why-choose-section",
    start: "top center",
    end: "bottom center",
    scrub: false,
    markers: false,
  },
});
tlStatus.fromTo(
  ".status",
  { y: 100, opacity: 0 },
  { y: 0, opacity: 1, duration: 1 }
);
//side images
var tlOne = gsap.timeline({
  scrollTrigger: {
    trigger: ".one",
    start: "top 80%",
    end: "bottom center",
    scrub: false,
    markers: false,
  },
});
tlOne.fromTo(
  ".one",
  { x: -200, opacity: 0 },
  { x: 0, opacity: 1, duration: 1 }
);
var tlTwo = gsap.timeline({
  scrollTrigger: {
    trigger: ".two",
    start: "top 80%",
    end: "bottom center",
    scrub: false,
    markers: false,
  },
});
var tlThree = gsap.timeline({
  scrollTrigger: {
    trigger: ".three",
    start: "top 90%",
    end: "bottom center",
    scrub: false,
    markers: false,
  },
});
tlTwo.fromTo(".two", { x: 200, opacity: 0 }, { x: 0, opacity: 1, duration: 1 });
tlThree.fromTo(
  ".three",
  { x: 200, opacity: 0 },
  { x: 0, opacity: 1, duration: 1 }
);
//pushable buttons
gsap.fromTo(".about-btn", { opacity: 0 }, { duration: 1, opacity: 1 });
gsap.fromTo(".signup-btn", { opacity: 0 }, { duration: 1, opacity: 1 });
//docs
var tlDocs = gsap.timeline({
  scrollTrigger: {
    trigger: ".docs",
    start: "top 90%",
    end: "bottom center",
    scrub: false,
    markers: false,
  },
});
tlDocs.fromTo(
  ".d1",
  {
    x: -100,
    opacity: 0,
  },
  { x: 0, opacity: 1, duration: 0.5 }
);
tlDocs.fromTo(
  ".d2",
  {
    x: 100,
    opacity: 0,
  },
  { x: 0, opacity: 1 }
);
tlDocs.fromTo(
  ".d3",
  {
    x: -100,
    opacity: 0,
  },
  { x: 0, opacity: 1 }
);
tlDocs.fromTo(
  ".d4",
  {
    x: 100,
    opacity: 0,
  },
  { x: 0, opacity: 1 }
);
//banner
var tlBanner = gsap.timeline({
  scrollTrigger: {
    trigger: ".banner",
    start: "top 80%",
    end: "bottom center",
    scrub: false,
    markers: false,
  },
});
tlBanner.fromTo(
  ".bannerh1",
  {
    y: -100,
    opacity: 0,
  },
  { y: 0, opacity: 1 }
);
tlBanner.fromTo(".banner-btn", { opacity: 0 }, { duration: 0.5, opacity: 1 });
