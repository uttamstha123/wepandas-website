gsap.registerPlugin(ScrollTrigger);

let word = document.querySelector(".words");
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".container",
    // toggleActions: "play complete reverse reset",
    scrub: 1,
    start: "top top",
    end: "+=1000",
    pin: true,
    // markers: true
  },
});
gsap.set(".hero-section__title", {
  scale: 4.5,
  transform: "translateY(100%)",
});
tl.to(".hero-section__title", { duration: 2, scale: 1, ease: "sine.out" })
  .to(".hero-section__title", {
    duration: 2,
    ease: "sine.out",
    transform: "translateY(0)",
  })
  .to(".nav", {
    duration: 2,
    ease: "sine.out",
    transform: "translateY(0)",
  })
  .from(
    ".hero-section h2",
    {
      duration: 1,
      opacity: 0,
      ease: "sine.out",
    },
    "sameTime"
  )
  .from(
    ".nav",
    {
      duration: 1,
      opacity: 0,
      transform: "translateY(-100%)",
      ease: "sine.out",
      onComplete: () => {
        word.classList.add("animateWord");
      },
    },
    "sameTime-=1"
  );
