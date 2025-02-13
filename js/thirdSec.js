gsap.registerPlugin(ScrollTrigger);

const thirdSection = gsap.timeline({
  scrollTrigger: {
    trigger: ".sec03",
    start: "-=600",
    end: "bottom top",
    scrub: 3,
  },
});

thirdSection
  .fromTo(".fistQuote", { x: 0 }, { x: "-70%", duration: 10 })
  .fromTo(".secondQuote", { x: 0 }, { x: "120%", duration: 10 }, "<")
  .fromTo(".thirdQuote", { x: 0 }, { x: "-180%", duration: 15 }, "<")
  .fromTo(".quotePeople", { x: 0 }, { x: "-100%", duration: 10 }, "<");

// Fourth Section

const fourthSection = gsap.timeline({
  scrollTrigger: {
    trigger: ".sec04",
    start: "-=600",
    end: "bottom top",
    scrub: 3,
  },
});

fourthSection.fromTo(".symbol > img", { rotate: "360deg" }, { rotate: "0deg" });
