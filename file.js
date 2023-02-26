const bird = document.getElementById('bird');
const pipe1 = document.getElementById('pipe1');
const pipe2 = document.getElementById('pipe2');
const scoreText = document.getElementById('score');

let birdTop = 200;
let birdLeft = 50;
let gravity = 2;
let score = 0;

function jump() {
  birdTop -= 50;
}

document.addEventListener('keydown', (event) => {
  if (event.code === 'Space') {
    jump();
  }
});

function gameLoop() {
  birdTop += gravity;
  bird.style.top = birdTop + 'px';
  bird.style.left = birdLeft + 'px';

  const pipe1Left = parseInt(
    window.getComputedStyle(pipe1).getPropertyValue('left')
  );
  const pipe2Left = parseInt(
    window.getComputedStyle(pipe2).getPropertyValue('left')
  );
  const pipe1Bottom = parseInt(
    window.getComputedStyle(pipe1).getPropertyValue('height')
  );
  const pipe2Bottom = parseInt(
    window.getComputedStyle(pipe2).getPropertyValue('height')
  );
  const birdBottom = parseInt(
    window.getComputedStyle(bird).getPropertyValue('top')
  );

  if (
   
