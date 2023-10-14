# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code 

## Project 01

```javascript

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  // console.log(button);

  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);

    if (e.target.id === 'grey') {
      body.style.backgroundColor = 'grey';
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = 'white';
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = 'blue';
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = 'yellow';
    }
  });
});


```

## Project 2

```Javascipt

const form = document.querySelector('form');
// console.log(form);

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height < 0 || height === '' || isNaN(height)) {
    results.innerHTML = 'Please give valid height!!!';
  } else if (weight < 0 || weight === '' || isNaN(weight)) {
    results.innerHTML = 'Please give valid height!!!';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    results.innerHTML = `<span>${bmi}</span>`;
  }
});



```

## Project 3

```Javascript

const clock = document.getElementById('clock');

// console.log(clock);

let date = new Date();

console.log(date.toLocaleTimeString());

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerText = date.toLocaleTimeString();
}, 1000);



```

## Project 4

```Javascript

let random = parseInt(Math.random() * 100 + 1);
// console.log(random);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  //
  if (isNaN(guess)) {
    alert('Please enter valid number');
  } else if (guess < 1) {
    alert('Please enter a number greater than 0');
  } else if (guess > 100) {
    alert('Please enter a number less than 101');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over!!! -  Random number was ${random}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  //
  if (guess === random) {
    displayMessage(`You guessed it right.`);
    endGame();
  } else if (guess < random) {
    displayMessage(`Number is tooooooo low`);
  } else if (guess > random) {
    displayMessage(`Number is tooooooo high`);
  }
}

function displayGuess(guess) {
  //
  userInput.value = '';
  guessSlot.innerHTML += `${guess} , `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  //
  lowOrHi.innerHTML = `<h3>${message}</h3>`;
}

function endGame() {
  //
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h3 id="newGame"">Start New Game</h3>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  //
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    random = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}


```