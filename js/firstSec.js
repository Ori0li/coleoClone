gsap.registerPlugin(ScrollTrigger);

const firstSection = gsap.timeline({
  scrollTrigger: {
    trigger: ".sec01",
    start: "top top",
    end: "bottom center",
    scrub: 3,
  },
});

firstSection
  .fromTo(".title", { y: 0 }, { y: 750, fontSize: "40px", duration: 2 })
  .fromTo(".title_sub", { opacity: 1 }, { opacity: 0, duration: 2 }, "<")
  .fromTo(".scrollText", { opacity: 1 }, { opacity: 0, duration: 2 }, "<")
  .fromTo(".box", { opacity: 1 }, { opacity: 0, duration: 2 }, "<");
