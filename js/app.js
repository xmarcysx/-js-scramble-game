const wordText = document.querySelector('.word');
const hintText = document.querySelector('.hint span');
const timerText = document.querySelector('.time span b');
const refreshBtn = document.querySelector('.refresh-word');
const checkBtn = document.querySelector('.check-word');
const inputUser = document.querySelector('input');

let correctWord;
let timer;

const initTimer = (maxTime) => {
  clearInterval(timer);
  timer = setInterval(() => {
    if (maxTime > 0) {
      maxTime--;
      return (timerText.innerText = maxTime);
    }
    clearInterval(timer);
    alert('Time finished!');
    initGame();
  }, 1000);
};

const initGame = () => {
  initTimer(30);
  let randomObj = words[Math.floor(Math.random() * words.length)];
  let wordArray = randomObj.word.split('');
  let hint = randomObj.hint;

  //function for shuffling and swipping wordArray letters
  for (let i = wordArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = wordArray[i];
    wordArray[i] = wordArray[j];
    wordArray[j] = temp;
  }
  correctWord = randomObj.word;
  wordText.innerText = wordArray.join('');
  hintText.innerText = hint;
  inputUser.value = '';
};

const checkHandler = () => {
  let userWord = inputUser.value.toLocaleLowerCase();
  if (!userWord) return alert('Please enter a word');
  if (userWord === correctWord) {
    alert('GOOD JOB!');
    initGame();
  } else {
    alert('It is not a correct answer');
  }
};

checkBtn.addEventListener('click', checkHandler);
refreshBtn.addEventListener('click', initGame);

initGame();
