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
canvas.addEventListener('touchstart', startDrawing);
canvas.addEventListener('touchmove', draw);
canvas.addEventListener('touchend', stopDrawing);

function startDrawing(e) {
  e.preventDefault();
  isDrawing = true;
  ctx.beginPath();
  if (e.type === 'mousedown') {
    ctx.moveTo(e.offsetX, e.offsetY);
  } else {
    ctx.moveTo(e.touches[0].offsetX, e.touches[0].offsetY);
  }
}

function draw(e) {
  e.preventDefault();
  if (!isDrawing) return;
  requestAnimationFrame(() => {
    if (e.type === 'mousemove') {
      ctx.lineTo(e.offsetX, e.offsetY);
    } else {
      ctx.lineTo(e.touches[0].offsetX, e.touches[0].offsetY);
    }
    ctx.stroke();
  });
}

function stopDrawing(e) {
  e.preventDefault();
  isDrawing = false;
}
