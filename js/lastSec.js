gsap.registerPlugin(ScrollTrigger);

const lastSection = gsap.timeline({
  scrollTrigger: {
    trigger: ".sec09",
    start: "top center",
    end: "bottom bottom",
    scrub: 3,
  },
});
300;
lastSection.fromTo(".sec09", { opacity: 0 }, { opacity: 1, duration: 10 });
