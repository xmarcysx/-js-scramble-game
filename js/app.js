const wordText = document.querySelector('.word');
const hintText = document.querySelector('.hint span');
const refreshBtn = document.querySelector('.refresh-word');
const checkBtn = document.querySelector('.check-word');
const inputUser = document.querySelector('input');

let correctWord;

const initGame = () => {
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
};

const checkHandler = () => {
  let userWord = inputUser.value.toLocaleLowerCase();
  if (userWord === correctWord) {
    alert('GOOD JOB!');
    inputUser.value = '';
    initGame();
  } else {
    alert('It is not a correct answer');
  }
};

checkBtn.addEventListener('click', checkHandler);
refreshBtn.addEventListener('click', initGame);

initGame();
