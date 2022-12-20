const nose = document.querySelector(".nose-path"),
  mouth = document.querySelector(".mouth-path"),
  earLeft = document.querySelector(".ear-left-path"),
  earRight = document.querySelector(".ear-right-path"),
  eyeLeft = document.querySelector(".eye-left-path"),
  eyeRight = document.querySelector(".eye-right-path");

/*
********
JQuery Section
********
*/
function toggleHoverClass(child, pandaText, outline, outlineBox) {
  $(child).addClass("fill-hover");
  $(outline).addClass("fill-hover");
  $(outlineBox).addClass("outlineBox-hover");
  $(pandaText).addClass("display-navigate-text");
}

function toggleHoverClass1(child, pandaText, outline, outlineBox) {
  $(child).removeClass("fill-hover");
  $(outline).removeClass("fill-hover");
  $(outlineBox).removeClass("outlineBox-hover");
  $(pandaText).removeClass("display-navigate-text");
}
const pandaFace = [earLeft, nose, earRight, eyeLeft, mouth, eyeRight];

pandaFace.forEach((panda, index) => {
  let outline = document.querySelector(`.outline-${index + 1}`);
  let outlineBox = document.querySelector(`.outline-box${index + 1}`);
  let pandaText = outlineBox.nextSibling;
  panda.addEventListener("mouseover", () => {
    toggleHoverClass(panda, pandaText, outline, outlineBox);
  });
  panda.addEventListener("mouseout", () => {
    toggleHoverClass1(panda, pandaText, outline, outlineBox);
  });
});
