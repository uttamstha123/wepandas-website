console.log('page transition')
const tl = gsap.timeline({ defaults: { ease: "Back.easeOut" } });
tl.from(".img-container", {
  opacity: 0,
  transform: "translateY(-10%)",
  duration: .6,
});
