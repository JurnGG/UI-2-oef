let timer: HTMLLabelElement;
let btn: HTMLButtonElement;
let score: HTMLLabelElement;
let btns: NodeListOf<HTMLButtonElement>;
let timeleft: number;
let timerId: number | undefined;

export function ruzzle() {
  initialiseAttributes();
  btn.addEventListener('click', () => {
    stopGame();
    btn.innerHTML = 'Restart';
    fillBoard();
    updateClock();
    timerId = window.setInterval(clockTick, 1000);
  });
}

function initialiseAttributes() {
  btns = document.querySelectorAll('#bord button');
  timer = document.getElementById('lblTime') as HTMLLabelElement;
  btn = document.getElementById('btnStart') as HTMLButtonElement;
  score = document.getElementById('lblScore') as HTMLLabelElement;
  timeleft = 60;
}

function fillBoard() {
  btns.forEach((btn) => {
    btn.textContent = getLetter();
  });
}

function getLetter(weights: Record<string, number> = {}): string {
  const alphabet = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
  // Object makes it into a matrix [['e', 3],...]
  // flatMap runs the function for each entry and than puts the result into one array
  // Than the two arrays get combined
  const letters = [
    ...alphabet,
    ...Object.entries(weights).flatMap(([letter, weight]) =>
      Array(weight).fill(letter.toUpperCase()),
    ),
  ];
  // random takes value between 0 and 1 not like Java with a range
  return letters[Math.floor(Math.random() * letters.length)];
}

function clockTick() {
  timeleft -= 1;
  updateClock();

  if (timeleft <= 0) {
    stopGame();
  }
}

function updateClock() {
  timer.textContent = `Time: ${timeleft}`;
}

function stopGame() {
  if (timerId !== undefined) {
    timeleft = 60;
    updateClock();
    window.clearInterval(timerId);
    timerId = undefined;
  }
  btns.forEach((btn) => {
    btn.innerHTML = '';
  });
  btn.innerHTML = 'Start';
}
