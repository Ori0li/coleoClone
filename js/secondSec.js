gsap.registerPlugin(ScrollTrigger);

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
  .fromTo(".textBox", { color: "black" }, { color: "white", duration: 0.3 })
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
