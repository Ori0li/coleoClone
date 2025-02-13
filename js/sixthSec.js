gsap.registerPlugin(ScrollTrigger);

const sixthSection = gsap.timeline({
  scrollTrigger: {
    trigger: ".sec06",
    start: "top top",
    end: "+=4800",
    scrub: 3,
    pin: true,
  },
});

const sixthSectionTitle = gsap.timeline({
  scrollTrigger: {
    trigger: ".sec06",
    start: "-=600",
    end: "top top",
    scrub: 3,
  },
});

sixthSectionTitle
  .fromTo(".mainTitle", { x: 0 }, { x: 780, duration: 5 })
  .fromTo(".subTitle", { x: 0 }, { x: -780, duration: 5 }, "<");

sixthSection
  .fromTo(
    ".workBox",
    { backgroundColor: "white", color: "black" },
    { backgroundColor: "black", color: "white" }
  )
  .fromTo(".photoBox", { y: 0 }, { y: -2300, duration: 6 })
  .fromTo(".workBox > button", { opacity: 0 }, { opacity: 1, duration: 2 });
