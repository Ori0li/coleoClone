gsap.registerPlugin(ScrollTrigger);

const fourthSection = gsap.timeline({
  scrollTrigger: {
    trigger: ".sec04",
    start: "-=600",
    end: "bottom top",
    scrub: 3,
  },
});

fourthSection.fromTo(".symbol > img", { rotate: "360deg" }, { rotate: "0deg" });
