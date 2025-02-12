gsap.registerPlugin(ScrollTrigger);

// First Section

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
  .fromTo(".title_sub", { opacity: 1 }, { opacity: 0, duration: 2 }, "<");

// Second Section

const secondSection = gsap.timeline({
  scrollTrigger: {
    trigger: ".sec02",
    start: "-=300",
    end: "bottom center",
    scrub: 3,
  },
});

const secondSectionText = gsap.timeline({
  scrollTrigger: {
    trigger: ".sec02",
    start: "-=200",
    end: "-=500",
    scrub: 3,
  },
});

secondSection.fromTo(
  ".videoBox",
  { top: "52%", right: "26%" },
  {
    top: "0px",
    right: "0px",
    width: "100%",
    height: "100vh",
    borderRadius: 0,
  }
);

secondSectionText
  .fromTo(".textBox", { color: "black" }, { color: "white", duration: 0.8 })
  .fromTo(
    ".fistText > span",
    { text: "Creativeness" },
    {
      duration: 1,
      text: "Beyond",
      ease: "none",
    }
  )
  .fromTo(
    ".fistText > p",
    { text: " is you need" },
    {
      duration: 1,
      text: " Creation!",
      ease: "none",
    }
  )
  .fromTo(
    ".secondText > p",
    { text: "for detail marketing" },
    {
      duration: 1,
      text: "Coleo Marketing Group!",
      ease: "none",
    }
  );

// Third Section

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

// Sixth Section

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

// Seventh Section
const sevenSection = gsap.timeline({
  scrollTrigger: {
    trigger: ".sec07",
    start: "-=500",
    end: "bottom top",
    scrub: 3,
    markers: true,
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
