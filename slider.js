// const slider = document.querySelector('#untitled-slider');
// let mouseDown = false;
// let startX, scrollLeft;

// let startDragging = function (e) {
//   mouseDown = true;
//   startX = e.pageX - slider.offsetLeft;
//   scrollLeft = slider.scrollLeft;
// };

// let stopDragging = function (event) {
//   mouseDown = false;
// };

// slider.addEventListener('mousemove', (e) => {
//   e.preventDefault();
//   if(!mouseDown) { return; }
//   const x = e.pageX - slider.offsetLeft;
//   const scroll = x - startX;
//   slider.scrollLeft = scrollLeft - scroll;
// });

// // Add the event listeners
// slider.addEventListener('mousedown', startDragging, false);
// slider.addEventListener('mouseup', stopDragging, false);
// slider.addEventListener('mouseleave', stopDragging, false);

// Untitled
const sliderUntitled = document.querySelector('#untitled-slider');
let mouseDownUntitled = false;
let startXUntitled, scrollLeftUntitled;

let startDraggingUntitled = function (e) {
  mouseDownUntitled = true;
  startXUntitled = e.pageX - sliderUntitled.offsetLeft;
  scrollLeftUntitled = sliderUntitled.scrollLeft;
};

let stopDraggingUntitled = function (event) {
  mouseDownUntitled = false;
};

sliderUntitled.addEventListener('mousemove', (e) => {
  e.preventDefault();
  if(!mouseDownUntitled) { return; }
  const x = e.pageX - sliderUntitled.offsetLeft;
  const scroll = x - startXUntitled;
  sliderUntitled.scrollLeft = scrollLeftUntitled - scroll;
});

// Add the event listeners
sliderUntitled.addEventListener('mousedown', startDraggingUntitled, false);
sliderUntitled.addEventListener('mouseup', stopDraggingUntitled, false);
sliderUntitled.addEventListener('mouseleave', stopDraggingUntitled, false);




//Universe
const sliderUniverse = document.querySelector('#universe-slider');
let mouseDownUniverse = false;
let startXUniverse, scrollLeftUniverse;

let startDraggingUniverse = function (e) {
  mouseDownUniverse = true;
  startXUniverse = e.pageX - sliderUniverse.offsetLeft;
  scrollLeftUniverse = sliderUniverse.scrollLeft;
};

let stopDraggingUniverse = function (event) {
  mouseDownUniverse = false;
};

sliderUniverse.addEventListener('mousemove', (e) => {
  e.preventDefault();
  if(!mouseDownUniverse) { return; }
  const x = e.pageX - sliderUniverse.offsetLeft;
  const scroll = x - startXUniverse;
  sliderUniverse.scrollLeft = scrollLeftUniverse - scroll;
});

// Add the event listeners
sliderUniverse.addEventListener('mousedown', startDraggingUniverse, false);
sliderUniverse.addEventListener('mouseup', stopDraggingUniverse, false);
sliderUniverse.addEventListener('mouseleave', stopDraggingUniverse, false);




// Typo
const sliderTypo = document.querySelector('#typo-slider');
let mouseDownTypo = false;
let startXTypo, scrollLeftTypo;

let startDraggingOther = function (e) {
  mouseDownTypo = true;
  startXTypo = e.pageX - sliderTypo.offsetLeft;
  scrollLeftTypo = sliderTypo.scrollLeft;
};

let stopDraggingOther = function (event) {
  mouseDownTypo = false;
};

sliderTypo.addEventListener('mousemove', (e) => {
  e.preventDefault();
  if(!mouseDownTypo) { return; }
  const x = e.pageX - sliderTypo.offsetLeft;
  const scroll = x - startXTypo;
  sliderTypo.scrollLeft = scrollLeftTypo - scroll;
});

// Add the event listeners
sliderTypo.addEventListener('mousedown', startDraggingOther, false);
sliderTypo.addEventListener('mouseup', stopDraggingOther, false);
sliderTypo.addEventListener('mouseleave', stopDraggingOther, false);

