gsap.registerPlugin(ScrollTrigger);

// Seventh Section
const sevenSection = gsap.timeline({
  scrollTrigger: {
    trigger: ".sec07",
    start: "-=500",
    end: "bottom top",
    scrub: 3,
  },
});

sevenSection
  .fromTo(
    ".halfCircle > img",
    { rotate: "360deg" },
    { rotate: "0deg", duration: 4 }
  )
  .fromTo(".since", { y: 0 }, { y: 20, duration: 4 }, "<")
  .fromTo(".marketing", { y: 0 }, { y: -20, duration: 4 }, "<");
