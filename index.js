const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];
let colorChangeStarted = false;
let timerId;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');

startBtn.addEventListener("click", startChangingColors);
stopBtn.addEventListener("click", stopChangingColors);

function startChangingColors() {
  if (colorChangeStarted) {
    return;
  }
  colorChangeStarted = true;
  startBtn.disabled = true;

  timerId = setInterval(() => {
    const number = randomIntegerFromInterval(0, colors.length - 1);
    document.body.style.backgroundColor = colors[number];
  }, 1000);
}

function stopChangingColors() {
  colorChangeStarted = false;
  startBtn.disabled = false;
  clearInterval(timerId);
}
