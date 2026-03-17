import { wordlist } from './wordlist';

let timer: HTMLLabelElement;
let btn: HTMLButtonElement;
let score: HTMLLabelElement;
let btns: NodeListOf<HTMLButtonElement>;
let wordDisplay: HTMLLabelElement;
let timeleft: number;
let timerId: number | undefined;
let isDragging = false;
let selected: HTMLButtonElement[] = [];
const guessedWords = new Set<string>();
let inputLocked = false;
// Set instead of array used because array includes loops trough all elements (164313 words) while set looks up hash and jumps to it
const wordDir = new Set(wordlist);

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
  wordDisplay = document.getElementById('lblWord') as HTMLLabelElement;
  timeleft = 60;
  document.addEventListener('pointerup', () => {
    if (!isDragging) return;
    isDragging = false;
    const word = selected
      .map((btn) => btn.textContent)
      .join('')
      .toLowerCase();
    checkWord(word);
  });
}

function fillBoard() {
  btns.forEach((btn) => {
    btn.dataset;
    btn.textContent = getLetter();

    btn.addEventListener('pointerdown', () => {
      if (inputLocked) return;
      resetSelection();
      isDragging = true;
      addLetter(btn);
    });

    btn.addEventListener('pointerenter', () => {
      if (!isDragging) return;
      // If the user drags back to the previous letter, remove the last added letter
      if (btn === selected[selected.length - 2]) {
        removeLastLetter();
        return;
      }
      if (
        !selected.includes(btn) &&
        isAdjacent(selected[selected.length - 1], btn)
      ) {
        addLetter(btn);
      }
    });
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

function addLetter(btn: HTMLButtonElement) {
  selected.push(btn);
  btn.classList.add('selected');
  wordDisplay.textContent += btn.textContent;
}

function removeLastLetter() {
  if (selected.length > 0) {
    const lastBtn = selected.pop();
    if (lastBtn) {
      lastBtn.classList.remove('selected');
      wordDisplay.textContent = wordDisplay.textContent.slice(0, -1);
    }
  }
}

function resetSelection() {
  selected.forEach((btn) => {
    btn.classList.remove('selected');
    btn.classList.remove('alreadyGuessed');
    btn.classList.remove('wrongWord');
    btn.classList.remove('rightWord');
  });
  wordDisplay.textContent = '';
  selected = [];
}

function isAdjacent(a: HTMLButtonElement, b: HTMLButtonElement): boolean {
  const ax = Number(a.dataset.x);
  const ay = Number(a.dataset.y);

  const bx = Number(b.dataset.x);
  const by = Number(b.dataset.y);
  // Check if the buttons are adjacent (including diagonals)
  // By checking if the x and y coordinates are within 1 unit of each other so can only be one step away in x and y direction
  return Math.abs(ax - bx) <= 1 && Math.abs(ay - by) <= 1;
}

function clockTick() {
  timeleft -= 1;
  updateClock();

  if (timeleft <= 0) {
    stopGame();
  }
}
function updateScore(num: number) {
  const currentScore = Number(score.textContent?.split(' ')[1] || 0);
  score.textContent = `Score: ${currentScore + num}`;
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
  score.textContent = 'Score: 0';
  btns.forEach((btn) => {
    btn.innerHTML = '';
  });
  btn.innerHTML = 'Start';
}

function checkWord(word: string) {
  inputLocked = true;

  if (guessedWords.has(word)) {
    selected.forEach((btn) => {
      wordDisplay.textContent = `${word} already guessed`;
      btn.classList.add('alreadyGuessed');
    });
    // wordlist is very inefficient for lookup use set instead
    //} else if (wordlist.includes(word)) {
  } else if (wordDir.has(word)) {
    selected.forEach((btn) => {
      wordDisplay.textContent = `+${word} not found`;
      btn.classList.add('rightWord');
    });
    wordDisplay.textContent = `+${word.length} points`;
    guessedWords.add(word);
    updateScore(word.length);
  } else {
    selected.forEach((btn) => {
      wordDisplay.textContent = `${word} not found`;
      btn.classList.add('wrongWord');
    });
  }

  setTimeout(() => {
    resetSelection();
    inputLocked = false;
  }, 500);
}
