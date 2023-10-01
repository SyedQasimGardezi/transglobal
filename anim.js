var tlHeader = gsap.timeline();
var tlHero = gsap.timeline();
var tlStatus = gsap.timeline();
var tlSideimg = gsap.timeline();

tlHeader.fromTo(".cd__main", { opacity: 0 }, { opacity: 1, duration: 0.5 });

tlHero.fromTo(
  ".hero-heading",
  { x: -100, opacity: 0 },
  { duration: 1, x: 0, opacity: 1 }
);
tlHero.fromTo(".hero-text", { opacity: 0 }, { duration: 0.5, opacity: 1 });
tlHero.fromTo(
  ".button-82-pushable",
  { opacity: 0 },
  { duration: 0.5, opacity: 1 }
);

tlStatus.fromTo(
  ".status",
  { scrollTrigger: ".status", y: 100, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.5 }
);
