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
  $(child).hover(
    function () {
      $(outline).addClass("outline-hover");
    },
    function () {
      $(outline).removeClass("outline-hover");
    }
  );
  $(child).hover(
    function () {
      $(outlineBox).addClass("outlineBox-hover");
    },
    function () {
      $(outlineBox).removeClass("outlineBox-hover");
    }
  );
  $(child).hover(
    function () {
      $(pandaText).addClass("display-navigate-text");
    },
    function () {
      $(pandaText).removeClass("display-navigate-text");
    }
  );
}

const pandaFace = [earLeft, nose, earRight, eyeLeft, mouth, eyeRight];

pandaFace.forEach((panda, index) => {
  panda.addEventListener("mouseover", () => {
    let outline = document.querySelector(`.outline-${index + 1}`);
    let outlineBox = document.querySelector(`.outline-box${index + 1}`);
    let pandaText = outlineBox.nextSibling;
    toggleHoverClass(panda, pandaText, outline, outlineBox);
  });
});
