const tl = gsap.timeline({ default: { ease: "power2.easeOut" } });
tl.from(".we-section__img", {
  backgroundSize: "200%",
  duration: 6,
})
  .from(
    "h3",
    {
      opacity: 0,
      transform: "translateX(10%)",
      stagger: 0.4,
      duration: 1,
    },
    "-=6"
  )
  .from(
    ".info",
    {
      opacity: 0,
      transform: "translateY(20%)",
      stagger: 0.4,
      duration: 1,
    },
    "-=5.8"
  );
