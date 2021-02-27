const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startRef = document.querySelector('button[data-action="start"]');
const stopRef = document.querySelector('button[data-action="stop"]');
let timer;

function changeColor() {
    document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
}

function start() {
  timer = setInterval(changeColor, 1000);
  startRef.disabled = true;
}

function stop() {
  clearInterval(timer);
  startRef.disabled = false;
}

startRef.addEventListener('click', start);
stopRef.addEventListener('click', stop);