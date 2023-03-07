let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.lineWidth = 3;
ctx.lineCap = 'round';
ctx.lineJoin = 'round';

let isDrawing = false;

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);

// canvas.addEventListener('touchstart', startDrawing);
// canvas.addEventListener('touchmove', draw);
// canvas.addEventListener('touchend', stopDrawing);

function startDrawing(e) {
  isDrawing = true;
  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);
}

function draw(e) {
  if (!isDrawing) return;
  console.log("second")
  requestAnimationFrame(() => {
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
  });
}

function stopDrawing(e) {
  isDrawing = false;
}






































// let canvas = document.querySelector("canvas");
// let ctx = canvas.getContext("2d");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// ctx.lineWidth = 3;
// ctx.lineCap = 'round';
// ctx.lineJoin = 'round';

// let isDrawing = false;

// canvas.addEventListener('mousedown', startDrawing);
// canvas.addEventListener('mousemove', draw);
// canvas.addEventListener('mouseup', stopDrawing);

// canvas.addEventListener('touchstart', startDrawing);
// canvas.addEventListener('touchmove', draw);
// canvas.addEventListener('touchend', stopDrawing);

// function startDrawing(e) {
//   isDrawing = true;
//   ctx.beginPath();
//   ctx.moveTo(e.offsetX, e.offsetY);
// }

// function draw(e) {
//   if (!isDrawing) return;
//   requestAnimationFrame(() => {
//     ctx.lineTo(e.offsetX, e.offsetY);
//     ctx.stroke();
//   });
// }

// function stopDrawing(e) {
//   isDrawing = false;
// }