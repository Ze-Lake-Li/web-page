// VARIABLES
const elH = document.querySelectorAll(".timeline li > div");

// START
window.addEventListener("load", init);

//function init() {
//  setEqualHeights(elH);
//}

// SET EQUAL HEIGHTS
//function setEqualHeights(el) {
//  let counter = 0;
//  for (let i = 0; i < el.length; i++) {
//    const singleHeight = el[i].offsetHeight;

//    if (counter < singleHeight) {
//      counter = singleHeight;
//    }
//  }

//  for (let i = 0; i < el.length; i++) {
//    el[i].style.height = `${counter}px`;
//  }
//}



window.addEventListener("DOMContentLoaded", () => {
  const descriptionFrames = document.querySelectorAll(".timeline ol li div");

  descriptionFrames.forEach(frame => {
    frame.style.height = "auto"; // Reset any previously set height
    const contentHeight = frame.scrollHeight; // Get the content height
    frame.style.height = `${contentHeight}px`; // Set height to content height
  });
});